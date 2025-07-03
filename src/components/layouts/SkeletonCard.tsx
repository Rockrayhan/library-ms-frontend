import { Skeleton } from "@/components/ui/skeleton"

export function SkeletonCard() {
  return (
    <div className="container my-5">
     <div className="w-full max-w-sm rounded-2xl border p-4 shadow-sm">
      <Skeleton className="h-40 w-full rounded-xl" /> {/* image placeholder */}
      <div className="space-y-2 mt-4">
        <Skeleton className="h-5 w-3/4" />   {/* title */}
        <Skeleton className="h-4 w-1/2" />   {/* author */}
        <Skeleton className="h-4 w-1/3" />   {/* genre or metadata */}
      </div>
    </div>
    </div>
  )
}
