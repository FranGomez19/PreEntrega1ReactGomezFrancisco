import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import "./CartItem.css"

export default function CartItem({ producto }) {
    const { removeProduct } = useContext(CartContext);

    const { id, nombre, precio, quantity } = producto;

    return (
        <article className="cart-item" key={id}>
            <h4>{nombre || 'Nombre no disponible'}</h4>
            <h5>Cantidad: {quantity || 0}</h5>
            <h5>Precio por unidad: ${precio || 0}</h5>
            <h5>Todas: ${quantity * precio || 0}</h5>
            <button onClick={() => removeProduct(id)}>Eliminar</button>
        </article>
    );
}