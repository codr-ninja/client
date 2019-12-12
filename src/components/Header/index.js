import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Logo, Nav, NavLink } from './styles';

export function Header({ setModalOpen }) {
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  return (
    <Container>
      <Logo to="/">codr</Logo>
      <Nav>
        <NavLink to="/questions">problemas</NavLink>
        {!isAuthenticated && (
          <NavLink onClick={() => setModalOpen(true)}>entrar</NavLink>
        )}
        {isAuthenticated && <NavLink to="/attempts">minhas tentativas</NavLink>}
      </Nav>
    </Container>
  );
}
