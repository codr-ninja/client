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

  function handleSubmit(event) {
    event.preventDefault();

    try {
      const userSolution = eval(`(${solution})`);

      let hasError = false;
      // console.time('runTime');
      for (const testCase of question.testCases) {
        if (userSolution(testCase.input) !== testCase.output) {
          toast.error('A sua solução está incorreta.');

          hasError = true;
          break;
        }
      }
      // const timer = console.timeEnd('runTime');

      if (hasError) {
        toast.error('Solução inválida');
      } else {
        toast.success('Parabéns! A sua solução está correta');
        // SALVAR TENTATIVA NO FIREBASE
      }
    } catch (error) {
      toast.error('Código inválido');
    }
  }

  // function setSolution(event, value) {
  //   console.log(event);
  //   console.log(value);
  // }

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
