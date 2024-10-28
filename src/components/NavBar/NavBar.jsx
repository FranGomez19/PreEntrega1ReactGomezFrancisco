import React from 'react';
import CartWidget from '../CartWidjet/CartWidjet';
import "./NavBar.css"
import { Link } from 'react-router-dom';

export default function NavBar() {
    return (
        <>
            <nav>
                <Link to={'/'}><img src="https://i.postimg.cc/xC47KFXb/logoreact-fotor-bg-remover-20240911205144.png" alt="logo" /></Link>
                <div className="nav-buttons">
                    <button><Link to={'/category/actual'}>Actual</Link></button>
                    <button><Link to={'/category/retro'}>Retro</Link></button>
                    <button><Link to={'/category/short'}>Shorts</Link></button>
                </div>
                <div className="cart-container">
                    <CartWidget/>
                </div>
            </nav>
        </>
    )
}