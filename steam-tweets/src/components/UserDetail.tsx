import React from "react";

import DataItem from "./DataItem";
import Link from "next/link";
import { User } from "@/lib/types/globals"; //imported type

interface UserDetailProps {
  /* user: any;  explicity any type*/
  user: User;
}

export default function UserDetail({ user }: UserDetailProps) {
  console.log("user", user);
  return (
    <div className="bg-[#2c3441] rounded-md p-4 max-w-md mx-auto">
      <div className="flex items-center mb-4">
        <div className="w-24 h-24 flex items-center justify-center bg-[#171a21] mr-4 rounded-md overflow-hidden">
          <span className="text-white text-4xl font-bold">?</span>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-blue-400">{user.name}</h2>
          <p className="text-[#c6d4df] text-sm">{user.username}</p>
        </div>
      </div>

      <div>
        <DataItem
          label="ID"
          value={
            user.id.toString()
            /*id data type is number and DataItem componeent only receives string*/
          }
        />
        <DataItem label="Email" value={user.email} />
        <DataItem label="Teléfono" value={user.phone} />
        <DataItem label="Sitio Web" value={user.website} />
        <DataItem
          label="Dirección"
          value={`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}
        />
        <DataItem
          label="Compañía"
          value={`${user.company.name} - ${user.company.catchPhrase} - ${user.company.bs}`}
        />
        <Link
          href="/users"
          className="bg-[#457b9d] text-white py-2 px-4 rounded mt-4 inline-block hover:bg-[#a8dadc] hover:text-gray-800 transition duration-200"
        >
          Volver a la lista
        </Link>
      </div>
    </div>
  );
}
