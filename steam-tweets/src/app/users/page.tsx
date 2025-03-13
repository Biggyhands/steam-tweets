"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./utils/users-api";
import UsersList from "../components/UsersList";
import SkeletonLoading from "../components/SkeletonLoading";
import SearchInput from "../components/SearchInput";

export default function UsersPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const query = useQuery({ queryKey: ["users"], queryFn: getUsers });

  const filteredUsers = query.data?.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <main className="min-h-screen flex items-center justify-start bg-[#1b2838] flex-col">
      <h1 className="text-white text-2xl font-bold mb-4">Usuarios</h1>
      <SearchInput onSearch={setSearchTerm} />
      {query.isLoading ? (
        <SkeletonLoading />
      ) : (
        <UsersList data={filteredUsers} />
      )}
    </main>
  );
}
