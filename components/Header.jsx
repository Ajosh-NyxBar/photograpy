"use client";
import React, { useEffect, useState } from "react";
import ThemeToogle from "./ThemeToogle";
import Logo from "./Logo";
import Nav from "./Nav";
import Mobilenav from "./Mobilenav";
import { usePathname } from "next/navigation";

const Header = () => {
  const [header, setHeader] = useState(false);
  const pathmame = usePathname();

  useEffect(() => {
    const scrollYPos = window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setHeader(true) : setHeader(false);
    });
    return () => window.removeEventListener("scroll", scrollYPos);
  }, []);

  return (
    <header
      className={`${
        header
          ? "py-4 bg-white shadow-lg dark:bg-accent"
          : "py-6 dark:bg-transparent"
      } sticky top-0 z-30 transition-all ${
        pathmame === "/" ? "bg-[#fff]" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* Nav Section */}
            <Nav
              containerStyles="hidden xl:flex gap-x-8 items-center"
              linkStyles="relative hover:text-primary transition-all"
              underlineStyles="absolute bottom-0 left-0 w-full h-[2px] bg-primary"
            />

            {/* Theme Toogle */}
            <ThemeToogle />

            {/* Mobile Nav */}
            <div className="xl:hidden">
              <Mobilenav />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
