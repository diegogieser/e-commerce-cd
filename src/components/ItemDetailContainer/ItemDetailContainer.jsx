import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { FaSpinner } from 'react-icons/fa'; // Importa el ícono de spinner
import perfumeProducts, {fetchProductById} from '../../data/perfumeProducts';

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const productDetails = await fetchProductById(id);
        setProduct(productDetails);
      } catch (error) {
        console.error('Error al cargar los detalles del producto', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // Handle para actualizar la cantidad
  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
  };

  return (
    <div className="item-detail-container">
      <div className='card-container'>
        <div className='card'>
          {loading ? (
            <div className="spinner-container">
              <FaSpinner className="spinner" />
              <p>Cargando detalles del producto...</p>
            </div>
          ) : (
            <>
              {product ? (
                <ItemDetail
                  product={product}
                  onQuantityChange={handleQuantityChange}
                />
              ) : (
                <p>Producto no encontrado</p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
