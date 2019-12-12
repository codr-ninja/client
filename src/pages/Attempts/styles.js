import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  background-color: #44475a;
  padding: 0 5vw 48px;
  min-height: 80vh;
`;

export const Question = styled.div`
  text-decoration: none;
  display: grid;
  grid-template-columns: 1fr 15%;
  background-color: #bd93f9;
  border-radius: 12px;
  color: #282a36;
  margin-bottom: 16px;
  padding: 12px 20px;
  font-size: calc(10px + 0.35vw);
  transition: all 0.25s ease;
  font-weight: 600;

  :hover {
    box-shadow: 0 0 4px #bd93f9;
  }

  & > p {
    display: flex;
    align-self: center;
  }
`;

export const CustomLink = styled(Link)`
  color: #282a36;
  text-decoration: none;
`;

export const Text = styled.p`
  color: #bd93f9;
`;
