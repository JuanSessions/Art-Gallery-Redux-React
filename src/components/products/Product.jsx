import React from "react";
import { Link } from "react-router-dom";
import "../../style/product.css";

// Redux
import { connect } from "react-redux";
import {
  loadCurrentItem,
  addToCart,
} from "../../redux/shopping/shopping-actions";

const Product = ({ product, addToCart, loadCurrentItem }) => {
  return (
    <div className="product">
      <img
        className=".product__image"
        src={product.image}
        alt={product.title}
      />

      <div className="">
        <p className="">{product.title}</p>
        <p className="">{product.description}</p>
        <p className="">$ {product.price}</p>
      </div>

      <div className="">
        <Link to={`/product/${product.id}`}>
          <button
            onClick={() => loadCurrentItem(product)}
            className=""
          >
            View Item
          </button>
        </Link>
        <button
          onClick={() => addToCart(product.id)}
          className=""
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
    loadCurrentItem: (item) => dispatch(loadCurrentItem(item)),
  };
};

export default connect(null, mapDispatchToProps)(Product);