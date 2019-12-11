import React, { useState, useEffect } from 'react';
import {
  Container,
  SearchInput,
  Flex,
  Wrapper,
  SubTitle,
  QuestionList,
  QuestionListHeader,
  QuestionListItem,
} from './styles';
import Pill from '../../components/Pill';
import Filter from '../../components/Filter';
import bookMark from '../../assets/svg/bookmark.svg';
import { firestore } from '../../util/firebase';

function QuestionsList() {
  const [isClicked, setIsClicked] = useState('');
  const [questions, setQuestions] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const fetchQuestions = async () => {
      const snapshot = await firestore
        .collection('questions')
        .orderBy('questionId', 'asc')
        .get();
      const result = [];

      snapshot.forEach(doc => {
        result.push({ id: doc.id, ...doc.data() });
      });

      setQuestions(result);
    };

    fetchQuestions();
  }, []);

  console.log(input);
  console.log(
    questions.filter(question =>
      question.title.toUpperCase().includes(input.toUpperCase())
    )
  );

  return (
    <Container>
      <Wrapper>
        <Flex flex="3" padding="0 40px 0 0" flow="column" className="filter">
          <Flex alignItems="center" style={{ width: '100%' }}>
            <SearchInput
              placeholder="busque por id, enunciado"
              onChange={e => setInput(e.target.value)}
            />
            <Flex justifyContent="space-between" className="filter-toggle">
              <Filter
                text="dificuldade"
                active={isClicked === 'dificuldade'}
                {...{ isClicked, setIsClicked }}
              />
              <Filter
                text="status"
                active={isClicked === 'status'}
                {...{ isClicked, setIsClicked }}
              />
              <Filter
                text="tags"
                active={isClicked === 'tags'}
                {...{ isClicked, setIsClicked }}
              />
            </Flex>
          </Flex>
          <QuestionList>
            <QuestionListHeader>
              <p>Id</p>
              <p>Titulo</p>
              <p>Dificuldade</p>
            </QuestionListHeader>
            {questions
              .filter(question =>
                question.title.toUpperCase().includes(input.toUpperCase())
              )
              .map(question => (
                <QuestionListItem
                  to={{ pathname: `/solve/${question.questionId}` }}
                >
                  <p>{question.questionId}</p>
                  <p>{question.title}</p>
                  <Pill
                    text={question.level}
                    key={question.questionId}
                    background="#282a36"
                    color="#bd93f9"
                    width="96px"
                  />
                </QuestionListItem>
              ))}
          </QuestionList>
        </Flex>
        <Flex padding="0 0 0 40px" className="topic">
          <Flex flow="column">
            <Flex alignItems="center">
              <img
                src={bookMark}
                alt="bookMark"
                style={{ marginRight: '10px' }}
              />
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
      </Wrapper>
    </Container>
  );
}

export default QuestionsList;
