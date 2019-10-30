import React from 'react';
import { Container, SearchInput, Flex, SubTitle } from './styles';
import Pill from '../../components/Pill';

function QuestionsList() {
  return (
    <Container>
      <Flex flex="3" padding="0 40px 0 0">
        <SearchInput placeholder="busque por id, enunciado" />
      </Flex>
      <Flex padding="0 0 0 40px">
        <Flex flow="column">
          <SubTitle>tópicos</SubTitle>
          <Flex padding="15px 0" wrap="wrap">
            <Pill text="matemática" value="110" margin="0 10px 10px 0" />
            <Pill text="array" value="110" margin="0 10px 10px 0" />
            <Pill text="for" value="110" margin="0 10px 10px 0" />
            <Pill text="matemática" value="110" margin="0 10px 10px 0" />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}

export default QuestionsList;
