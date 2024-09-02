import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { db } from "@/lib/db"; // Ensure the path to your db is correct
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"] });

// export async function generateMetadata({
//   params,
// }: {
//   params: { id: string };
// }): Promise<Metadata> {
//   const productId = parseInt(params.id);
//   const product = await db.products.get(productId);

//   if (!product) {
//     return notFound();
//   }

//   return {
//     title: `${product.name} | Deals`,
//     description: `Shop the best deals on ${product.name}.`,
//     openGraph: {
//       title: `${product.name} | Deals`,
//       description: `Shop the best deals on ${product.name}.`,
//       images: [
//         {
//           url: product.image,
//           alt: product.name,
//         },
//       ],
//     },
//   };
// }

/* 
**DRAWBACK**:
Since you're using Dexie.js, which is a client-side database, 
generating metadata dynamically on the server side in a Next.js 
generateMetadata function isn't possible. This is because generateMetadata runs on the server, 
but Dexie is not accessible in that context. 
**Important Considerations**
SEO: The first approach with static metadata might not give you as much SEO benefit as truly dynamic metadata.
Server-Side API Calls: The second approach introduces an additional round trip to the server, which may affect performance slightly.
*/
//Walk-around code: use static metadata
export const metadata: Metadata = {
  title: "Product | Deals",
  description:
    "Welcome to Sofa Store - Your destination for the best furniture deals.",
  openGraph: {
    title: "Sofa Store | Home",
    description: "Discover the best deals on furniture at Sofa Store.",
    url: "https://sofa-beta.vercel.app",
    siteName: "Sofa Store",
    images: [
      {
        url: "/sofa-og.png",
        width: 1200,
        height: 630,
        alt: "Sofa Store - Best furniture deals",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sofa Store | Home",
    description: "Discover the best deals on furniture at Sofa Store.",
    images: ["/sofa-og.png"],
  },
};

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
