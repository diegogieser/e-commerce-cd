import React from 'react';
import CartWidget from '../CartWidget/CartWidget';


const NavBar = () => {
  return (
    <div className="navbar">
      <h1>My Ecommerce</h1>
      <CartWidget />
    </div>
  );
};

export default NavBar;