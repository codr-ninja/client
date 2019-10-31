import React from 'react';
import styled from 'styled-components';
import arrowDown from '../../assets/svg/arrow-down.svg';
import arrowUp from '../../assets/svg/arrow-up.svg';

const Filter = ({ text, active, isClicked, setIsClicked }) => (
  <FilterTag onClick={() => setIsClicked(text)}>
    <Text>{text}</Text>
    <Icon src={active ? arrowUp : arrowDown} alt="arrow" />
  </FilterTag>
);

const FilterTag = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  cursor: pointer;
`;

const Text = styled.span`
  color: #bd93f9;
  font-size: calc(10px + 0.15vw);

  @media only screen and (max-width: 1024px) {
    font-size: calc(10px + 0.5vw);
  }
`;

const Icon = styled.img`
  margin-left: 15px;
`;

export default Filter;
