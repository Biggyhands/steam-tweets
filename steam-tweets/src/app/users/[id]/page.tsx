"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import UserDetail from "@/components/UserDetail";
import SkeletonLoadingDetail from "@/components/SkeletonLoadingDetail";
import { usePathname } from "next/navigation";

interface Props {
  params: { id: string };
}

const fetchUser = async (id: string) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch user");
  }
  return response.json();
};

export default function UserDetailPage({ params }: Props) {
  const pathname = usePathname();
  const id = pathname.split("/")[2];

  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["user", id],
    queryFn: () => fetchUser(id),
  });

  if (isError) {
    return <div>Error fetching user details: {(error as Error).message}</div>;
  }

  return (
    <main className="min-h-screen bg-[#1b2838] text-white p-8">
      <h1 className="text-2xl text-center font-bold mb-4">
        Detalles del Usuario
      </h1>
      {isLoading && <SkeletonLoadingDetail />}
      {user && <UserDetail user={user} />}
    </main>
  );
}
