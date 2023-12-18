import React, { useState, useEffect } from 'react';

import { Link, useParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import perfumeProducts, {fetchProductList, fetchProductByCategory} from '../../data/perfumeProducts';

const ItemListContainer = () => {
  const { categoria } = useParams();
  const [titulo, setTitulo] = useState('Bienvenidos a nuestra tienda online');
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    setLoading(true)
    if(categoria) {
        fetchProductByCategory(categoria)
            .then((prod) => setProducts(prod))
            .catch((err) => console.log(err))
            .finally(()=> setLoading(false))
    }else{
        fetchProductList()
        .then((prod) => {
            setProducts(prod)
        })
        .catch((err) => console.log(err))
        .finally(()=> {
            setLoading(false)})

    }
}, [categoria])

console.log(products)

  return (
    <div className="item-list-container">
      <h2>{titulo}</h2>
      {loading ? (
        <p>Cargando productos...</p>
      ) : (
        <ItemList products={products} />
      )}
    </div>
  );
};



export default ItemListContainer;
