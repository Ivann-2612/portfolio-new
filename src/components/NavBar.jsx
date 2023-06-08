"use client";
import React, { useEffect, useState } from "react";
import { useTheme } from "@nextui-org/react";
import Link from "next/link";
import Image from "next/image";
import Logo from "/public/logos.png";
import Theme from "@/components/Theme";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full bg-transparent z-50 ${
        isDark ? "mnhdr" : "mnhdr-light"
      } h-auto transition-all ${scrolling ? "blur-background" : ""} ${
        isDark ? "blur-background" : "blur-background-light"
      } ${mobileMenuOpen ? "h-24 blur-background" : ""}`}
    >
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-semibold text-gray-800 list-color"
        >
          <Image
            src={Logo}
            alt="logo"
            width={52}
            height={52}
            className="logo_img"
          />
        </Link>
        <div
          style={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
          className="hidden md:flex space-x-6 mobile-show"
        >
          <a
            href="#about"
            className="text-lg font-bold text-gray-800 list-color link-hover"
            onClick={handleLinkClick}
          >
            About
          </a>
          <a
            href="#work"
            className="text-lg font-bold text-gray-800 list-color link-hover"
            onClick={handleLinkClick}
          >
            Work
          </a>
          <a
            href="#experience"
            className="text-lg font-bold text-gray-800 list-color link-hover"
            onClick={handleLinkClick}
          >
            Experience
          </a>
          <a
            href="#card"
            className="text-lg font-bold text-gray-800 list-color link-hover"
            onClick={handleLinkClick}
          >
            Contact
          </a>
          <Theme />
        </div>
        <div className="flex space-x-4">
          <button className="md:hidden" onClick={toggleMobileMenu}>
            <svg
              className="w-6 h-6 text-gray-800 text-white"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </nav>
      <div
        className={`md:hidden ${
          mobileMenuOpen ? "flex" : "hidden"
        } justify-between mt-4 mb-6 ml-5`}
      >
        <div className="flex flex-col space-y-4">
          <a
            href="#about"
            className="text-lg font-bold text-gray-800 text-white"
            onClick={handleLinkClick}
          >
            About
          </a>
          <a
            href="#experience"
            className="text-lg font-bold text-gray-800 text-white"
            onClick={handleLinkClick}
          >
            Experience
          </a>
          <a
            href="#work"
            className="text-lg font-bold text-gray-800 text-white"
            onClick={handleLinkClick}
          >
            Work
          </a>
          <a
            href="#card"
            className="text-lg font-bold text-gray-800 text-white"
            onClick={handleLinkClick}
          >
            Contact
          </a>
          <a>
            <Theme />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
