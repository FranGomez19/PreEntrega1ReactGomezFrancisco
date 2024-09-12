import React from 'react';
import './CartWidjet.css'

export default function CartWidget() {
    return (
        <>
            <div className="cart-widget">
                <img src="https://cdn-icons-png.flaticon.com/512/1170/1170678.png" alt="Carrito" />
                <span>0</span>
            </div>
        </>
    );
}

