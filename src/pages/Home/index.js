import React from 'react';
<<<<<<< HEAD
import code from '../../assets/svg/code.svg';
import {
  Container,
  Top,
  Svg,
  Title,
  TextContainer,
  Paragraph,
  Button,
} from './styles';

function LandingPage() {
  return (
    <Container>
      <Top>
        <TextContainer>
          <Title>
            Atinja o próximo nível de suas habilidades de criação de código
          </Title>
          <Paragraph>
            Com a ajuda dos desafios propostos por nós da codr, exercite os seus
            conhecimento sem algoritmos e estruturas de dados, e receba feedback
            sobre a sua performance. Além disso, batalhe contra outros
            desenvolvedores para descobrir quem consegue chegar na solução de um
            problema mais rapidamente!
          </Paragraph>
          <Button>ver desafios</Button>
        </TextContainer>
        <Svg src={code} alt="codes" />
      </Top>
    </Container>
  );
=======
import LandingPage from '../LandingPage';

export default function Home() {
  return <LandingPage />;
>>>>>>> fb1ccc7d9607246827ed99d4a8e399545c899278
}

export default LandingPage;
