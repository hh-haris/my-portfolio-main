import { Skeleton } from "./skeleton.jsx";

export function PageSkeleton() {
  return (
    <div className="min-h-screen pt-20 px-4 md:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="space-y-8">
          <Skeleton className="h-12 w-3/4" />
          <Skeleton className="h-8 w-1/2" />
          <div className="grid md:grid-cols-2 gap-8">
            <Skeleton className="h-64 w-full rounded-2xl" />
            <Skeleton className="h-64 w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ImageSkeleton({ className }) {
  return <Skeleton className={className} />;
}

export function CardSkeleton() {
  return (
    <div className="space-y-4">
      <Skeleton className="h-48 w-full rounded-2xl" />
      <Skeleton className="h-6 w-3/4" />
      <Skeleton className="h-4 w-full" />
      <Skeleton className="h-4 w-2/3" />
    </div>
  );
}
