import React from "react";
import Product from './Product';
import "../../style/products.css";
// Redux
import { connect } from "react-redux";

const Products = ({ products }) => {
  return (
    <div className="">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.products,
  };
};

export default connect(mapStateToProps)(Products);
