"use client";
import React, { useState } from "react";
import FooterTime from "./FooterTime";
import Image from "next/image";
import linkedinIcon from "../assets/Linkedin.svg";
import xIcon from "../assets/X.svg";
import whatsappIcon from "../assets/whatsapp.svg";

export default function Footer() {
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
    <footer className="footer-container flex flex-col gap-[211px] justify-between px-5 pt-[80px] pb-3">
      <div className="flex flex-col items-center justify-center gap-[100px]">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-center gap-2 px-6 py-4 mb-3 bg-[#FFFFFF4D] w-fit mx-auto border border-[#FFAB1059] rounded-[10px] backdrop-blur-[2px] shadow-[0px_7px_4px_0px_#00000033]">
            <span className="h-[15px] w-[15px] bg-[#DE950C] rounded-full"></span>
            <p className="text-[#F1F1F1] font-medium md:text-[20px] leading-[30px] text-center">
              Available for work
            </p>
          </div>
          <h2 className="text-[#F1F1F1] font-bold text-2xl md:text-[56px] text-center">
            Eager to craft an{" "}
            <span className="text-[#DE950C] block md:inline">
              exceptional experience?
            </span>
          </h2>
          <p className="text-[#F1F1F1] text-sm md:text-xl font-medium text-center">
            Let&apos;s work together to bring your vision to life and create
            amazing digital experiences.
          </p>
        </div>

        <div className="flex flex-col gap-3" id="contact">
          <h2 className="text-[#CCC] font-medium md:font-bold text-sm md:text-[20px]">
            You can shoot me an email here
          </h2>
          <a
            href="mailto:idomaprince1@gmail.com"
            className="text-[#CCC] text-center font-medium md:font-bold text-sm md:text-[20px] hover:text-[#DE950C] transition duration-700 underline"
          >
            idomaprince1@gmail.com
          </a>
          <button
            onClick={handleCopyEmail}
            className="px-[30px] py-[15px] border-2 border-[#ccc] md:hover:text-[20px] rounded-full text-[#F1F1F1] font-medium text-sm md:text-[18px] leading-[30px] w-fit mx-auto cursor-pointer mt-2 transition duration-1000 ease-in-out"
          >
            {copyStatus}
          </button>

          {/* socila links */}
          <div className="flex items-center gap-9 mt-9 lg:gap-14 lg:mt-14">
            <a href="https://www.linkedin.com/in/idoma-prince?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
              <Image
                src={linkedinIcon}
                alt="Linkedin Icon"
                className="w-[46.957px] h-[46.957px] lg:w-[70px] lg:h-[70px] hover:scale-110 transition duration-700"
              />
            </a>
            <a href="https://x.com/fav_ajebo?t=QIsuQzM1r-BgyvgLsJUlXA&s=09" target="_blank">
              <Image 
              src={xIcon} 
              alt="X Icon" 
              className="w-[46.957px] h-[46.957px] lg:w-[70px] lg:h-[70px] hover:scale-110 transition duration-700" 
              />
            </a>
            <a href="https://wa.me/09015096434" target="_blank">
              <Image
                src={whatsappIcon}
                alt="Whatsapp Icon"
                className="w-[46.957px] h-[46.957px] lg:w-[70px] lg:h-[70px] hover:scale-110 transition duration-700"
              />
            </a>
          </div>
        </div>
      </div>
      <div>
        <FooterTime />
      </div>
    </footer>
  );
}
