import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import { db } from "@/lib/db"; // Ensure the path to your db is correct
import { notFound } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const productId = parseInt(params.id);
  const product = await db.products.get(productId);

  if (!product) {
    return notFound();
  }

  return {
    title: `${product.name} | Deals`,
    description: `Shop the best deals on ${product.name}.`,
    openGraph: {
      title: `${product.name} | Deals`,
      description: `Shop the best deals on ${product.name}.`,
      images: [
        {
          url: product.image,
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
