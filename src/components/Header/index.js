import React from 'react';
import { Container, Logo, Nav, NavLink } from './styles';

export function Header({ setModalOpen }) {
  return (
    <Container>
      <Logo to="/">codr</Logo>
      <Nav>
        <NavLink to="/questions">problemas</NavLink>
        <NavLink onClick={() => setModalOpen(true)}>entrar</NavLink>
      </Nav>
    </Container>
  );
}
