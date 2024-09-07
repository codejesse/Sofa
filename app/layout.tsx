import type { Metadata } from "next";
import { Inter, Syne } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import { Footer } from "@/components/Footer";
import OgImage from "./sofa-og.png";

const inter = Inter({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sofa Store | Home",
  description:
    "Welcome to Sofa Store - Your destination for the best furniture deals.",
  openGraph: {
    title: "Sofa Store | Home",
    description: "Discover the best deals on furniture at Sofa Store.",
    url: "https://sofa-beta.vercel.app",
    siteName: "Sofa Store",
    images: [
      {
        url: "https://res.cloudinary.com/daiio9iqt/image/upload/v1725306571/8845e51a-1635-440e-bdfb-8e2cacda234d.png",
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
    images: [
      "https://res.cloudinary.com/daiio9iqt/image/upload/v1725306571/8845e51a-1635-440e-bdfb-8e2cacda234d.png",
    ],
  },
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
        <Footer />
      </body>
    </html>
  );
}
