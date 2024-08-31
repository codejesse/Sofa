import React from "react";
import { AddProductForm } from "./components/AddProductForm";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

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
        Create a new product entry
      </h1>
      <div className="grid grid-cols-2 m-auto w-fit gap-2">
        <Link href="/edit" className="flex flex-row">
          Edit Page
          <ArrowUpRight size={18} />
        </Link>
      </div>
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
