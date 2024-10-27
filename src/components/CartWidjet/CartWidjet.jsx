import React, { useContext } from 'react';
import './CartWidjet.css'
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';

export default function CartWidget() {

    const {totalQuantity}=useContext(CartContext)
    return (
        <>
            <div className="cart-widget">
                <Link to='/cart'>
                <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="Carrito" />
                {totalQuantity}
                </Link>
            </div>
        </>
    );
}

