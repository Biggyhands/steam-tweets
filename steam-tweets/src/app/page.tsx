"use client";

import Login from "./components/Login";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [username, setUsername] = useState();
  const router = useRouter();

  const handleLogin = (name: string) => {
    setUsername(name);
  };

  useEffect(() => {
    if (username && username.length > 0) {
      router.push("/users");
    }
  }, [username, router]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#1b2838] flex-col">
      <h1 className="text-white text-2xl font-bold mb-4">Iniciar sesión</h1>
      <Login onLogin={handleLogin} />
    </main>
  );
}
