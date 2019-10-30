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
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 8px 1fr;
  grid-template-areas: 'statement bar editor';
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  height: 75vh;
`;

export const LanguageSelector = styled.select`
  grid-area: select-lang;
  padding: 8px;
  background-color: transparent;
  border: 2px solid #bd93f9;
  border-radius: 2px;
  font-size: 12px;
  color: #bd93f9;
  height: 32px;
  width: 128px;

  & > option {
    color: #bd93f9;
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
  }

  &::after {
    content: '';

    position: absolute;
    width: 4px;
    height: 4px;
    background-color: #bd93f9;
    border-radius: 100%;
    top: 8px;
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
  font-size: 16px;
`;
