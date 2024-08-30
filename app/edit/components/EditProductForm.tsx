"use client";

import { useState } from "react";
import { db } from "@/lib/db";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLiveQuery } from "dexie-react-hooks";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Product name must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Product description must be at least 2 characters.",
  }),
  price: z.coerce.number().gte(2, "Must be 2 and above"),
  category: z.string().min(4, {
    message: "Please input a category for your product",
  }),
  image: z.string(),
});

//TO DO: implement delete button

export default function EditProduct() {
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [status, setStatus] = useState("");

  const products = useLiveQuery(() => db.products.toArray(), []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      category: "",
      image: "",
    },
  });

  const handleProductChange = async (event: any) => {
    const productId = Number(event.target.value);
    if (productId) {
      const product = products?.find((p) => p.id === productId);
      if (product) {
        setSelectedProduct(product);
        form.reset(product); // Populate form with selected product data
      }
    }
  };

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!selectedProduct) {
      setStatus("No product selected.");
      return;
    }

    try {
      // Update the selected product
      await db.products.update(selectedProduct.id, values);
      setStatus(`Product ${values.name} successfully updated.`);
    } catch (error) {
      setStatus(`Failed to update product: ${error}`);
    }
  }

  console.log(products);

  return (
    <div className="container mx-auto mt-10">
      <div className="mb-4 mx-14 lg:mx-80 mt-10">
        <label className="block mb-2 text-sm font-medium text-gray-900">
          Select Product
        </label>
        <select
          onChange={handleProductChange}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
          <option value="">Select a product</option>
          {products?.map((product) => (
            <option key={product.id} value={product.id}>
              {product.name}
            </option>
          ))}
        </select>
      </div>

      {selectedProduct && (
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mx-14 lg:mx-80 mt-10"
        >
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-900">
              Product Name
            </label>
            <Input {...form.register("name")} placeholder="Product name" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-900">
              Description
            </label>
            <Textarea
              {...form.register("description")}
              placeholder="Product description"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-900">
              Price
            </label>
            <Input
              type="number"
              {...form.register("price")}
              placeholder="Product price"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-900">
              Category
            </label>
            <Input {...form.register("category")} placeholder="Category" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-900">
              Image URL
            </label>
            <Input {...form.register("image")} placeholder="Image URL" />
          </div>
          <Button type="submit">Update Product</Button>
        </form>
      )}
      {status && <p className="mt-4 text-green-600">{status}</p>}
    </div>
  );
}
