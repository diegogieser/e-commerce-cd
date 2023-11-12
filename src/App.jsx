
import './App.css'
import Button from './components/button';

function App() {

  const changeColor = () => {
    console.log('El color del botón ha cambiado.');
  };

  return (
    <>
      
      <h1>Vite + React</h1>
      <Button color="blue" label="Botón Azul" onClickCallback={changeColor} />
      <Button color="red" label="Botón Rojo" onClickCallback={changeColor} />
    </>
  )
}

export default App
