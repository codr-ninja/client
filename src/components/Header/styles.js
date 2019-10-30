import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.header`
  background-color: ${props =>
    props.theme === 'clear' ? '#f8f8f2' : '#44475a'};
  padding: 36px 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  font-size: 36px;
  color: #bd93f9;
  font-family: 'Comfortaa', cursive;
  transition: all 0.25s ease;

  &:hover {
    color: ${darken(0.05, '#bd93f9')};
  }
`;

export const Nav = styled.nav`
  & > :not(:last-child) {
    margin-right: 36px;
  }

  @media only screen and (max-width: 1024px) {
    display: none;
  }
`;

export const NavLink = styled(Link)`
  color: #bd93f9;
  font-family: 'Comfortaa', cursive;
  text-decoration: none;
  transition: all 0.25s ease;
  font-size: calc(10px + 0.35vw);

  &:hover {
    color: ${darken(0.05, '#bd93f9')};
  }
`;
