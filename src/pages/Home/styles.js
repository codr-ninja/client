import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 80vh;
  padding: 0 5vw 48px;
  background-color: ${props =>
    props.theme === 'clear' ? '#f8f8f2' : '#44475a'};
`;

export const Top = styled.div`
  padding-top: 5vh;
  display: flex;
  flex: 1;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextContainer = styled.div`
  font-family: 'Montserrat', sans-serif;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h1`
  font-family: 'Comfortaa', sans-serif;
  max-width: 45vw;
  font-size: 36px;
  font-weight: 100;
  color: #bd93f9;
`;

export const Button = styled.button`
  font-family: 'Comfortaa', sans-serif;
  font-size: 14px;
  background-color: #bd93f9;
  font-weight: bold;
  color: #44475a;
  border: none;
  border-radius: 1000vw;
  padding: 0.4rem 2.4rem;
  height: min-content;
  margin-top: 2.4rem;
`;

export const Paragraph = styled.p`
  max-width: 45vw;
  line-height: 25px;
  margin-top: 5vh;
  color: #bd93f9;
`;

export const Svg = styled.img`
  width: 500px;
  height: auto;
`;
