import React from 'react';
import CartWidget from '../CartWidjet/CartWidjet';
import "./NavBar.css"

export default function NavBar() {
    return (
        <>
            <nav>
                <img src="/img/logoreact-fotor-bg-remover-20240911205144.png" alt="logo" />
                <div className="nav-buttons">
                    <button>Actual</button>
                    <button>Retro</button>
                    <button>Importado</button>
                </div>
                <div className="cart-container">
                    <CartWidget/>
                </div>
            </nav>
        </>
    )
}