import React from 'react';
import styled from 'styled-components';

const Pill = ({ text, value, margin, padding, background, color, width }) => (
  <PillTag {...{ padding, margin, background, color, width }}>
    <span>{text}</span>
    {value && <b>{value}</b>}
  </PillTag>
);

export const PillTag = styled.div`
  background-color: ${props => props.background || '#bd93f9'};
  display: flex;
  justify-content: center;
  color:  ${props => props.color || '#44475a'};
  width: ${props => `${props.width}px` || '50px'};
  min-width: 50px;
  padding: ${props => props.padding || '5px 10px'};
  margin: ${props => props.margin || '0'};
  border-radius: 20px;
  font-size: 12px;

  b {
    margin-left: 15px;
  }
`;

export default Pill;
