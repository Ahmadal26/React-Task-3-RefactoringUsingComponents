import React from "react";
import products from "../products";
import ProductItem from "./ProductItem";
const ProductList = () => {
  const productList = products.map((product) => (
    <ProductItem product={product} />
  ));
  return <div className="list">{productList}</div>;
};

export default ProductList;
