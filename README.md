# 🛋 Sofa Commerce

![Sofa Commerce Banner](https://github.com/user-attachments/assets/44745615-a5dc-401f-b3cd-b6744dfc5d8c)

Sofa Commerce is a Next.js-based e-commerce platform where you can shop the best deals on furniture. The project is optimized for performance and SEO, offering a seamless shopping experience.

## 🛠 Getting Started

### Prerequisites

- Node.js (v14.x or later)
- npm, yarn, pnpm, or bun as your package manager

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/codejesse/Sofa.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd Sofa
   ```

3. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

4. **Start the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open the application:**

   Open [http://localhost:3000](http://localhost:3000) in your browser to view the app.

## 📦 Project Structure

- **app/**: Contains the core Next.js pages and layouts.
- **components/**: Reusable UI components such as buttons, inputs, and sliders.
- **lib/**: Contains utility functions and the `db.ts` file for Dexie.js database setup.
- **public/**: Static assets like images and icons.
- **styles/**: Global styles using TailwindCSS.

## 🛠️ Design Decisions & Optimizations

- **Dexie.js for Client-side Storage**: The app uses Dexie.js to handle client-side data storage, ensuring quick access to products and cart items even without a server connection.
- **Dynamic Metadata**: The project initially aimed to use Next.js' `generateMetadata` to dynamically set metadata for product pages based on the product’s details. However, due to the client-side nature of Dexie.js, which stores the data locally in the browser, it is inaccessible during server-side rendering.
  - ⚠️ **Drawback**: Since Dexie.js is not accessible in a server-side context, this prevents dynamic metadata generation using `generateMetadata`. As a temporary fix, we defaulted to static metadata for product pages.
- **Static Metadata for Main Pages**: Static metadata is defined in the `app/layout.tsx` to ensure that essential pages have optimized SEO.
- **ShadCN**: A collection of open-source, customizable React components that can be used to create user interfaces for websites and applications.
- **Create & Edit**: Create /create route for creating new product entries, and the edit /edit route for editing existing products and deleting product listings.

## 🐛 Issues & Trade-offs

### API Routes

- **Problem**: API routes like `/products` and `/product/[id].ts` don’t return product data.
- **Cause**: The primary reason is that Dexie.js is a client-side only library, meaning it runs exclusively in the browser and cannot be accessed in Next.js API routes, which execute on the server side.
- **Temporary Solution**: Since Dexie.js can’t be used on the server, these API routes currently do not function as expected. The routes will require either a separate backend database or a different solution for server-side data fetching.

### SEO Handling with `generateMetadata`

- **Problem**: The use of Dexie.js also affects the SEO strategy. Next.js' `generateMetadata` function runs on the server, where it attempts to fetch product data. However, Dexie.js operates only in the client, causing the metadata generation to fail.
- **Temporary Fix**: As a workaround, we opted for static metadata on dynamic product pages to maintain SEO functionality while further solutions are considered.

## 🚀 SEO Strategy

- **Dynamic Metadata**: Initially, the plan was to dynamically generate metadata for each product page, enhancing search engine visibility for individual products. However, due to Dexie.js limitations, this was deferred.
- **Static Metadata**: To ensure the core pages and some dynamic product pages still have proper SEO, static metadata is predefined in the `app/layout.tsx` and `app/product/[id]/layout.tsx`.
- **Sitemap**: A sitemap is generated using the `sitemap` npm package, which includes all product URLs and key pages. This helps search engines crawl the site efficiently.

## ✅ Testing
- **Unit Testing with Jest**: implemented unit tests using Jest to ensure the reliability and correctness of the Dexie.js database operations.

- **Tested Features**: Product data interactions with Dexie.js. Database CRUD operations including adding, updating, and retrieving data.

- **Running Tests**:

To run the tests, use the following command:

```bash
Copy code
npm run test
```
The tests are located in the __tests__/ directory and cover various aspects of the database functionalities, ensuring that the core data management features work as expected.

## 🚀 Deployment

The project is deployed using Vercel, offering seamless integration with Next.js for both static and server-side rendered pages.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details on how to deploy your own version.
