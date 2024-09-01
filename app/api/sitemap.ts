import { SitemapStream, streamToPromise } from "sitemap";
import { Readable } from "stream";
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db"; // Update the path as needed

export async function GET(req: NextRequest) {
  try {
    const links: Array<{ url: string; changefreq: string; priority: number }> =
      [];

    // Fetch all product data to include in the sitemap
    const products = await db.products.toArray();
    products.forEach((product) => {
      links.push({
        url: `/products/${product.id}`, // Assuming your product detail page uses /products/[id]
        changefreq: "weekly",
        priority: 0.8,
      });
    });

    // Add other static pages
    const pages = ["/", "/about", "/contact"];
    pages.forEach((url) => {
      links.push({
        url,
        changefreq: "daily",
        priority: 0.9,
      });
    });

    const stream = new SitemapStream({
      hostname: `https://${req.headers.get("host")}`,
    });

    const xmlString = await streamToPromise(
      Readable.from(links).pipe(stream)
    ).then((data) => data.toString());

    return new NextResponse(xmlString, {
      headers: {
        "Content-Type": "application/xml",
      },
    });
  } catch (e) {
    console.error(e);
    return new NextResponse("Error generating sitemap", { status: 500 });
  }
}
