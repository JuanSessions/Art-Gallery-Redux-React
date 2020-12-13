import React, { useState } from 'react'
import { connect } from 'react-redux'
import { adjustItemQty, removeFromCart } from '../../redux/shop/shopping-actions'

const CartItem = ({ cartItem, adjustQty, removeFromCart }) => {
    const [input, setInput] = useState(cartItem.qty);

    const onChangeHandler = (e) => {
        setInput(e.target.value);
        adjustQty(cartItem.id, e.target.value);
    };
    return (
        <div className="cart-item">
            <div className="cart-item-details">
                <h3>{cartItem.title}</h3>
                <p>{cartItem.description}</p>
                <p>Price: {cartItem.price} €</p>
            </div>

            <div className="cart-actions">
                <label>Qty
                    <input
                        min="1"
                        max="100"
                        type="number"
                        name="qty"
                        value={input}
                        onChange={onChangeHandler}
                        className="qty"
                    />
                </label>
                <button onClick={() => removeFromCart(cartItem.id)} className="btns remove">
                    remove item
                </button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        adjustQty: (id, value) => dispatch(adjustItemQty(id, value)),
        removeFromCart: (id) => dispatch(removeFromCart(id))
    }
}

export default connect(null, mapDispatchToProps)(CartItem);
