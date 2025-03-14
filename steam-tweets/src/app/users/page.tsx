"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/lib/utils";
import SkeletonLoading from "@/components/SkeletonLoading";
import SearchInput from "@/components/SearchInput";
import UsersList from "@/components/UsersList";

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });

  const filteredUsers = data?.filter(
    (user: { name: string; username: string }) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen flex items-center justify-start bg-[#1b2838] flex-col">
      <h1 className="text-white text-2xl font-bold mb-4">Usuarios</h1>
      <SearchInput onSearch={setSearchTerm} />
      {isLoading ? <SkeletonLoading /> : <UsersList data={filteredUsers} />}
    </main>
  );
}
