"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      // Container styles
      className={`relative inline-flex items-center w-[160px] h-[63px] rounded-[50px] py-3
        transition-colors duration-1000 border cursor-pointer
        ${isDark ? "bg-[#262625] pr-3.5 pl-5 border-[#CCCCCC66]" : "bg-[#E6E6E6] pl-3.5 pr-5 border-[#ccc]"}
      `}
    >
      {/* The toggle circle */}
      <div
        className={`absolute w-10 h-10 rounded-full shadow-md transition duration-1000
          ${isDark ? "bg-white right-2" : "bg-black left-2"}
        `}
      />
      
      {/* The label (Light Mode / Dark Mode) */}
      <span
        className={`text-sm md:text-base font-bold capitalize 
          ${isDark ? "text-[#F1F1F1]" : "text-[#1E1E1E] text-right ml-auto"}
        `}
      >
        {isDark ? "Dark Mode" : "Light Mode"}
      </span>
    </button>
  );
}
