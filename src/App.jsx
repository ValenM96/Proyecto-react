import './App.css'
import Navbar from './components/Navbar/Navbar.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'

function App() {

return (
  <>
    <Navbar/>
    <h1>Hola Mundo</h1>
    <ItemListContainer greeting ="bienvenido a mi pagina "/>
  </>
)
}

export default App
