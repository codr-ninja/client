import styled from 'styled-components';

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

export const Table = styled.div`
  width: 100%;
  margin-top: 25px;
  border-spacing: 0;
`
export const Thead = styled.div`
  display: flex;
  flex: 1;
  text-align: left;
  font-size: 14px;
  font-weight: 600;
  color: #bd93f9;
  padding: 15px 0;
`
export const Trow = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
  align-items: center;
  background-color: #bd93f9;
  margin: 15px 0;
  border-radius: 20px;
  padding: 20px;

  &:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: .2s;
  }
`

export const Td = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: nowrap;
`