import { Link } from "react-router-dom";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import "./Cart.css"

export default function Cart() {
    const {cart, clearCart, total} = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div className="noProductos">
                <h1>No hay productos en el carrito</h1>
                <Link to="/">Ver productos</Link>
            </div>
        );
    }

    return (
        <div>
            {cart.map((producto) => (
                <CartItem key={producto.id} producto={producto} />
            ))}
            <div className="cart-footer">
            <h3>Total: ${total || 0}</h3>
            <Link to="/checkout">Finalizar Compra</Link>
            <button onClick={clearCart}>Limpiar carrito</button>
            </div>
        </div>
    );
}