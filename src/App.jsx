import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import NavBar from './components/NavBar/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart.jsx';
import CheckOut from './components/Checkout/Checkout.jsx';


function App() {

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <header>
            <NavBar />
          </header>
          <main>
            <Routes>
              <Route exact path="/" element={<ItemListContainer />}></Route>
              <Route exact path="/category/:categoryId" element={<ItemListContainer />}></Route>
              <Route exact path="/item/:id" element={<ItemDetailContainer />}></Route>
              <Route exact path="/cart" element={<Cart/>}></Route>
              <Route exact path="/checkout" element={<CheckOut/>}></Route>
            </Routes>
          </main>
          <footer>
          </footer>
        </CartProvider>
      </BrowserRouter>
    </>
  )
}

export default App
