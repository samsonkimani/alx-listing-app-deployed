import { PillProps } from "@/interfaces";
import React from "react";

const Pill:React.FC<PillProps> = ({ label, onClick }) => (
  <button
    onClick={onClick}
    className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition"
  >
    {label}
  </button>
);

export default Pill;