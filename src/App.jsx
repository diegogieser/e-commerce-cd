import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Footer from './components/Footer/Footer';
import perfumeProducts from './data/perfumeProducts';
import NotFound from './components/Errores/NotFound';

const mensaje = 'Bienvenidos a nuestra tienda online';

console.log(perfumeProducts)

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavBar  products={perfumeProducts}/>
        <Routes>
          <Route path="/" element={<ItemListContainer  products={perfumeProducts} />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer  products={perfumeProducts} />} />
          <Route path="/item/:id" element={<ItemDetailContainer  products={perfumeProducts} />} />
          {/* Ruta 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
