"use client"

import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import dynamic from "next/dynamic";
const Slider = dynamic(() => import("react-slick"), { ssr: false });
import Image from 'next/image';
import image1 from '../assets/prince/Image 1.png'
import image2 from '../assets/prince/Image 2.png'
import image3 from '../assets/prince/Image 3.png'
import image4 from '../assets/prince/image5.jpg';
import image5 from '../assets/prince/image 6.jpg';
import image6 from '../assets/prince/image 7.jpg';
import image7 from '../assets/prince/image 8.jpg';


export default function AboutSlider() {

    const images = [
        { id: 1, alt: "Image 1", path: image1},
        { id: 2, alt: "Image 2", path: image2 },
        { id: 3, alt: "Image 3", path: image3 },
        { id: 4, alt: "Image 4", path: image4 },
        { id: 5, alt: "Image 4", path: image5 },
        { id: 6, alt: "Image 4", path: image6 },
        { id: 7, alt: "Image 4", path: image7 },
      ];
      const imageSliderSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        centerMode: true,
        centerPadding: "0",
        responsive: [
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: "0px",
            },           
          },
          {
            breakpoint: 769,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              centerMode: true,
              centerPadding: "0px",
            },
          },
        ],
      };

  return (
    <div>
        <Slider {...imageSliderSettings} className='flex items-center '>
            {images.map((image) => (
                <div key={image.id} className=''>
                    <Image 
                    src={image.path} 
                    alt={image.alt} 
                    className='h-[420px] mr-3 rounded-[20px]' 
                    width={382}
                    height={420}
                    />
                </div>
            ))}
        </Slider>
    </div>
  )
}
