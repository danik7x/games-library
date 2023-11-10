import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <main className="m-24 rounded-md grid grid-cols-4 gap-12">
      {Array.from({ length: 12 }, (_, i) => i + 1).map((id) => (
        <div
          className="bg-slate-200 p-4 rounded-md shadow-md col-span-4 md:col-span-2"
          key={id}
        >
          <Skeleton className="h-6 w-1/2 bg-gray-500 mb-2"></Skeleton>
          <Skeleton className="h-6 w-1/4 bg-gray-500 mb-2"></Skeleton>
          <Skeleton className="h-6 w-1/6 bg-gray-500 mb-2"></Skeleton>
          <Skeleton className="bg-gray-500 aspect-video relative"></Skeleton>
        </div>
      ))}
    </main>
  );
}
