import React from "react";

interface DataItemProps {
  label: string;
  value: string;
}

export default function DataItem({ label, value }: DataItemProps) {
  return (
    <div className="bg-[#364e68] p-2 rounded-md mb-2">
      <p className="text-white">
        <strong>{label}:</strong> {value}
      </p>
    </div>
  );
}
