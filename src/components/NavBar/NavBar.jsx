import React from 'react';
import CartWidget from '../CartWidget/CartWidget';
import Logo from '../../assets/Logo2.png';
import { Link } from 'react-router-dom';

const NavBar = ({ products }) => {
  const uniqueCategories = [...new Set(products.map((product) => product.categoria))];

  return (
    <div className="navbar">
      <div className="logo-container">
        <img src={Logo} alt="Logo de OuRouge" className="logo" />
        <h1>Fragancias OuRouge</h1>
      </div>
      <div className="nav-links">
        <Link to="/" className="nav-link">Inicio</Link>
        <Link to="/productos" className="nav-link">Prueba 404</Link>
        <div className="dropdown">
          <button className="dropbtn">Categorías</button>
          <div className="dropdown-content">
            <Link to="/">Todos</Link>
            {uniqueCategories.map((category) => (
              <Link key={category} to={`/categoria/${category}`}>
                {category}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <CartWidget />
    </div>
  );
};

export default NavBar;
