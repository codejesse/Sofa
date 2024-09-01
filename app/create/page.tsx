import React from "react";
import { AddProductForm } from "./components/AddProductForm";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const page = () => {
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
      />
    </div>
  );
};

export default page;
