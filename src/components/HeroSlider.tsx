"use client";

import React from "react";
import Slider from "react-slick";
// Import slick-carousel's default styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useTheme } from "next-themes";
export default function DesignSlider() {
    const { theme } = useTheme();
  // Sample items for the slider
  const items = [
    "Mobile Design",
    "Web Design",
    "User Research",
    "Product Design",
  ];

  // react-slick settings
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,         // Hide next/prev arrows (optional)
    slidesToShow: 4,       // Desktop
    slidesToScroll: 1,
    autoplay: true,        // Auto-play (optional)
    speed: 2000,           // Transition speed
    autoplaySpeed: 3000,   // Delay between slides
    pauseOnHover: true,
    responsive: [
      {
        // Tablet breakpoint (≈ Tailwind md/lg)
        breakpoint: 1024, 
        settings: {
          slidesToShow: 3,
        },
      },
      {
        // Mobile breakpoint (≈ Tailwind sm)
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <div className={`${theme === "dark" ? "bg-[#151413] text-[#ccc]" : "bg-[#E9E8E8] text-[#222]"} rounded-[10px] border-b-[2px] border-[#CCCCCC66] py-6 px-4 relative`}>
        <span className={`${theme === "dark" ? "bg-[#858585] border-white" : "bg-[#D9D9D9] border-[#131211]"} w-[10px] h-[10px] rounded-full border-[0.5px] absolute bottom-1 left-2`}></span>
        <span className={`${theme === "dark" ? "bg-[#858585] border-white" : "bg-[#D9D9D9] border-[#131211]"} w-[10px] h-[10px] rounded-full border-[0.5px] absolute top-1 left-2`}></span>
        <span className={`${theme === "dark" ? "bg-[#858585] border-white" : "bg-[#D9D9D9] border-[#131211]"} w-[10px] h-[10px] rounded-full border-[0.5px] absolute top-1 right-2`}></span>
        <span className={`${theme === "dark" ? "bg-[#858585] border-white" : "bg-[#D9D9D9] border-[#131211]"} w-[10px] h-[10px] rounded-full border-[0.5px] absolute bottom-1 right-2`}></span>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index}>
            <div className="flex items-center justify-center font-bold text-base lg:text-2xl">
              <span >{item}</span>
              <span className={`${theme === "dark" ? "bg-[#F1F1F1]": "bg-[#131211]"} text-center mx-auto w-6 h-[5px] rounded-[11px] `}></span>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
