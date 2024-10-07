import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'


function App() {

  return (
    <>
      <BrowserRouter>
        <header>
          <NavBar />
        </header>
        <main>
          <Routes>
            <Route exact path="/" element={<ItemListContainer/>}></Route>
            <Route exact path="/category/:categoryId" element={<ItemListContainer/>}></Route>
            <Route exact path="/item/:id" element={<ItemDetailContainer/>}></Route>
          </Routes>
        </main>
        <footer>
        </footer>
      </BrowserRouter>
    </>
  )
}

export default App
