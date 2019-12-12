import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { firestore } from '../../util/firebase';
import { Wrapper, Question, CustomLink, Text } from './styles';

function Attempts() {
  const [userAttempts, setUserAttempts] = useState([]);
  const user = useSelector(state => state.user);
  const hasUserInfo = Boolean(Object.keys(user).length);

  async function getAttempts(email) {
    const snapshot = await firestore
      .collection('attempts')
      .where('user', '==', email)
      .get();

    const result = [];

    snapshot.forEach(doc => {
      result.push({ id: doc.id, ...doc.data() });
    });

    setUserAttempts(result);
  }

  if (hasUserInfo) {
    getAttempts(user.email);
  }
  return (
    <Wrapper>
      {!userAttempts.length && !hasUserInfo && (
        <Text>Por favor faça login para ver suas tentativas</Text>
      )}
      {!userAttempts.length && hasUserInfo && (
        <Text>Você não possui tentativas</Text>
      )}
      {userAttempts.map(attempt => (
        <Question>
          <CustomLink to={`/solve/${attempt.question.id}`}>
            Questão: {attempt.question.title}
          </CustomLink>
          <p>{attempt.isCorrect ? 'Correto' : 'Incorreto'}</p>
        </Question>
      ))}
    </Wrapper>
  );
}

export default Attempts;
