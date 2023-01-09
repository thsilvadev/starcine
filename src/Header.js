//Link To - Link normal 
//NavLink - Apresenta o Estado do Link, podendo fazer o link ativo


import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav>
      <NavLink to="/" end>Home</NavLink> {' '} 
      <NavLink to="sobre">Sobre</NavLink> {' '} 
      <NavLink to="contato">Contato</NavLink>
    </nav>
  );
};


export default Header