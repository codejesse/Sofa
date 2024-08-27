import Dexie from "dexie";

const db = new Dexie("sofaDB");
db.version(1).stores({
  products: "++id, name, description, price, category, image",
  cart: "++id, productId, quantity",
});

export { db };
