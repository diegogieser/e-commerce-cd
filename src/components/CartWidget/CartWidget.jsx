

import React from 'react';
import cartIcon from '../../assets/Carrito.jpg';


const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src={cartIcon} alt="Cart Icon" className="cart-icon" />
      <span className="cart-text">Carrito</span>
      {/* Enlace hacia Componente Carrito */}
    </div>
  );
};

export default CartWidget;

