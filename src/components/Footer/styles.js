import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.footer`
  background-color: #44475a;
  padding: 24px 5vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > p {
    color: #bd93f9;
    font-weight: 300;
    font-family: 'Comfortaa', cursive;
  }
`;

export const LinkList = styled.div`
  display: flex;
  align-items: center;

  & > :not(:last-child) {
    margin-right: 36px;
  }
`;

export const Link = styled(RouterLink)`
  color: #bd93f9;
  font-family: 'Comfortaa', cursive;
  font-weight: 300;
  text-decoration: none;
`;

export const ExternalLink = styled.a`
  color: #bd93f9;
  font-family: 'Comfortaa', cursive;
  font-weight: 300;
  text-decoration: none;
`;
