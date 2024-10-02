import { Link } from "react-router-dom";
import "./ItemContainer.css"

export default function ItemContainer({prendaDeportiva}) {
    return(
        <>
            <article className="productos">
                <h4>{prendaDeportiva.nombre}</h4>
                <img src={prendaDeportiva.imagen} alt={prendaDeportiva.nombre} />
                <p>${prendaDeportiva.precio}</p>
                <button><Link to={`/item/${prendaDeportiva.id}`}>Mas informacion</Link></button>
            </article>
        </>
    )
}