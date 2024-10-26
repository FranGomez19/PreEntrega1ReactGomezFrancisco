import { useState, useEffect } from "react";
import ItemContainer from "../ItemContainer/ItemContainer.jsx";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import { getProducts } from "../../firebase.js";

export default function ItemListContainer() {
    const [prendasDeportivas, setPrendasDeportivas] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getProducts();
                if (categoryId) {
                    const filteredPrendasDeportivas = products.filter(prendaDeportiva => prendaDeportiva.category === categoryId);
                    setPrendasDeportivas(filteredPrendasDeportivas);
                } else {
                    setPrendasDeportivas(products);
                }
            } catch (error) {
                console.error("Error al obtener productos: ", error);
            }
        };
        
        fetchProducts();
    }, [categoryId]);

    return (
        <section>
            {prendasDeportivas.map(prendaDeportiva => (
                <ItemContainer key={prendaDeportiva.id} prendaDeportiva={prendaDeportiva} />
            ))}
        </section>
    );
}