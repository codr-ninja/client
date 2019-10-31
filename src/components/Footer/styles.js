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
    font-size: calc(10px + 0.5vw);

    @media only screen and (max-width: 768px) {
      font-size: calc(10px + 1vw);
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LinkList = styled.div`
  display: flex;
  align-items: center;

  & > :not(:last-child) {
    margin-right: 36px;
  }

  @media only screen and (max-width: 768px) {
    width: 100%;
    margin-top: 24px;
    justify-content: space-between;
  }
`;

export const Link = styled(RouterLink)`
  color: #bd93f9;
  font-family: 'Comfortaa', cursive;
  font-size: calc(10px + 0.35vw);
  font-weight: 300;
  text-decoration: none;

  @media only screen and (max-width: 768px) {
    font-size: calc(10px + 1vw);
  }
`;

export const ExternalLink = styled.a`
  color: #bd93f9;
  font-family: 'Comfortaa', cursive;
  font-size: calc(10px + 0.35vw);
  font-weight: 300;
  text-decoration: none;

  @media only screen and (max-width: 768px) {
    font-size: calc(10px + 1vw);
  }
`;
