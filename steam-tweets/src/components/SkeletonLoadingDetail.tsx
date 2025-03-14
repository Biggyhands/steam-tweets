import React from "react";
import { Skeleton } from "./ui/skeleton";

export default function SkeletonLoadingDetail() {
  return (
    <div className="bg-[#21252d] rounded-md p-4 w-full max-w-md h-auto mx-auto">
      <div className="flex items-center mb-4">
        <div className="w-24 h-24 flex items-center justify-center bg-[#323643] mr-4 rounded-md overflow-hidden">
          <Skeleton className="h-full w-full rounded" />
        </div>
        <div>
          <Skeleton className="h-6 w-[150px] mb-1" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
      <div>
        <div className="bg-[#364e68] p-2 rounded-md mb-2">
          <Skeleton className="h-4 w-[40%]" />
        </div>
        <div className="bg-[#364e68] p-2 rounded-md mb-2">
          <Skeleton className="h-4 w-[60%]" />
        </div>
        <div className="bg-[#364e68] p-2 rounded-md mb-2">
          <Skeleton className="h-4 w-[60%]" />
        </div>
        <div className="bg-[#364e68] p-2 rounded-md mb-2">
          <Skeleton className="h-4 w-[60%]" />
        </div>
        <div className="bg-[#364e68] p-2 rounded-md mb-2">
          <Skeleton className="h-10 w-[80%]" />
        </div>
        <div className="bg-[#364e68] p-2 rounded-md">
          <Skeleton className="h-10 w-[80%]" />
        </div>
      </div>
    </div>
  );
}
