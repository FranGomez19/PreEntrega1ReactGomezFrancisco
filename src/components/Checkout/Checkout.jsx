import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Form from "../Form/Form";
import { collection, addDoc, Timestamp } from "firebase/firestore/lite";
import { db } from '../../firebase';

export default function CheckOut() {
    const [cargando, setCargando] = useState(false);
    const [orderId, setOrderId] = useState(null);

    const { cart, total, clearCart } = useContext(CartContext);

    const crearOrden = async ({ name, phone, email }) => {
        setCargando(true);

        const orden = {
            buyer: {
                name,
                phone,
                email
            },
            items: cart,
            total: total,
            date: Timestamp.fromDate(new Date())
        };

        try {
            const orderRef = collection(db, "orders");
            const orderAdded = await addDoc(orderRef, orden);

            setOrderId(orderAdded.id);
            clearCart();
        } catch (error) {
            console.error("Error al crear la orden:", error);
        } finally {
            setCargando(false);
        }
    };

    if (cargando) {
        return <h1>Se está generando tu orden de compra...</h1>;
    }
    if (orderId) {
        return <h1>Tu orden de compra es: {orderId}</h1>;
    }
    return (
        <>
            <h1>Formulario de compra</h1>
            <Form confirmacion={crearOrden} />
        </>
    );
}