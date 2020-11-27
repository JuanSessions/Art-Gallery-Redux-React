import React from 'react'
import Navbar from './Navbar'
import '../style/nav.scss'
import { Link } from 'react-router-dom'


function Header() {
    return (
        <header>
             <Navbar />
             <h1>Production company</h1>
             <p>Menu</p>
             <div className="menu-nav">
                <Link to="/" className="menu-links-home">home</Link>
                <Link to="/products" className="menu-links-products">products</Link>
                <Link to="/auth" className="menu-links-login">login</Link>
                <Link to="/cart" className="menu-links-cart">cart</Link>
            </div>
        </header>
    )
}

export default Header
