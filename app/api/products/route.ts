import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { useLiveQuery } from "dexie-react-hooks";

export async function GET() {
  try {
    const products = useLiveQuery(() => db.products.toArray());
    return NextResponse.json(products);
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "Failed to fetch products." },
      { status: 500 }
    );
  }
}
