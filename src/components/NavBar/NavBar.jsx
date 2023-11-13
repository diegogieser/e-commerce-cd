import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../assets/logo.jfif';

const NavBar = () => {
  return (
    <div className="navbar">
      <img src={Logo} alt="Logo de OuRouge" className="logo" />  {/* Agrega la etiqueta img para el logo */}
      <h1>Fragancias OuRouge</h1>
      <div className="nav-links">
        <button>Inicio</button>
        <button>Productos</button>
        <div className="dropdown">
          <button className="dropbtn">Categorías</button>
          <div className="dropdown-content">
            <a href="#">Hombres</a>
            <a href="#">Mujer</a>
            <a href="#">Unisex</a>
          </div>
        </div>
      </div>
      <CartWidget />
    </div>
  );
};

export default NavBar;
