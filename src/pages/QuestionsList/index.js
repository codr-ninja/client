import React, { useState } from 'react';
import { Container, SearchInput, Flex, SubTitle, Table, Thead, Trow, Td } from './styles';
import Pill from '../../components/Pill';
import Filter from '../../components/Filter';
import bookMark from '../../assets/svg/bookmark.svg';

function QuestionsList() {
  const [isClicked, setIsClicked] = useState('')
  return (
    <Container>
      <Flex>
        <Flex flex="3" padding="0 40px 0 0" flow="column">
          <Flex alignItems="center" style={{ width: '100%' }}>
            <SearchInput placeholder="busque por id, enunciado" />
            <Flex>
              <Filter text='dificuldade' active={isClicked === 'dificuldade'} {...{ isClicked, setIsClicked }} />
              <Filter text='status' active={isClicked === 'status'} {...{ isClicked, setIsClicked }} />
              <Filter text='tags' active={isClicked === 'tags'} {...{ isClicked, setIsClicked }} />
            </Flex>
          </Flex>
          <Table>
            <Flex flex="1" padding="0 20px">
              <Thead>Id</Thead>
              <Thead>Título</Thead>
              <Thead>aceitação</Thead>
              <Thead>dificuldade</Thead>
            </Flex>
            <Trow>
              <Td>1</Td>
              <Td>Jill</Td>
              <Td>Smith</Td>
              <Td><Pill text="fácil" background="#44475a" color="#bd93f9" width="100" /></Td>
            </Trow>
            <Trow>
              <Td>2</Td>
              <Td>Eve</Td>
              <Td>Jackson</Td>
              <Td><Pill text="difícil" background="#44475a" color="#bd93f9" width="100" /></Td>
            </Trow>
            <Trow>
              <Td>3</Td>
              <Td>John</Td>
              <Td>Doe</Td>
              <Td><Pill text="fácil" background="#44475a" color="#bd93f9" width="100" /></Td>
            </Trow>
          </Table>
        </Flex>
        <Flex padding="0 0 0 40px">
          <Flex flow="column">
            <Flex alignItems="center">
              <img src={bookMark} alt="bookMark" style={{ marginRight: '10px' }} />
              <SubTitle>tópicos</SubTitle>
            </Flex>
            <Flex padding="15px 0" wrap="wrap">
              <Pill text="matemática" value="110" margin="0 10px 10px 0" />
              <Pill text="array" value="110" margin="0 10px 10px 0" />
              <Pill text="for" value="110" margin="0 10px 10px 0" />
              <Pill text="matemática" value="110" margin="0 10px 10px 0" />
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
}

export default QuestionsList;
