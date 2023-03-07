import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarorganicos from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
function App() {
  return (
    <div>
     <Navbarorganicos/> 
     <ItemListContainer greeting="Bienvenidos a la tienda virtual de Orgánicos del Retiro, no hay stock disponible en el momento, recuerde volver para nuestra próxima pre entrega para más sorpresas, gracias!"/>
    </div>
  
  )
}

export default App
