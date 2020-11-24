import React, { useState, useEffect } from 'react'
import { connect } from "react-redux"
import CartItem from './CartItem'
import '../../style/cart.css'
import { Link } from 'react-router-dom'

const Cart = ({ cart }) => {
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    useEffect(() => {
        let items = 0;
        let price = 0;

        cart.forEach((item) => {
            items += item.qty;
            price += item.qty * item.price;
        })

        setTotalItems(items);
        setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems])

    return (
        <div className="cart">
            <h2>You Shopping Cart</h2>
            <div className="cart-details">
                <div className="">
                    {cart.map((item) => (
                        <CartItem key={item.id} cartItem={item} />
                    ))}
                </div>
                <div className="cart-summary">
                    <h4>Cart Summary</h4>
                    <p>Total Items: {totalItems} </p>
                    <p>Total Price: <span className="bold"> {totalPrice} </span> €</p>
                    <Link to="/auth">
                        <button className="btns proceed">
                            Proceed to checkout
                    </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart
    }
}

export default connect(mapStateToProps)(Cart);
