import React from "react";

const ProductItem = ({ product }) => {
  return (
    <div className="product">
      <img className="productImage" alt={product.name} src={product.image} />
      <p className="text">{product.name}</p>
      <p className="text">{product.price} KD</p>
    </div>
  );
};

export default ProductItem;
