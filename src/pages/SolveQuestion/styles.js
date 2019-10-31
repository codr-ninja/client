import styled from 'styled-components';
import { lighten } from 'polished';

export const Container = styled.div`
  background-color: #44475a;
  padding: 0 5vw 48px;
`;

export const Settings = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'empty select-lang';
  margin-bottom: 12px;

  @media only screen and (max-width: 768px) {
    grid-template-areas: 'select-lang empty';
  }
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 8px 1fr;
  grid-template-areas: 'statement bar editor';
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  height: 75vh;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: 40vh 8px 40vh;
    grid-template-areas: 'statement' 'bar' 'editor';
    height: unset;
  }
`;

export const LanguageSelector = styled.select`
  grid-area: select-lang;
  padding: 8px;
  background-color: transparent;
  border: 2px solid #282a36;
  border-radius: 2px;
  font-weight: Bold;
  color: #282a36;
  height: 32px;
  width: 128px;
  font-size: calc(10px + 0.15vw);
  margin: 24px 0;

  @media only screen and (max-width: 1024px) {
    font-size: calc(10px + 0.5vw);
  }

  & > option {
    color: #282a36;
  }
`;

export const StatementContainer = styled.div`
  padding: 24px 36px;
  color: #bd93f9;
`;

export const Title = styled.h1`
  font-family: 'Comfortaa', cursive;
  font-size: calc(16px + 1vw);
  font-weight: 400;
`;

export const Statement = styled.div`
  font-size: calc(10px + 0.295vw);
  margin: 24px 0 0;

  & > p {
    :last-of-type {
      margin: 24px 0 4px;
    }
  }

  @media only screen and (max-width: 1024px) {
    font-size: calc(10px + 1vw);
  }
`;

export const Example = styled.div`
  background-color: #282a36;
  padding: 12px 24px;
  color: #f8f8f2;

  & > p {
    font-size: calc(10px + 0.295vw);

    @media only screen and (max-width: 1024px) {
      font-size: calc(10px + 1vw);
    }

    & > b {
      color: #bd93f9;
    }
  }
`;

export const WidthBar = styled.div`
  grid-area: bar;
  cursor: pointer;
  background-color: #282a36;
  width: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.25s ease;

  &:hover {
    background-color: ${lighten(0.025, '#282a36')};
  }

  @media only screen and (max-width: 768px) {
    height: 8px;
    width: 100%;
  }
`;

export const Indicator = styled.span`
  width: 4px;
  height: 4px;
  background-color: #bd93f9;
  border-radius: 100%;
  position: relative;

  &::before {
    content: '';

    position: absolute;
    width: 4px;
    height: 4px;
    background-color: #bd93f9;
    border-radius: 100%;
    top: -8px;

    @media only screen and (max-width: 768px) {
      left: -8px;
      top: unset;
    }
  }

  &::after {
    content: '';

    position: absolute;
    width: 4px;
    height: 4px;
    background-color: #bd93f9;
    border-radius: 100%;
    top: 8px;

    @media only screen and (max-width: 768px) {
      left: 8px;
      top: unset;
    }
  }
`;

export const EditorWrapper = styled.div`
  grid-area: editor;
  height: inherit;
`;

export const QuestionFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 12px;
`;

export const Submit = styled.button`
  background-color: #bd93f9;
  color: #282a36;
  text-align: center;
  padding: 6px 36px;
  border: none;
  border-radius: 2px;
  font-size: calc(10px + 0.295vw);

  @media only screen and (max-width: 1024px) {
    font-size: calc(10px + 1vw);
  }
`;
