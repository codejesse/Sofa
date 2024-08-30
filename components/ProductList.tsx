"use client";

import React, { FC } from "react";
import dynamic from "next/dynamic";
import { useLiveQuery } from "dexie-react-hooks";
import { Filter } from "lucide-react";

import { useState } from "react";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { db } from "@/lib/db";
import { SkeletonCard } from "./SkeletonCard";

const ProductCard = dynamic(() => import("../components/ProductCard"), {
  //make this a skeleton loader
  loading: () => <SkeletonCard />,
});

// function FilterComponent() {
//   const [selectedCategories, setSelectedCategories] = useState([]);
//   const [priceRange, setPriceRange] = useState([0, 100]);
//   const handleCategoryChange = (category) => {
//     if (selectedCategories.includes(category)) {
//       setSelectedCategories(selectedCategories.filter((c) => c !== category));
//     } else {
//       setSelectedCategories([...selectedCategories, category]);
//     }
//   };
//   const handlePriceRangeChange = (value) => {
//     setPriceRange(value);
//   };
//   const handleApplyFilters = () => {
//     console.log("Applying filters:", { selectedCategories, priceRange });
//   };
//   return (
//     <Drawer defaultOpen>
//       <DrawerTrigger asChild>
//         <Button variant="outline">Filter Products</Button>
//       </DrawerTrigger>
//       <DrawerContent className="bg-background p-6 mx-auto max-w-md w-full">
//         <div className="flex items-center justify-between">
//           <h2 className="text-lg font-semibold">Filter Products</h2>
//           <DrawerClose asChild>
//             <Button variant="ghost" size="icon">
//               <XIcon className="h-5 w-5" />
//             </Button>
//           </DrawerClose>
//         </div>
//         <div className="mt-6 grid gap-6">
//           <div>
//             <h3 className="text-base font-medium">Category</h3>
//             <div className="mt-2 grid gap-2">
//               <Label className="flex items-center gap-2">
//                 <Checkbox
//                   checked={selectedCategories.includes("clothing")}
//                   onCheckedChange={() => handleCategoryChange("clothing")}
//                 />
//                 Clothing
//               </Label>
//               <Label className="flex items-center gap-2">
//                 <Checkbox
//                   checked={selectedCategories.includes("electronics")}
//                   onCheckedChange={() => handleCategoryChange("electronics")}
//                 />
//                 Electronics
//               </Label>
//               <Label className="flex items-center gap-2">
//                 <Checkbox
//                   checked={selectedCategories.includes("home")}
//                   onCheckedChange={() => handleCategoryChange("home")}
//                 />
//                 Home
//               </Label>
//               <Label className="flex items-center gap-2">
//                 <Checkbox
//                   checked={selectedCategories.includes("outdoor")}
//                   onCheckedChange={() => handleCategoryChange("outdoor")}
//                 />
//                 Outdoor
//               </Label>
//             </div>
//           </div>
//           <div>
//             <h3 className="text-base font-medium">Price Range</h3>
//             <div className="mt-2">
//               <Slider
//                 value={[priceRange]}
//                 onValueChange={handlePriceRangeChange}
//                 max={500}
//                 step={10}
//                 className="w-full"
//               />
//               <div className="mt-2 flex justify-between text-sm text-muted-foreground">
//                 <span>${priceRange[0]}</span>
//                 <span>${priceRange[1]}</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="mt-6 flex justify-end gap-2">
//           <Button variant="outline" onClick={handleApplyFilters}>
//             Apply
//           </Button>
//         </div>
//       </DrawerContent>
//     </Drawer>
//   );
// }

//product list component: iterates through data from dexiedb
const ProductList: FC = () => {
  const [products, setProducts] = useState({
    id: null,
    name: "",
    description: "",
    image: "",
    category: "",
    price: 0,
  });

  const productData = useLiveQuery(() => db.products.toArray());

  return (
    <>
      <div className="flex mb-4">
        <h3 className="flex-1 my-auto text-xl font-semibold">
          Newest products
        </h3>
        <button className="flex flex-row gap-2">
          <Filter className="my-auto justify-end" />
          <p className="hidden lg:block md:block my-auto">Filters</p>
        </button>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
        {productData?.map((product: any, index: number) => {
          return <ProductCard product={product} />;
        })}
      </div>
    </>
  );
};

export default ProductList;
