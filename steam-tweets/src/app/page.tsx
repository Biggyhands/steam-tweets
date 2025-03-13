"use client";

import React from "react";
import Login from "./components/Login";
import { useUser } from "./context/UserContext";
import { useRouter } from "next/navigation";

export default function Home() {
  const { username, setUsername } = useUser();
  const router = useRouter();

  const handleLogin = (name: string) => {
    setUsername(name);
  };

  if (username && username.length > 0) {
    router.push("/users");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1b2838] flex-col">
      <h1 className="text-white text-2xl font-bold mb-4">Iniciar sesión</h1>
      <Login onLogin={handleLogin} />
    </main>
  );
}
