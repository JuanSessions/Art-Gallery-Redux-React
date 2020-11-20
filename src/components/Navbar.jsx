import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from "react-redux";
import "../style/navbar.css"

function Navbar({ cart }) {
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
    let count = 0;
    cart && cart.forEach((item) => {
      count += item.qty;
    });

    setCartCount(count);
  }, [cart, cartCount]);

    return (
        <nav className="navbar">
            <NavLink exact to="/" activeClassName="active">Home</NavLink>
            <NavLink to='/products' activeClassName="active">Products</NavLink>
           {/*  <NavLink to='/product/:id' activeClassName="active">Single Item</NavLink> */}
            <NavLink to='/cart' activeClassName="active">
                Cart 
            <i class="fas fa-cart-arrow-down"></i>
             <p className="">{cartCount}</p>
            </NavLink>
            

        </nav>
    )
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Navbar);