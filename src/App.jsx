import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer/Footer';


const App = () => {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer message="Bienvenido a nuestra tienda en línea." />
      <Footer />
    </div>
  );
};

export default App;
