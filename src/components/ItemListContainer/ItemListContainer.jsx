import { useState } from "react"
import {getCategory, getProducts} from "../../asyncMock"
import { useEffect } from "react";
import ItemContainer from "../ItemContainer/ItemContainer.jsx";
import "./ItemListContainer.css"
import { useParams } from "react-router-dom";

export default function ItemListContainer() {
    const [prendasDeportivas, setPrendasDeportivas]= useState([]);

    const {categoryId} = useParams()
    
useEffect(()=>{
    if(categoryId){
        const filteredPrendasDeportivas = getCategory(categoryId);
        setPrendasDeportivas(filteredPrendasDeportivas);
    }else{
        getProducts.then((data)=> setPrendasDeportivas(data));
    }
},[categoryId])
    return (
        <>
            <section>
                {prendasDeportivas.map(prendaDeportiva => (
                    <ItemContainer key={prendaDeportiva.id} prendaDeportiva={prendaDeportiva}/>
                ))}
            </section>
        </>
    )
}