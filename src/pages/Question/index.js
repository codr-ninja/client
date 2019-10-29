import React from 'react';
import {
  Container,
  Settings,
  LanguageSelector,
  Content,
  WidthBar,
  Indicator,
  EditorWrapper,
  QuestionFooter,
  Submit,
} from './styles';
import CodeEditor from '../../components/Editor';

function Question() {
  return (
    <Container>
      <Settings>
        <LanguageSelector>
          <option value="javascript">Javascript</option>
        </LanguageSelector>
      </Settings>
      <Content>
        <WidthBar>
          <Indicator />
        </WidthBar>
        <EditorWrapper>
          <CodeEditor value="// Escreva o seu código aqui" />
        </EditorWrapper>
      </Content>
      <QuestionFooter>
        <Submit type="submit">enviar</Submit>
      </QuestionFooter>
    </Container>
  );
}

export default Question;
