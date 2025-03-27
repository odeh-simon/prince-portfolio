"use client"

import React from "react";
import Image from "next/image";
import profile from "../../assets/prince/profile-Image.png";
import AboutSlider from "@/components/AboutSlider";
import { useTheme } from "next-themes";

export default function Page() {
  const { theme } = useTheme();
  return (
    <div className="p-5 md:p-8 flex flex-col gap-6 lg:gap-10">
      <h1 className="font-bold text-2xl md:text-5xl">
        <span className={`${theme === "dark" ? "text-[#858585]" : "text-[#717171]"}`}>Hi there,</span> I am Prince Idoma.
      </h1>

      <div>
        <Image
          src={profile}
          alt="profile image"
          className="w-full h-auto rounded-[20px]"
          width={500}
          height={500}
        />
      </div>

      <section className={`flex flex-col gap-2 ${theme === "dark" ? "text-[#ccc]" : "text-[#222]"} font-medium text-sm md:text-xl`}>
        <p>
          From being mesmerized by how websites and apps looked on my phone to
          earning praise from startup founders for my quick turnarounds,
          I&apos;ve always chased what sparks my curiosity. That same spark led
          me to UI/UX design, where I&apos;ve been creating user-centered
          experiences across various industries.{" "}
        </p>
        <p>
          When I&apos;m not designing, you&apos;ll find me out driving in the
          evenings, walking my dog, or watching a crime movie or a Disney
          cartoon. Those everyday joys keep me grounded and inspired—ready to
          craft intuitive products that people genuinely love.
        </p>
      </section>

      <section>
        <AboutSlider />
      </section>

      <section  className={`pb-[40px] border-b ${
          theme === "dark" ? "border-[#F1F1F1]" : "border-[#222]"
        }`}>
        <p className={`${theme === "dark" ? "text-[#858585]" : "text-[#717171]"} font-bold text-xl md:text-4xl`}>
          For me, design is more than a job - it&apos;s the heartbeat of every idea,
          every project, and every journey.
        </p>
      </section>

      <section className="w-full flex justify-between items-start">
        <p className="text-xl md:text-[40px] font-bold underline">Skill Set</p>
        <ul className={`${theme === "dark" ? "text-[#858585]" : "text-[#717171]"} font-medium text-lg md:text-[32px]`}>
            <li>Usability Testing </li>
            <li>Information</li>
            <li>Architecture</li>
            <li>Accessibility Design</li>
            <li>User Interface Design</li>
            <li>Content Strategy</li>
            <li>Branding</li>
            <li>Visual Storytelling</li>
            <li>Interaction Design</li>
            <li>User Journey</li>
            <li>Mapping</li>
            <li>A/B Testing</li>
        </ul>
      </section>
    </div>
  );
}
