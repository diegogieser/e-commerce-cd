import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';

const mensaje = 'Bienvenidos a nuestra tienda online';

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer mensaje={mensaje}/>
      <Footer />
    </div>
  );
};

export default App;
