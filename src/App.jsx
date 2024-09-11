import './App.css'
import ItemListContainer from './components/ItemListContainer.jsx';
import NavBar from './components/NavBar.jsx';

function App() {

  return (
    <>
      <header>
        <NavBar/>
        <ItemListContainer/>
      </header>
    </>
  )
}

export default App
