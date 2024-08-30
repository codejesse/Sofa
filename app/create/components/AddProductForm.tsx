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
  price: z.coerce.number().gte(2, "Must be 2 and above"),
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
      // Add the new Produc!
      // Bug: actually pass the field data to the db
      const id = await db.products.add({
        name: values.name,
        description: values.description,
        price: values.price,
        category: values.category,
        image: values.image,
        created_at: values.created_at,
      });

      setStatus(`Product ${name} successfully added. Got id ${id}`);
    } catch (error) {
      setStatus(`Failed to add ${name}: ${error}`);
    }
  }

  const [status, setStatus] = useState("");

  return (
    <>
      <p>{status}</p>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 mx-14 lg:mx-80 mt-10"
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
                  This is the description of your product.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="image"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Image URL</FormLabel>
                <FormControl>
                  <Input placeholder="URL" {...field} />
                </FormControl>
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
