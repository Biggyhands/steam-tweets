// app/components/Login.tsx
"use client";

import React, { useState } from "react";

interface LoginProps {
  onLogin: (username: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(username);
  };

  return (
    <div className="bg-[#181a21] p-8 rounded-lg shadow-md w-96">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label
            htmlFor="username"
            className="block text-blue-400 text-sm font-bold mb-2"
          >
            Ingresa el nombre de tu cuenta
          </label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#2a475e] text-white"
            placeholder="Nombre de cuenta"
          />
        </div>
        <button
          type="submit"
          className="bg-gradient-to-r from-[#1787c9] to-[#135589] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:opacity-80 cursor-pointer hover:from-[#5dade2] hover:to-[#2e86c1]"
        >
          Iniciar Sesion
        </button>
      </form>
    </div>
  );
};

export default Login;
