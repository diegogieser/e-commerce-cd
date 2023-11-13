import React, { useState } from 'react';
import cartIcon from '../../assets/Carrito.jpg';

const CartWidget = () => {
  const [itemsInCart, setItemsInCart] = useState(2); // Variable con items dentro del carrito

  return (
    <div className="cart-widget">
      <img src={cartIcon} alt="Cart Icon" className="cart-icon" />
      <span className="cart-text">Carrito</span>
      <div className="cart-notification">{itemsInCart}</div>
    </div>
  );
};

export default CartWidget;