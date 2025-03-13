"use client";

import { createContext, useState, useContext } from "react";

interface UserContextType {
  username: string | null;
  setUsername: (username: string | null) => void;
}

const UserContext = createContext<UserContextType>({
  username: null,
  setUsername: () => {},
});

export const useUser = () => useContext(UserContext);

export const UserProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [username, setUsername] = useState<string | null>(null);

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};
