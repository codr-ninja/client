import React from 'react';
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
}

export default LandingPage;
