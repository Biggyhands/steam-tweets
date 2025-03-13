import { Skeleton } from "../../components/ui/skeleton";

export default function SkeletonLoading() {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {Array.from({ length: 9 }).map((_, index) => (
        <li key={index} className="bg-[#2c3441] p-2 flex items-center">
          <div className="w-8 h-8 flex items-center justify-center bg-[#171a21] mr-2">
            <Skeleton className="h-full w-full rounded" />
          </div>
          <div>
            <Skeleton className="h-4 w-[80px] mb-1" />
            <Skeleton className="h-4 w-[90px] mb-1" />
            <Skeleton className="h-4 w-[150px] mb-1" />
          </div>
        </li>
      ))}
    </ul>
  );
}
