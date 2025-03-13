import React, { useState } from "react";
import { LucideSearch } from "lucide-react";

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className="relative">
      <LucideSearch className="absolute left-1 top-1/3 transform -translate-y-1/2 text-[#818a91] w-6 h-6" />
      <input
        type="text"
        placeholder="Buscar por nombre o username"
        value={searchTerm}
        onChange={handleSearchChange}
        className="mb-4 p-2 pl-[3.5rem] rounded bg-[#2a475e] text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-100"
      />
    </div>
  );
};

export default SearchInput;
