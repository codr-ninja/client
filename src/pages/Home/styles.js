import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  grid-column-gap: 32px;
  height: 80vh;
  padding: 48px 5vw;
  background-color: ${props =>
    props.theme === 'clear' ? '#f8f8f2' : '#44475a'};

  @media only screen and (max-width: 1024px) {
    display: flex;
    flex-direction: column-reverse;
    justify-content: center;
    align-items: center;
    height: 82.5vh;
  }

  @media only screen and (max-width: 768px) {
    height: unset;
  }
`;

export const TextContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 40px;

  @media only screen and (max-width: 1024px) {
    margin-top: 20px;
    align-items: center;
  }
`;

export const Title = styled.h1`
  font-family: 'Comfortaa', sans-serif;
  font-size: calc(20px + 1vw);
  font-weight: 100;
  color: #bd93f9;
  width: 80%;

  @media only screen and (max-width: 1024px) {
    text-align: center;
    font-size: calc(14px + 1vw);
    width: 100%;
  }
`;

export const Button = styled(Link)`
  text-decoration: none;
  font-family: 'Comfortaa', sans-serif;
  font-size: calc(10px + 0.295vw);
  background-color: #bd93f9;
  font-weight: bold;
  color: #44475a;
  border: none;
  border-radius: 1000vw;
  padding: 8px 48px;
  height: min-content;

  @media only screen and (max-width: 1024px) {
    font-size: calc(10px + 1vw);
  }
`;

export const Paragraph = styled.p`
  line-height: 1.6;
  margin: 40px 0 36px;
  font-size: calc(10px + 0.295vw);
  color: #bd93f9;
  width: 80%;

  @media only screen and (max-width: 1024px) {
    width: 100%;
    font-size: calc(10px + 1vw);
  }
`;

export const Svg = styled.img`
  max-width: 80%;
  width: 80%;
  height: auto;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    width: calc(100px + 30vw);
  }
`;
