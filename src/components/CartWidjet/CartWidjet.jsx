import React, { useContext } from 'react';
import './CartWidjet.css'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartWidget() {

    const { cantidadTotal } = useContext(CartContext)
    return (
        <>
            <Link to='/cart'>
                <div className="cart-widget">
                    <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="Carrito" />
                    <p>{cantidadTotal}</p>
                </div>
            </Link>
        </>
    );
}

