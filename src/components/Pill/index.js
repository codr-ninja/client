import React from 'react';
import styled from 'styled-components';

const Pill = ({ text, value, margin, padding }) => (
  <PillTag padding={padding} margin={margin}>
    <span>{text}</span>
    {value && <b>{value}</b>}
  </PillTag>
);

export const PillTag = styled.div`
  background-color: ${props => props.background || '#bd93f9'};
  display: flex;
  justify-content: center;
  color: #44475a;
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
