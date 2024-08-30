import ProductDetailsSkeleton from "@/components/ProductDetailsSkeleton";
import dynamic from "next/dynamic";

export default function Page({ params }: { params: { id: string } }) {
  return (
    <div>
      <ProductDetailsSkeleton />
      {params.id}
    </div>
  );
}
