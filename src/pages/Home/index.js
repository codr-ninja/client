import React from 'react';
import code from '../../assets/svg/code.svg';
import {
  Container,
  Svg,
  Title,
  TextContainer,
  Paragraph,
  Button,
} from './styles';

function Home() {
  return (
    <Container>
      <TextContainer>
        <Title>
          Atinja o próximo nível de suas <br /> habilidades de criação de código
        </Title>
        <Paragraph>
          Com a ajuda dos desafios propostos por nós da codr, exercite os seus
          conhecimentos em algoritmos e estruturas de dados, e receba feedback
          sobre a sua performance. Além disso, batalhe contra outros
          desenvolvedores para descobrir quem consegue chegar na solução de um
          problema mais rapidamente!
        </Paragraph>
        <Button to="/questions">ver desafios</Button>
      </TextContainer>
      <Svg src={code} alt="codes" />
    </Container>
  );
}

export default Home;
