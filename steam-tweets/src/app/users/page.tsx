import React from "react";
import { fetchUsers } from "./utils/users-api";
import UsersList from "../components/UsersList";

export default async function UsersPage() {
  const users = await fetchUsers();
  return (
    <main className="min-h-screen flex items-center justify-start bg-[#1b2838] flex-col">
      <h1 className="text-white text-2xl font-bold mb-4">Usuarios</h1>
      <UsersList users={users} />
    </main>
  );
}
