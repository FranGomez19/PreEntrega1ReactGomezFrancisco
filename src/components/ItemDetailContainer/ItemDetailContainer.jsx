import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount.jsx";
import { Link } from "react-router-dom";
import { getSingleProduct } from "../../firebase.js";
import "./ItemDetailContainer.css"

export default function ItemDetailContainer() {
    const [quantityAded, setQuantityAded] = useState(0);
    const { addProduct } = useContext(CartContext);
    const [prendaDeportiva, setPrendaDeportiva] = useState({});
    const { id } = useParams();

    const handleOnAdd = (quantity) => {
        setQuantityAded(quantity);

        const product = {
            id: prendaDeportiva.id,
            nombre: prendaDeportiva.nombre,
            precio: prendaDeportiva.precio,
            descripcion: prendaDeportiva.descripcion
        };

        addProduct(product, quantity);
    };

    useEffect(() => {
        getSingleProduct(id).then((response) => setPrendaDeportiva(response));
    }, [id]);

    return (
        <article className="productos">
            <h4>{prendaDeportiva.nombre}</h4>
            <img src={prendaDeportiva.imagen} alt={prendaDeportiva.nombre} />
            <p>${prendaDeportiva.precio}</p>
            <p>{prendaDeportiva.descripcion}</p>
            <p>{prendaDeportiva.category}</p>
            <section>
                {quantityAded > 0 ? (
                    <Link to="/cart" className="option">
                        Terminar Compra
                    </Link>
                ) : (
                    <ItemCount initial={1} stock={prendaDeportiva.stock} onAdd={handleOnAdd} />
                )}
            </section>
        </article>
    );
}