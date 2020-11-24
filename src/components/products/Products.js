import React from 'react'
import { connect } from 'react-redux'
import Product from './Product'


function Products({ products }) {
    console.log("products:", products)
    return (
        <div className="products">
            <h2>Book Products</h2>
            {products.map((product) => (
                <Product key={product.id} product={product} />
            ))}
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        products: state.shop.products
    }
}

export default connect(mapStateToProps)(Products)