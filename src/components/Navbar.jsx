import React from 'react'
import { Link } from 'react-router-dom'
import '../style/nav.scss'

function Navbar() {
    return (
        <nav>

           <div className="menu-nav">
                <Link to="/" className="menu-links-home">home</Link>
                <Link to="/products" className="menu-links-products">artworks</Link>
                <Link to="/auth" className="menu-links-login">login</Link>
                <Link to="/cart" className="menu-links-cart">cart</Link>
            </div>
         </nav>
    )
}

export default Navbar
