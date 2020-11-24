import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { addToCart, loadCurrentItem } from '../../redux/shop/shopping-actions'
import '../../style/product.css'

function Product({ product, addToCart, loadCurrentItem }) {
    return (
        <div className="product">
            <div className="product-img">
                <img src={product.image} alt="product" width="150" height="200" />
            </div>

            <div className="product-info">
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p className="price">Price: {product.price} €</p>
            </div>

            <div className="product-btns">
                <Link to={`/product/${product.id}`}>
                    <button onClick={() => loadCurrentItem(product)} className="btns view">
                        View Item
                </button>
                </Link>
                <button onClick={() => addToCart(product.id)} className="btns add">
                    Add To Cart
            </button>
            </div>

        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
        loadCurrentItem: (item) => dispatch(loadCurrentItem(item))
    }
}

export default connect(null, mapDispatchToProps)(Product)
