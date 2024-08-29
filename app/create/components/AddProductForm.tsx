"use client";
import { db } from "@/lib/db";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface Props {
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  created_at: string;
}

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Product name must be at least 2 characters.",
  }),
  description: z.string().min(2, {
    message: "Product description must be at least 2 characters.",
  }),
  price: z.number().min(2, {
    message: "Must be a minimum of 2 digits or must input a number",
  }),
  category: z.string().min(4, {
    message: "Please input a category for your product",
  }),
  image: z.string(),
  created_at: z.string(),
});

export function AddProductForm({
  name,
  description,
  price,
  category,
  image,
  created_at,
}: Props) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      category: "",
      image: "",
      created_at: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    // ✅ Push to indexdb SofaDatabase.
    try {
      // Add the new friend!
      const id = await db.products.add({
        name,
        description,
        price,
        category,
        image,
        created_at,
      });

      setStatus(`Product ${name} successfully added. Got id ${id}`);
    } catch (error) {
      setStatus(`Failed to add ${name}: ${error}`);
    }
  }

  const [productName, setName] = useState("");
  const [status, setStatus] = useState("");

  return (
    <>
      <p>{status}</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mx-80"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product name</FormLabel>
                <FormControl>
                  <Input placeholder="3-seater sofa" {...field} />
                </FormControl>
                <FormDescription>
                  This is the display name of your product.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Product description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Type your description here."
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is the display name of your product.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="price"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input placeholder="10" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Input placeholder="e.g Furniture" {...field} />
                </FormControl>
                <FormDescription>
                  This is the display name of your product.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </>
  );
}
