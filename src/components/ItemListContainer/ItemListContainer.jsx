import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link, useParams } from 'react-router-dom';

const ItemListContainer = ({ products }) => {
  const { categoria } = useParams();
  const [titulo, setTitulo] = useState('Bienvenidos a nuestra tienda online');

  // Efecto para cambiar el título cuando cambia la categoría
  useEffect(() => {
    if (categoria) {
      setTitulo(`Productos de la categoría: ${categoria}`);
    } else {
      setTitulo('Productos destacados');
    }
  }, [categoria]);


  // Filtra los productos según la categoría (o muestra todos si no hay categoría)
  const filteredProducts = categoria
    ? products.filter((product) => product.categoria === categoria)
    : products;

  return (
    <div className="item-list-container">      
      <h2>{titulo}</h2>
      <div className="card-container">
        {filteredProducts.map((product) => (
          <div key={product.id} className="card">
            <img src={product.imagen} alt={product.nombre} />
            <h3>{product.nombre}</h3>
            <p>{product.descripcion}</p>
            <p>Precio: ${product.precio}</p>
            <p>Categoría: {product.categoria}</p>
            <Link to={`/item/${product.id}`}>Ver detalles</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

ItemListContainer.propTypes = {
  
  products: PropTypes.array.isRequired,
};

export default ItemListContainer;
