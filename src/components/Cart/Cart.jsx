import { Link } from "react-router-dom";
import "./Cart.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";

export default function Cart() {
    const [cart, , , clearCart, total] = useContext(CartContext);

    if (cart.length === 0) {
        return (
            <div>
                <h1>No hay productos en el carrito</h1>
                <Link to="/">Ver productos</Link>
            </div>
        );
    }

    return (
        <>
            <div>
                {cart.map(p => {
                    console.log('Producto en carrito:', p);
                    <CartItem key={p.id} producto={p} />
                })}
                <h3>Total: ${total || 0}</h3>
                <button onClick={() => clearCart()}>Limpiar carrito</button>
                <Link to="/checkout">Checkout</Link>
            </div>
        </>
    );
}