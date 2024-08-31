import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
// import "../globals.css";

const inter = Inter({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sofa | Deals",
  description: "Shop deals on furniture.",
};

export default function ProductLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <section>{children}</section>;
}
