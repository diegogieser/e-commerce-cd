

import React from 'react';
import cartIcon from './Carrito.jpg';


const CartWidget = () => {
  return (
    <div className="cart-widget">
      <img src={cartIcon} alt="Cart Icon" className="cart-icon" />
      <span className="cart-text">Carrito</span>
      {/* Puedes agregar un enlace aquí si deseas redirigir a la página del carrito */}
    </div>
  );
};

export default CartWidget;

