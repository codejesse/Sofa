// import Dexie from "dexie";

// const db = new Dexie("sofaDB");
// db.version(1).stores({
//   products: "++id, name, description, price, category, image",
//   cart: "++id, productId, quantity",
// });

// export { db };

// db.ts
import Dexie, { type EntityTable } from "dexie";

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  age: number;
}

interface Cart {
  id: number;
  productId: number;
  quantity: number;
}

const db = new Dexie("SofaDatabase") as Dexie & {
  products: EntityTable<Product, "id">;
  cart: EntityTable<Cart, "id">;
};

// Schema declaration:
db.version(1).stores({
  products: "++id, name, description, price, category, image",
  cart: "++id, productId, quantity",
});

export type { Product };
export { db };
