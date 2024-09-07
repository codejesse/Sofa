// __tests__/db.test.ts
import { db } from "@/__mocks__/dexie";

describe("Dexie.js Database", () => {
  beforeEach(async () => {
    // Clear database before each test
    await db.products.clear();
    await db.cart.clear();
  });

  test("should add a new product to the database", async () => {
    const newProduct = {
      name: "Sofa",
      description: "Comfortable sofa",
      price: 500,
      category: "Furniture",
      image:
        "https://mysleepyhead.com/media/catalog/product/4/t/4thaug_2ndhalf5889_green.jpg",
      created_at: new Date().toISOString(),
    };

    const id = await db.products.add(newProduct);
    const product = await db.products.get(id);

    expect(product).toEqual({ id, ...newProduct });
  });

  test("should retrieve a product by ID", async () => {
    const id = await db.products.add({
      name: "Chair",
      description: "Wooden chair",
      price: 150,
      category: "Furniture",
      image:
        "https://mysleepyhead.com/media/catalog/product/4/t/4thaug_2ndhalf5889_green.jpg",
      created_at: new Date().toISOString(),
    });

    const product = await db.products.get(id);
    expect(product?.name).toBe("Chair");
  });

  test("should update a product", async () => {
    const id = await db.products.add({
      name: "Table",
      description: "Dining table",
      price: 300,
      category: "Furniture",
      image:
        "https://mysleepyhead.com/media/catalog/product/4/t/4thaug_2ndhalf5889_green.jpg",
      created_at: new Date().toISOString(),
    });

    await db.products.update(id, { price: 350 });
    const updatedProduct = await db.products.get(id);

    expect(updatedProduct?.price).toBe(350);
  });

  test("should delete a product", async () => {
    const id = await db.products.add({
      name: "Lamp",
      description: "Desk lamp",
      price: 40,
      category: "Lighting",
      image:
        "https://mysleepyhead.com/media/catalog/product/4/t/4thaug_2ndhalf5889_green.jpg",
      created_at: new Date().toISOString(),
    });

    await db.products.delete(id);
    const deletedProduct = await db.products.get(id);

    expect(deletedProduct).toBeUndefined();
  });
});
