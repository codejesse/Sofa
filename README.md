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
- **Dynamic Metadata**: The project uses Next.js' `generateMetadata` to dynamically set metadata for product pages based on the product’s details, enhancing SEO. (⚠️ Drawback: Using Dexie.js, which is a client-side database, 
generating metadata dynamically on the server side in a Next.js 
- **Api route**: /products /product/[id].js didn't also work due to the client-side nature of dexiejs
generateMetadata function isn't possible. This is because generateMetadata runs on the server, 
but Dexie is not accessible in that context. 🛠 So defaulted to static metadata on dynamic route for temp-fix)
- **Static Metadata for Main Pages**: Static metadata is defined in the `app/layout.tsx` to ensure that essential pages have optimized SEO.
- **ShadCN**: A collection of open-source, customizable React components that can be used to create user interfaces for websites and applications.

## 🚀 SEO Strategy

- **Dynamic Metadata**: Each product page generates dynamic metadata, including the product name, description, and image. This improves search engine visibility for individual products.
- **Static Metadata**: Core pages like the home page and category pages have predefined metadata to ensure they are indexed correctly by search engines.
- **Sitemap**: A sitemap is generated using the `sitemap` npm package, which includes all product URLs and key pages. This helps search engines crawl the site efficiently.

## 🚀 Deployment

The project is deployed using Vercel, offering seamless integration with Next.js for both static and server-side rendered pages.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details on how to deploy your own version.

