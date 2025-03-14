import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#171a21] text-[#c6d4df] py-4 text-sm w-full bottom-0">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center">
        <p className="mb-2 text-center">
          Este es un proyecto creado como parte de una prueba técnica.
        </p>
        <p className="mb-2 text-center">Desarrollado por Robert</p>

        <Link
          href="https://www.linkedin.com/in/robertmanotas/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white mb-4"
        >
          Visita mi LinkedIn
        </Link>

        <hr className="border-gray-700 w-full my-2" />

        <div className="text-center">
          <p className="text-xs">Steam-Tweets es un proyecto personal.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
