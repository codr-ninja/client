import React from 'react';
import { Container, Logo, Nav, NavLink } from './styles';

export function Header() {
  return (
    <Container>
      <Logo to="/">codr</Logo>
      <Nav>
        <NavLink to="/questions">problemas</NavLink>
        <NavLink to="/questions">entrar</NavLink>
      </Nav>
    </Container>
  );
}
