import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  height: 100vh;
  padding: 0 5vw 48px;
  background-color: ${props =>
    props.theme === 'clear' ? '#f8f8f2' : '#44475a'};
  padding-top: 50px;
`;

export const SearchInput = styled.input`
  background-color: #44475a;
  width: 100%;
  padding: 0 20px;
  height: 35px;
  border-radius: 20px;
  border: 2px solid #bd93f9;

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
`;
