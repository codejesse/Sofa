import React from "react";

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
      <h1 className="font-semibold text-4xl text-center">
        Edit a product entry
      </h1>
    </div>
  );
};

export default page;
