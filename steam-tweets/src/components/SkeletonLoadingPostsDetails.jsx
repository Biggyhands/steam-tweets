import React from "react";
import { Skeleton } from "./ui/skeleton";

export default function SkeletonLoadingPostDetail() {
  return (
    <main className="min-h-screen bg-[#1b2838] text-white p-8">
      <div className="bg-[#21252d] rounded-md p-6 w-full max-w-2xl mx-auto">
        <div className="mb-4">
          <Skeleton className="h-8 w-[50%] bg-[#364e68]" />
        </div>

        <div className="mb-6">
          <Skeleton className="h-4 w-full bg-[#364e68] mb-1" />
          <Skeleton className="h-4 w-[80%] bg-[#364e68] mb-1" />
          <Skeleton className="h-4 w-[60%] bg-[#364e68] mb-1" />
          <Skeleton className="h-4 w-[90%] bg-[#364e68]" />
        </div>

        <h2 className="text-xl font-bold mb-2 text-white">Comentarios</h2>
        <ul className="space-y-2">
          {Array.from({ length: 5 }).map((_, index) => (
            <li key={index} className="bg-[#323643] p-2 rounded-md">
              <div className="flex items-center mb-2">
                <div className="w-6 h-6 rounded-full bg-[#171a21] mr-2"></div>
                <Skeleton className="h-4 w-[100px] bg-[#364e68]" />
              </div>
              <Skeleton className="h-4 w-[90%] bg-[#364e68]" />
            </li>
          ))}
        </ul>

        <div className="mt-4">
          <Skeleton className="h-8 w-full bg-[#364e68] mb-2" />
          <Skeleton className="h-10 w-[30%] bg-[#364e68]" />
        </div>
      </div>
    </main>
  );
}
