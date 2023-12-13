import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetailContainer = ({ products }) => {
  const { id } = useParams();
  const product = products.find((p) => p.id.toString() === id);  

  // Estado para manejar la cantidad seleccionada
  const [quantity, setQuantity] = useState(1);

  // Handle para actualizar la cantidad
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <div className="item-detail-container">
      <div className='card-container'>
        <div className='card'>
          {product ? (
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
                onQuantityChange={handleQuantityChange}  // actualización de la cantdad
              />
            </>
          ) : (
            <p>Producto no encontrado</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
