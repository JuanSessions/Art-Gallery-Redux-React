import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
 import '../style/nav.scss'

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
             <Link id="start-icon" className='button ctrl' to='/'> ★ </Link> 
            {/* <div id="start-icon" className='button ctrl' tabIndex='1'> ★ </div> */}
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
