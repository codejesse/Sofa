import ProductDetailsSkeleton from "@/components/ProductDetailsSkeleton";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag } from "lucide-react";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      {/* <ProductDetailsSkeleton /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-14 lg:pt-24 lg:p-48 m-8">
        <div>
          <Image
            className="border w-full h-fit rounded-2xl"
            src="https://mysleepyhead.com/media/catalog/product/4/t/4thaug_2ndhalf5889_green.jpg"
            width={300}
            height={100}
            alt="product-image"
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
                Light sofa something
              </h3>
              <Heart />
            </div>
            <div className="mt-2">
              <h4 className="font-medium text-lg">$180</h4>
            </div>
            <div className="mt-4">
              <p className="font-normal text-sm text-[#9C9C9C]">
                We provide selling or buying quality and marketable furniture
                and have our own aesthetic in our furniture
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
