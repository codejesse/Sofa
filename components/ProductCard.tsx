import Image from "next/image";
import React from "react";

const ProductCard = () => {
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
    </div>
  );
};

export default ProductCard;
