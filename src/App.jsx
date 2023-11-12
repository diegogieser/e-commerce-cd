import React from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';


const App = () => {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer message="Bienvenido a nuestra tienda en línea." />
    </div>
  );
};

export default App;
