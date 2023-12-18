import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ product }) => {
  return (
    <div className="card">
      <img src={product.imagen} alt={product.nombre} />
      <h3>{product.nombre}</h3>
      <p>{product.descripcion}</p>
      <p>Precio: ${product.precio}</p>
      <p>Categoría: {product.categoria}</p>
      <Link to={`/item/${product.id}`}>Ver detalles</Link>
    </div>
  );
};


export default Item;
