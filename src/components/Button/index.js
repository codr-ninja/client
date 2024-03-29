import React from 'react';
import styled from 'styled-components';

const Button = ({ children, onClick }) => (
    <ButtonTag onClick={onClick}>{children}</ButtonTag>
)

const ButtonTag = styled.button`
background: #282a36;
color: #fff;
padding: 10px 16px;
width: 160px;
border-radius: 12px;
border: none;
font-weight: 600;
font-size: 12px;
margin-top: 8px;
cursor: pointer;
box-shadow: 0 2px 6px rgba(0, 0, 0, 0.5);
`

export default Button;