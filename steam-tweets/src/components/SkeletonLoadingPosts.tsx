import React from "react";
import { Skeleton } from "./ui/skeleton";

export default function SkeletonLoadingPost() {
  return (
    <div className="flex justify-center flex-col items-center">
      {Array.from({ length: 10 }).map((_, index) => (
        <li
          key={index}
          className="bg-[#2c3441] p-4 rounded-md justify-center mb-4 h-[130px] w-[672px]"
        >
          <div>
            <Skeleton className="h-4 w-[90%] bg-[#364e68] mb-1" />
            <Skeleton className="h-4 w-[60%] bg-[#364e68] mb-1" />
            <Skeleton className="h-4 w-[80%] bg-[#364e68]" />
          </div>
          <div className="mt-2">
            <Skeleton className="h-4 w-[50px] bg-[#364e68]" />
          </div>
        </li>
      ))}
    </div>
  );
}
