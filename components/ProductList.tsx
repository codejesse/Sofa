import React from "react";
import ProductCard from "./ProductCard";

const ProductList = () => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default ProductList;
