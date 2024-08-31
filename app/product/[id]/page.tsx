"use client";

import ProductDetailsSkeleton from "@/components/ProductDetailsSkeleton";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { db } from "@/lib/db";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Tag } from "lucide-react";
import { Product } from "@/app/types";
import NoImage from "../../no-image.png";

//Fetch product details with params
export default function Page({ params }: { params: { id: string } }) {
  const id = params.id;
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const productId = Number(id);
          const productData = await db.products.get(productId);
          if (productData) {
            setProduct(productData);
          } else {
            setError("Product not found");
          }
        } catch (err) {
          console.error("Failed to fetch product:", err);
          setError("Failed to fetch product details.");
        }
      };

      fetchProduct();
    }
  }, [id]);

  if (error) {
    return <p>{error}</p>;
  }

  if (!product) {
    return <ProductDetailsSkeleton />;
  }

  return (
    <div>
      {/* <ProductDetailsSkeleton /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-14 lg:pt-24 lg:p-48 p-8">
        <div>
          <Image
            className="border w-full lg:h-[400px] rounded-2xl"
            src={product.image || NoImage}
            width={300}
            height={100}
            alt={product.name}
          />
        </div>
        <div className="flex flex-col gap-4">
          <Button className="bg-[#242424] text-white gap-2 w-full">
            <ShoppingBag />
            <p className="my-auto">Add to Cart</p>
          </Button>
          <div className="border bg-white w-full rounded-xl h-full p-6">
            <div className="flex flex-row">
              <h3 className="flex-1 text-2xl overflow-hidden truncate ... w-52">
                {product.name}
              </h3>
              <Heart />
            </div>
            <div className="mt-2">
              <h4 className="font-medium text-lg">$ {product.price}</h4>
            </div>
            <div className="mt-4">
              <p className="font-normal text-sm text-[#9C9C9C]">
                {product.description}
              </p>
            </div>
            <div className="flex flex-row mt-3">
              <div className="flex-1 flex-row gap-2">
                <div className="flex flex-row gap-2">
                  <Tag />
                  <p>Category</p>
                </div>
              </div>
              <div>
                <p>{product.category}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
