import ItemListContainer from './componentes/ItemListContainer'
import EjemploTitulo from './componentes/EjemploTitulo'
import EjemploContador from './componentes/EjemploContador'
import './App.css'

function App() {

  const saludando = () =>{
    alert("saludando desde app prueba")
  }

  return (
    <>
    <div id="app">
    < ItemListContainer saludo="prop enviada desde la app" numero={5}/>
    < ItemListContainer saludo="otro prop" numero={5}/>
    < EjemploTitulo saludando={ saludando } />
    < EjemploContador />
    </div>
    </> 
  );
}

export default App