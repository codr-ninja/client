import React from 'react';
import styled from 'styled-components';

const Pill = ({ text, value, margin, padding, color, background, width }) => (
  <PillTag
    padding={padding}
    margin={margin}
    color={color}
    background={background}
    width={width}
  >
    <span>{text}</span>
    {value && <b>{value}</b>}
  </PillTag>
);

export const PillTag = styled.div`
  background-color: ${props => props.background || '#bd93f9'};
  display: flex;
  justify-content: center;
  color: ${props => props.color || '#44475a'};
  min-width: 50px;
  padding: ${props => props.padding || '5px 10px'};
  margin: ${props => props.margin || '0'};
  border-radius: 20px;
  font-size: 12px;
  width: ${props => props.width || 'unset'};

  b {
    margin-left: 15px;
  }
`;

export default Pill;
