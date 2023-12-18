import React from 'react';
import PropTypes from 'prop-types';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({ product, onQuantityChange }) => {
  return (
    <>
      <img src={product.imagen} alt={product.nombre} />
      <h2>{product.nombre}</h2>
      <p>{product.descripcion}</p>
      <p>Precio: ${product.precio}</p>
      <p>Categoria: {product.categoria}</p>

      {/* Agrega el componente ItemCount */}
      <ItemCount 
        stock={10}  
        initial={1}  
        onQuantityChange={onQuantityChange}  // actualización de la cantidad
      />
    </>
  );
};

ItemDetail.propTypes = {
  product: PropTypes.object.isRequired,
  onQuantityChange: PropTypes.func.isRequired,
};

export default ItemDetail;
