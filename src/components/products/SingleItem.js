import React from 'react'
import { connect } from 'react-redux'
import { addToCart } from '../../redux/shop/shopping-actions'
import '../../style/product.scss'
import { Link } from 'react-router-dom'

function SingleProduct({ current, addToCart }) {
    return (
        <div className="single-cart-product-container">
            <h2>Single Item Overview</h2>
            <Link to="/products">
                        <button className="btns add add-cart all">
                            Back to all products
                    </button>
                    </Link>
            {current &&
                <div className="product single-cart-product">
                    <div className="img-div">
                         <img src={current.image} alt="product" width="250" />
                    </div>
                   
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
