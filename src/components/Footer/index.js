import React from 'react';
import { Container, LinkList, Link, ExternalLink } from './styles';
import GithubOctocat from '../../assets/svg/github.svg';

function Footer() {
  return (
    <Container>
      <p>Plataforma open-source desenvolvida em Belo Horizonte, Brasil</p>

      <LinkList>
        <ExternalLink href="https://github.com/codr-ninja" target="_BLANK">
          <img src={GithubOctocat} alt="Github" />
        </ExternalLink>
      </LinkList>
    </Container>
  );
}

export default Footer;
