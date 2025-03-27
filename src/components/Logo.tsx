"use client"
import React from "react";
import avatar from "../assets/avatar.svg";
import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center w-fit">
      <div className="w-[70px] h-[70px] ">
        <Image src={avatar} alt="Logo" className="w-full h-full" />
      </div>
      <p className="text-[18px] md:text-[16px] font-[700]">Prince Idoma</p>
    </div>
  );
}
