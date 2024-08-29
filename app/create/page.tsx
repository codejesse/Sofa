import React from "react";
import { AddProductForm } from "./components/AddProductForm";

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
    <div>
      <h1>Create a new product entry</h1>
      <AddProductForm
        name={name}
        description={description}
        price={price}
        category={category}
        image={image}
        created_at={created_at}
      />
    </div>
  );
};

export default page;
