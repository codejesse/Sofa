import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sofa | Deals",
  description: "Shop deals on furniture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={syne.className}>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
