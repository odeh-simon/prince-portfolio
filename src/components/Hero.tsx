"use client";
import React, { useState } from "react";
import { useTheme } from "next-themes";
import DesignSlider from "./HeroSlider";

export default function Hero() {
  const { theme } = useTheme();
  const [copyStatus, setCopyStatus] = useState("Copy Email");

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("idomaprince1@gmail.com");
      setCopyStatus("Copied!");
      setTimeout(() => setCopyStatus("Copy Email"), 5000); // Reset text after 2 seconds
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };


  return (
    <div className="flex flex-col gap-9 w-full">
      <h1
        className={`${
          theme === "dark" ? "text-[#858585]" : "text-[#717171]"
        } font-bold text-2xl lg:text-[56px] leading-[40px] lg:leading-[73px]`}
      >
        Hi there,{" "}
        <span
          className={`${theme === "dark" ? "text-[#F1F1F1]" : "text-[#222]"}`}
        >
          I am Prince Idoma.
        </span>{" "}
        <br /> User Interface and User Experience Designer.
      </h1>

      <h2
        className={`${
          theme === "dark" ? "text-[#CCC]" : "text-[#222]"
        } font-medium text-sm lg:text-lg leading-[22px] lg:leading-[30px]`}
      >
        I specialize in crafting human-centered designs that not only convert
        effectively but also resonate deeply with users.{" "}
        <span
          className={`${
            theme === "dark" ? "text-[#858585]" : "text-[#717171]"
          }`}
        >
          My approach focuses on understanding user needs and behaviors,
          ensuring that every element of the design enhances the overall
          experience and drives engagement.
        </span>
      </h2>

      <div className="flex w-full justify-between lg:justify-start items-center lg:gap-8">
        <div
          className={`flex flex-col gap-2 font-medium text-sm lg:text-lg leading-[22px] lg:leading-[30px] ${
            theme === "dark" ? "text-[#ccc]" : "text-[#222]"
          }`}
        >
          <p>You can shoot me an email here:</p>
          <a
            href="mailto:idomaprince1@gmail.com"
            target="_blank"
            className="underline"
          >
            idomaprince1@gmail.com
          </a>
        </div>
        <button
          onClick={handleCopyEmail}
          className={`px-3 lg:px-[30px] py-[9px] lg:py-[15px] border hover:text-[20px] rounded-[30px] font-medium text-sm md:text-[18px] leading-[30px] w-fit cursor-pointer mt-2 transition duration-1000 ease-in-out ${theme === "dark" ? "border-[#ccc] text-[#ccc]" : "border-[#222] text-[#222]"}`}
        >
          {copyStatus}
        </button>
      </div>
      <div>
        <DesignSlider />
      </div>
    </div>
  );
}
