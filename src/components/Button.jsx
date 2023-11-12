import React, { useState } from 'react';

function Button({ color, label, onClickCallback }) {
  const [backgroundColor, setBackgroundColor] = useState(color);

  const handleClick = () => {
    if (backgroundColor === color) {
      // Cambiar el color de fondo a blanco (o cualquier otro valor predeterminado) cuando se hace clic nuevamente
      // Cambiar el color de fondo a blanco (o cualquier otro valor predeterminado) cuando se hace clic nuevamente
      setBackgroundColor('white');      
    } else {
      // Restaurar el color original
      setBackgroundColor(color);
    }
    onClickCallback();
  };

  return (
    <button
      style={{ backgroundColor }}
      
      onClick={handleClick}
    >
      {label}
    </button>
  );
}

export default Button;
