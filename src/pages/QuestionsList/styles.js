import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 80vh;
  padding: 0 5vw 48px;
  background-color: ${props =>
    props.theme === 'clear' ? '#f8f8f2' : '#44475a'};
  padding-top: 50px;
`;

export const SearchInput = styled.input`
  background-color: #44475a;
  width: 100%;
  padding: 0 20px;
  height: 40px;
  border-radius: 20px;
  border: 2px solid #bd93f9;
  color: #bd93f9;
  font-size: calc(10px + 0.15vw);

  @media only screen and (max-width: 1024px) {
    font-size: calc(10px + 0.5vw);
  }

  ::placeholder {
    color: #bd93f9;
  }
`;

export const Flex = styled.div`
  display: flex;
  flex-flow: ${props => props.flow || 'row'};
  flex-wrap: ${props => props.wrap || 'nowrap'};
  justify-content: ${props => props.justifyContent || 'flex-start'};
  align-items: ${props => props.alignItems || 'flex-start'};
  flex: ${props => props.flex || '1'};
  padding: ${props => props.padding || '0'};
`;

export const SubTitle = styled.h4`
  color: #bd93f9;
  font-weight: 800;
  font-size: calc(10px + 0.35vw);
`;

export const QuestionList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 100%;
  margin-top: 24px;
`;

export const QuestionListHeader = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  color: #bd93f9;
  margin-bottom: 4px;
  padding: 0 20px;
  font-size: calc(10px + 0.35vw);
`;

export const QuestionListItem = styled(Link)`
  text-decoration: none;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  background-color: #bd93f9;
  border-radius: 12px;
  color: #282a36;
  margin-bottom: 16px;
  padding: 12px 20px;
  font-size: calc(10px + 0.35vw);
  transition: all 0.25s ease;

  :hover {
    box-shadow: 0 0 4px #bd93f9;
  }

  & > p {
    display: flex;
    align-self: center;
  }
`;
