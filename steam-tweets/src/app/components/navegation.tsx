"use client";
import React from "react";
import Link from "next/link";

import { usePathname } from "next/navigation";

export default function Navegation() {
  const pathname = usePathname();
  return (
    <nav className="flex items-center text-sm">
      <Link
        href="/"
        className={`px-3 py-1 hover:text-gray-100 ${
          pathname === "/"
            ? "font-semibold underline underline-offset-4 decoration-[#66c0f0] decoration-2 text-[#66c0f0]"
            : ""
        }`}
      >
        TIENDA
      </Link>
      <Link
        href="/tienda"
        className={`px-3 py-1 text-gray-200 hover:text-white ${
          pathname === "/tienda"
            ? "font-semibold underline underline-offset-4 decoration-[#66c0f0] decoration-2 text-[#66c0f0]"
            : ""
        }`}
      >
        ACTIVIDAD
      </Link>
      <Link
        href="/about"
        className={`px-3 py-1 text-gray-200 hover:text-white ${
          pathname === "/about"
            ? "font-semibold underline underline-offset-4 decoration-[#66c0f0] decoration-2 text-[#66c0f0]"
            : ""
        }`}
      >
        ACERCA DE
      </Link>
      <Link
        href="/soporte"
        className={`px-3 py-1 text-gray-200 hover:text-white ${
          pathname === "/soporte"
            ? "font-semibold underline underline-offset-4 decoration-[#66c0f0] decoration-2 text-[#66c0f0]"
            : ""
        }`}
      >
        SOPORTE
      </Link>
    </nav>
  );
}
