import React from 'react';
import { FooterBase } from './styles';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <FooterBase>
      <Link to="/cadastro/video">
        <img src="https://fontmeme.com/permalink/200810/384a7e785407d51c8bf9753f8fa6fd0a.png" alt="Logo Alura" />
      </Link>
      <p>
        Orgulhosamente criado por David Teixeira durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;