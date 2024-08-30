import { NextResponse } from "next/server";
import { db } from "@/lib/db"; // Adjust the path to your db file

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = Number(params.id);
    const data = await req.json();
    const updated = await db.products.update(id, data);

    if (updated) {
      return NextResponse.json({ message: "Product updated successfully." });
    } else {
      return NextResponse.json(
        { error: "Product not found." },
        { status: 404 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update product." },
      { status: 500 }
    );
  }
}
