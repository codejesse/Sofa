import React from "react";
import EditProduct from "./components/EditProductForm";

const page = () => {
  return (
    <div className="pt-20">
      <h1 className="font-semibold text-4xl text-center">
        Edit a product entry
      </h1>
      <EditProduct />
    </div>
  );
};

export default page;
