import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { getProduct } from "../../asyncMock";


export default function ItemDetailContainer() {
    const [prendaDeportiva, setPrendaDeportiva] = useState({})
    
    const{id} = useParams();

    useEffect(()=>{
        setPrendaDeportiva(getProduct(id))
    },[])

    return (
        <>
            <article className="productos">
                <h4>{prendaDeportiva.nombre}</h4>
                <img src={prendaDeportiva.imagen} alt={prendaDeportiva.nombre} />
                <p>${prendaDeportiva.precio}</p>
                <p>{prendaDeportiva.descripcion}</p>
                <p>{prendaDeportiva.category}</p>
            </article>
        </>
    )
}