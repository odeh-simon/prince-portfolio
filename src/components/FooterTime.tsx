"use client";

import React, { useEffect, useState } from "react";
import avatar from "../assets/avatar.svg";
import Image from "next/image";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "next-themes";

export default function FooterTime() {
  const [currentTime, setCurrentTime] = useState("");
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      const now = new Date();
      const options = {
        hour: "numeric" as const,
        minute: "numeric" as const,
        second: "numeric" as const,
        hour12: true,
        timeZoneName: "short" as const,
      };
      setCurrentTime(now.toLocaleTimeString("en-US", options));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!mounted) return null; // Prevent rendering until hydration

  return (
    <div
      className={`${
        theme === "dark" ? "bg-[#1E1E1ECC] text-white" : "bg-[#F1F1F1CC] text-[#131211]"
      } w-full rounded-[70px] border-b-2 border-[#CCCCCC66] flex items-center justify-between backdrop-blur-[10px] shadow-md py-1 px-3 md:px-5`}
    >
      <div className="flex items-center w-fit">
        <div className="w-[70px] h-[70px] hidden lg:flex">
          <Image src={avatar} alt="Logo" className="w-full h-full" />
        </div>
        <p className="text-base lg:text-[20px] font-[500] ">
          {currentTime}. <span className="hidden lg:inline">Abuja, Nigeria</span>
        </p>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden lg:flex">
          <ThemeToggle />
        </div>
        <a
          href="#resume"
          className="bg-[#DE950C] hover:bg-[#de950ca1] transition duration-500 rounded-[100px] shadow-lg py-4 md:py-[18px] px-6 md:px-[38px] text-[#F1F1F1] font-medium text-sm md:text-lg"
        >
          CV/Resume
        </a>
      </div>
    </div>
  );
}