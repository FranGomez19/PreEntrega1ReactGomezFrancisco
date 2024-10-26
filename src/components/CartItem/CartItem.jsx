import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

export default function CartItem({ producto }) {
    const [, , removeProduct] = useContext(CartContext);

    // Desestructuramos las propiedades del producto
    const { id, nombre, precio, quantity } = producto;

    return (
        <article key={id}>
            <h4>{nombre || 'Nombre no disponible'}</h4>
            <h5>Cantidad: {quantity || 0}</h5>
            <h5>Precio por unidad: ${precio || 0}</h5>
            <h5>Total: ${quantity * precio || 0}</h5>
            <button onClick={() => removeProduct(id)}>Eliminar</button>
        </article>
    );
}