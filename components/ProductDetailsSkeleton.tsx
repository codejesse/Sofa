export default function ProductDetailsSkeleton() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-20 pt-20">
      <div className="bg-muted rounded-lg overflow-hidden">
        <div className="aspect-[4/3] bg-muted-foreground animate-pulse" />
      </div>
      <div className="space-y-4">
        <div className="bg-muted h-8 w-3/4 rounded-md animate-pulse" />
        <div className="bg-muted h-6 w-1/2 rounded-md animate-pulse" />
        <div className="bg-muted h-4 w-full rounded-md animate-pulse" />
        <div className="bg-muted h-4 w-full rounded-md animate-pulse" />
        <div className="bg-muted h-4 w-full rounded-md animate-pulse" />
      </div>
    </div>
  );
}
