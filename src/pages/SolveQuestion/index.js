import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  Container,
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

  return question ? (
    <Container>
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
            value="// Escreva o seu código aqui"
          />
        </EditorWrapper>
      </Content>
      <QuestionFooter>
        <Submit type="submit">enviar</Submit>
      </QuestionFooter>
    </Container>
  ) : (
    <div />
  );
}

export default SolveQuestion;
