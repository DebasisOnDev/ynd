"use client";
import { useState } from "react";

function HoverButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      className={`px-6 py-2 hover:px-8 hover:py-[9px] hover:scale-[1.01] rounded-full border border-gray-300 inline-flex items-center gap-2 transition-all duration-300 ${
        isHovered
          ? "bg-[#00e599] border-[#00e599] text-white"
          : "bg-transparent text-gray-800"
      } ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        className={`transition-all duration-300 ${
          isHovered ? "text-white" : "text-gray-800"
        } `}
      >
        <path
          d={
            isHovered ? "M17 8l4 4m0 0l-4 4m4-4H3" : "M13 8l4 4m0 0l-4 4m4-4H3"
          }
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}

export default HoverButton;
