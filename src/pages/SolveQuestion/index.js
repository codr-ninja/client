/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-eval */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import {
  Form,
  Settings,
  LanguageSelector,
  Content,
  StatementContainer,
  Title,
  Statement,
  Example,
  WidthBar,
  Indicator,
  EditorWrapper,
  QuestionFooter,
  Submit,
} from './styles';
import CodeEditor from '../../components/Editor';
import { firestore } from '../../util/firebase';

function SolveQuestion() {
  const { id } = useParams();
  const questionId = Number(id);

  const [question, setQuestion] = useState();
  const [solution, setSolution] = useState('// Escreva o seu código aqui');

  useEffect(() => {
    const fetchQuestion = async () => {
      const snapshot = await firestore
        .collection('questions')
        .where('questionId', '==', questionId)
        .get();
      let result;

      snapshot.forEach(doc => {
        result = { id: doc.id, ...doc.data() };
      });

      setQuestion(result);
    };

    fetchQuestion();
  }, [questionId]);

  function getEditorFontSize() {
    return window.innerWidth < 1024 ? '16px' : '14px';
  }

  function saveAttempt(attempt) {
    firestore
      .collection('attempts')
      .add(attempt)
      .then(a => console.log(a));
  }

  function handleSubmit(event) {
    event.preventDefault();

    try {
      const userSolution = eval(`(${solution})`);

      const start = window.performance.now();

      let hasError = false;
      for (const testCase of question.testCases) {
        if (userSolution(testCase.input) !== testCase.output) {
          toast.error('A sua solução está incorreta.');

          hasError = true;
          break;
        }
      }

      const finish = window.performance.now();
      const elapsedTime = (finish - start).toFixed(2);
      console.log(elapsedTime);

      if (hasError) {
        toast.error('Solução inválida');
        return saveAttempt({
          code: solution,
          user: 'thallescarvalho12@gmail.com',
          isCorrect: false,
        });
      }
      toast.success('Parabéns! A sua solução está correta');
      toast.info(`Tempo de execução: ${elapsedTime}/ms`);

      return saveAttempt({
        code: solution,
        user: 'thallescarvalho12@gmail.com',
        elapsedTime,
        isCorrect: true,
      });
    } catch (error) {
      toast.error('Código inválido');
    }

    return null;
  }

  return question ? (
    <Form onSubmit={handleSubmit}>
      <Settings>
        <LanguageSelector>
          <option value="javascript">Javascript</option>
        </LanguageSelector>
      </Settings>
      <Content>
        <StatementContainer>
          <Title>
            {question.questionId} - {question.title}
          </Title>
          <Statement>
            <p>{question.statement}</p>
            <p>Exemplo: </p>
          </Statement>
          <Example>
            <p dangerouslySetInnerHTML={{ __html: question.example }} />
          </Example>
        </StatementContainer>
        <WidthBar>
          <Indicator />
        </WidthBar>
        <EditorWrapper>
          <CodeEditor
            fontSize={getEditorFontSize()}
            onChange={(e, value) => setSolution(value)}
            value={solution}
          />
        </EditorWrapper>
      </Content>
      <QuestionFooter>
        <Submit type="submit">enviar</Submit>
      </QuestionFooter>
    </Form>
  ) : (
    <div />
  );
}

export default SolveQuestion;
