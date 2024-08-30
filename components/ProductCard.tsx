import { Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import React from "react";

interface ProductProps {
  product: {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
  };
}

const ProductCard = ({ product }: ProductProps) => {
  return (
    <div>
      <div>
        <Image
          className="rounded-t-3xl w-full"
          src="https://mysleepyhead.com/media/catalog/product/4/t/4thaug_2ndhalf5889_green.jpg"
          width={290}
          height={500}
          alt="product-image"
        />
      </div>
      <div>
        <div className="flex flex-row mt-4 w-full">
          <h3 className="font-medium overflow-hidden truncate ... w-52">
            {product.name}
          </h3>
          <div className="flex flex-row gap-2 ml-24 md:ml-12 lg:ml-12">
            <Heart size={20} />
            <ShoppingBag size={20} />
          </div>
        </div>
        <div>
          <h3 className="font-medium">
            ${product.price}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
