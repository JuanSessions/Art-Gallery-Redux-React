import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../redux/shop/shopping-actions'

function SingleProduct({ current, addToCart }) {
    return (
        <div className="single-cart-product-container">
            <h2>Product Overview</h2>
            {current &&
                <div className="product single-cart-product">
                    <img src={current.image} alt="product" width="180" />
                    <div>
                        <h3>{current.title}</h3>
                        <p>{current.description}</p>
                        <p className="price">Price: {current.price} €</p>
                        <button onClick={() => addToCart(current.id)} className="btns add add-cart">
                            Add To Cart
                    </button>
                    </div>
                </div>
            }
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        current: state.shop.currentItem
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleProduct);
