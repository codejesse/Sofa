"use client";

import React, { FC, useEffect } from "react";
import dynamic from "next/dynamic";
import { useLiveQuery } from "dexie-react-hooks";
import { Filter, X } from "lucide-react";

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
  loading: () => <SkeletonCard />,
});

function FilterComponent({ applyFilters }: any) {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<number[]>([0, 100]);

  const handleCategoryChange = (category: string) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories(selectedCategories.filter((c) => c !== category));
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  const handlePriceRangeChange = (value: number[]) => {
    setPriceRange(value);
  };

  const handleApplyFilters = () => {
    applyFilters(selectedCategories, priceRange);
  };

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button className="border-none" variant="outline">
          <Filter />
          Filters
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-background p-6 mx-auto max-w-md w-full">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">Filter Products</h2>
          <DrawerClose asChild>
            <Button variant="ghost" size="icon">
              <X />
            </Button>
          </DrawerClose>
        </div>
        <div className="mt-6 grid gap-6">
          <div>
            <h3 className="text-base font-medium">Category</h3>
            <div className="mt-2 grid gap-2">
              <Label className="flex items-center gap-2">
                <Checkbox
                  checked={selectedCategories.includes("furniture")}
                  onCheckedChange={() => handleCategoryChange("furniture")}
                />
                Furniture
              </Label>
              <Label className="flex items-center gap-2">
                <Checkbox
                  checked={selectedCategories.includes("chair")}
                  onCheckedChange={() => handleCategoryChange("chair")}
                />
                Chair
              </Label>
              <Label className="flex items-center gap-2">
                <Checkbox
                  checked={selectedCategories.includes("table")}
                  onCheckedChange={() => handleCategoryChange("table")}
                />
                Table
              </Label>
              <Label className="flex items-center gap-2">
                <Checkbox
                  checked={selectedCategories.includes("lamp")}
                  onCheckedChange={() => handleCategoryChange("lamp")}
                />
                Lamp
              </Label>
            </div>
          </div>
          <div>
            <h3 className="text-base font-medium">Price Range</h3>
            <div className="mt-2">
              <Slider
                value={priceRange}
                onValueChange={handlePriceRangeChange}
                max={500}
                step={10}
                className="w-full"
              />
              <div className="mt-2 flex justify-between text-sm text-muted-foreground">
                <span>${priceRange[0]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-6 flex justify-end gap-2">
          <Button variant="outline" onClick={handleApplyFilters}>
            Apply
          </Button>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

//product list component: iterates through data from dexiedb
const ProductList: FC = () => {
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const productData = useLiveQuery(() => db.products.toArray());

  const applyFilters = (selectedCategories: string[], priceRange: number[]) => {
    const filtered = productData?.filter((product) => {
      const matchesCategory = selectedCategories.length
        ? selectedCategories.includes(product.category)
        : true;
      const matchesPrice =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      return matchesCategory && matchesPrice;
    });
    setFilteredProducts(filtered || []);
  };

  // Initialize filteredProducts with all products when the component mounts
  useEffect(() => {
    if (productData) {
      setFilteredProducts(productData);
    }
  }, [productData]);

  return (
    <>
      <div className="flex mb-4">
        <h3 className="flex-1 my-auto text-xl font-semibold">
          Newest products
        </h3>
        <div className="flex flex-row gap-2">
          {/* <Filter className="my-auto justify-end" /> */}
          <FilterComponent applyFilters={applyFilters} />
          {/* <p className="hidden lg:block md:block my-auto">Filters</p> */}
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 justify-items-center">
        {filteredProducts.length === 0 ? (
          <p>No products found</p>
        ) : (
          filteredProducts.map((product: any, index: number) => {
            return <ProductCard key={product.id} product={product} />;
          })
        )}
      </div>
    </>
  );
};

export default ProductList;
