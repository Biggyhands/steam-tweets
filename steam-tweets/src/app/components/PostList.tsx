"use client";

import React from "react";
import { getGameName } from "../helper/getGameName";

interface Props {
  data: any[];
}

export default function PostList({ data }: Props) {
  return (
    <div className="flex justify-center">
      <ul className="space-y-2 w-full max-w-2xl">
        {data?.map((post) => {
          const gameName = getGameName();
          return (
            <li
              key={post.id}
              className="bg-[#2c3441] p-4 rounded-md cursor-pointer hover:shadow-xl transition-shadow duration-200 h-32 overflow-hidden"
            >
              <h2 className="text-blue-400 text-lg font-semibold mb-2">
                {post.title}
              </h2>
              <p className="text-[#c6d4df] text-sm">
                {post.body.substring(0, 150)} ...{" "}
                <span className="text-blue-500">Ver más</span>
              </p>
              <p className=" text-blue-500">
                Juego: <span className="text-white">{gameName}</span>
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
