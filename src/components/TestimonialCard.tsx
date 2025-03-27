"use client"
import React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

// Define the type for the component props
interface TestimonialCardProps {
  header: string;
  body: string;
  avatar: string;
  name: string;
  role: string;
}

// Use TypeScript types instead of PropTypes
const TestimonialCard: React.FC<TestimonialCardProps> = ({ header, body, avatar, name, role }) => {
  const { theme } = useTheme();
  
  return (
    <div
      className={`${
        theme === "dark"
          ? "bg-[#1E1E1E] border-[#CCCCCC59]"
          : "bg-[#ECECEC] border-[#22222259]"
      } border rounded-[10px] p-5 flex flex-col gap-5 md:gap-9 w-fit`}
    >
      <div className="flex flex-col gap-2 md:gap-6">
        <h3
          className={`${
            theme === "dark" ? "text-[#F1F1F1]" : "text-[#131211]"
          } font-bold text-lg md:text-2xl`}
        >
          &quot;{header}&quot;
        </h3>
        <p
          className={`${
            theme === "dark" ? "text-[#ccc]" : "text-[#222]"
          } font-medium text-sm md:text-lg`}
        >
          {body}
        </p>
      </div>

      <div className="flex items-center gap-5">
        <Image
          className="w-auto h-auto rounded-full shrink-0"
          src={avatar}
          alt={`${name}'s avatar`}
          width={60}
          height={60}
        />
        <div className="flex flex-col gap-2">
          <p
            className={`${
              theme === "dark" ? "text-[#F1F1F1]" : "text-[#131211]"
            } font-bold text-sm md:text-lg`}
          >
            {name}
          </p>
          <p
            className={`${
              theme === "dark" ? "text-[#858585]" : "text-[#717171]"
            } font-medium text-sm md:text-base`}
          >
            {role}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
