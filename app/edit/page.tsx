import React from "react";
import EditProduct from "./components/EditProductForm";

interface ProductProps {
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  created_at: string;
}

const page = ({
  name,
  description,
  price,
  category,
  image,
  created_at,
}: ProductProps) => {
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
