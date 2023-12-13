import React, { useState } from 'react';

const ItemCount = ({ stock, initial, onQuantityChange }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
      onQuantityChange(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      onQuantityChange(quantity - 1);
    }
  };

  return (
    <div className="item-count">
    <button className="count-button decrement" onClick={handleDecrement}>-</button>
    <span className="quantity">{quantity}</span>
    <button className="count-button increment" onClick={handleIncrement}>+</button>
  </div>
  );
};

export default ItemCount;
