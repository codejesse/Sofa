// __mocks__/dexie.ts
import Dexie from "dexie";

class MockedDexie extends Dexie {
  constructor() {
    super("MockedSofaDatabase");
    this.version(1).stores({
      products: "++id, name, description, price, category, image, created_at",
      cart: "++id, productId, quantity",
    });

    this.products = this.table("products");
    this.cart = this.table("cart");
  }
  products!: Dexie.Table<any, number>;
  cart!: Dexie.Table<any, number>;
}

export const db = new MockedDexie();
export default Dexie;
