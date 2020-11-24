import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import '../style/nav.css'

function Navbar({ cart, user }) {
    const [cartCount, setCartCount] = useState(0)

    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.qty
        });
        setCartCount(count);
    }, [cart, cartCount])

    return (
        <nav>
            <a class='button ctrl' href='#' tabindex='1'>★</a>
            <ul className='tip ctrl'>

                <li className='slice'>
                    <div>
                    <NavLink to="/" className="logo"><i className="fas fa-book-reader"></i></NavLink>
                    </div>
                </li>
                <li className='slice'>
                    <div>
                    <NavLink exact to="/" activeClassName="active"><i class="fas fa-home"></i></NavLink>
                    </div>
                </li>
                
                <li className='slice'>
                    <div>
                    <NavLink to="/products" activeClassName="active"><i class="fab fa-product-hunt"></i></NavLink>
                 </div>
                </li>
              
                <li className='slice'>
                    <div>
                    <NavLink to="/auth" activeClassName="active">
                       
                        {!user.isAuth ? "" : "Logout"} 
                          {/* login deleted in order for the design to work */}
                         <i class="fas fa-sign-in-alt"></i>
                    </NavLink>
                    </div>
                </li>
                <li className='slice'>
                    <div>
                    <NavLink to="/cart" activeClassName="active" className="nav-link-cart">
                        <p><i className="fas fa-shopping-cart"></i></p>
                        <p className="cart-counter"><span className="bold"> {cartCount} </span></p>
                    </NavLink>
                    </div>
                </li>
            </ul>
        </nav>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
        user: state.user
    }
}

export default connect(mapStateToProps)(Navbar);
