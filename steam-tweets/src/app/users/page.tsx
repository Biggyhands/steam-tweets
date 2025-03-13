"use client";

import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "./utils/users-api";
import UsersList from "../components/UsersList";

export default function UsersPage() {
  const query = useQuery({ queryKey: ["users"], queryFn: getUsers });
  return (
    <main className="min-h-screen flex items-center justify-start bg-[#1b2838] flex-col">
      <h1 className="text-white text-2xl font-bold mb-4">Usuarios</h1>
      <UsersList data={query.data} />
    </main>
  );
}
