"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation"; 
import whiteMenu from "../assets/menu-white.svg";
import blackMenu from "../assets/menu-black.svg";
import Logo from "./Logo";
import Image from "next/image";
import ThemeToggle from "./ThemeToggle";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"; // Prevent scrolling
    } else {
      document.body.style.overflow = "auto"; // Restore scrolling
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = "auto"; // Restore scrolling
  };

  const menuIcon = () => {
    if (theme === "dark") {
      return whiteMenu;
    } else {
      return blackMenu;
    }
  };

  return (
    <nav className="w-full flex items-center justify-between px-3 pt-6 lg:pt-10 pb-4 lg:px-5 transition duration-500">
      {/* Logo */}
      <Link href='/'>
        <Logo />
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-[80px]">
        <div className="flex flex-col gap-2 items-center">
          {pathname === "/" && <span className="h-[10px] w-[10px] bg-[#DE950C] rounded-full"></span>}
          <Link
            href="/"
            className={`hover:text-[#DE950C] transition duration-1000 ${
              pathname === "/" ? "text-[#DE950C]" : ""
            }`}
          >
            Featured Project
          </Link>
          {pathname === "/" && <span className="h-[4px] w-[38px] mx-auto bg-[#DE950C] rounded-[20px]"></span>}
        </div>

        <div className="flex flex-col gap-2 items-center">
          {pathname === "/about" && <span className="h-[10px] w-[10px] bg-[#DE950C] rounded-full"></span>}
          <Link
            href="/about"
            className={`hover:text-[#DE950C] transition duration-1000 ${
              pathname === "/about" ? "text-[#DE950C]" : ""
            }`}
          >
            About
          </Link>
          {pathname === "/about" && <span className="h-[4px] w-[38px] mx-auto bg-[#DE950C] rounded-[20px]"></span>}
        </div>
      </div>

      <Link href="#contact" className="bg-[#DE950C] cursor-pointer transition duration-1000 hover:bg-[#de950ca8] hidden lg:block rounded-[100px] shadow-lg px-[48px] py-[18px]">
        Contact Me
      </Link>

      {/* Mobile Hamburger Menu */}
      <div className="lg:hidden flex items-center z-50">
        <button onClick={toggleMenu} aria-label="Toggle Menu" className="cursor-pointer">
          {!isMenuOpen ? (
            <Image src={menuIcon()} alt="Hamburger Menu Icon" className="w-[24px] h-[24px]" width={24} height={24} />
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`w-[32px] h-[32px] ${theme === "dark" ? "text-white" : "text-black"}`}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`fixed top-0 left-0 mt-28 flex flex-col justify-between w-full h-screen lg:hidden font-bold z-50 shadow-lg overflow-hidden p-4 ${
            theme === "dark" ? "bg-[#0a0a0a]" : "bg-[#ffffff]"
          }`}
        >
          <div className="flex flex-col gap-[24px] flex-grow pt-4">
            <div className="flex flex-col gap-2 items-center border-b border-[#CCCCCC59] pb-10">
              {pathname === "/" && <span className="h-[10px] w-[10px] bg-[#DE950C] rounded-full"></span>}
              <Link onClick={closeMenu} href="/" className={`hover:text-[#DE950C] transition duration-1000 ${pathname === "/" ? "text-[#DE950C]" : "mt-4"}`}>
                Featured Project
              </Link>
              {pathname === "/" && <span className="h-[4px] w-[38px] mx-auto bg-[#DE950C] rounded-[20px]"></span>}
            </div>

            <div className="flex flex-col gap-2 items-center border-b border-[#CCCCCC59] pb-10">
              {pathname === "/about" && <span className="h-[10px] w-[10px] bg-[#DE950C] rounded-full"></span>}
              <Link onClick={closeMenu} href="/about" className={`hover:text-[#DE950C] transition duration-1000 ${pathname === "/about" ? "text-[#DE950C]" : "mt-4"}`}>
                About
              </Link>
              {pathname === "/about" && <span className="h-[4px] w-[38px] mx-auto bg-[#DE950C] rounded-[20px]"></span>}
            </div>

            <Link onClick={closeMenu} href="#contact" className="bg-[#DE950C] cursor-pointer transition duration-1000 hover:bg-[#de950ca8] rounded-[100px] shadow-lg px-[48px] py-[18px] text-center mt-8">
              Contact Me
            </Link>
          </div>

          {/* Theme Toggle Section */}
          <div className={`flex items-center justify-between w-full p-4 fixed bottom-0 left-0 bg-opacity-90 z-50 ${
            theme === "dark" ? "bg-[#131211]" : "bg-[#F1F1F1]"
          }`}>
            <p className="text-sm">Switch between modes</p>
            <ThemeToggle />
          </div>
        </div>
      )}
    </nav>
  );
}