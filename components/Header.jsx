"use client";
import React from "react";
import ThemeToogle from "./ThemeToogle";
import Logo from "./Logo";
import Nav from "./Nav";
import Mobilenav from "./Mobilenav";

const Header = () => {
  return (
    <header>
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <Logo />
          <div className="flex items-center gap-x-6">
            {/* Nav Section */}
            <Nav containerStyles="hidden xl:flex gap-x-8 items-center" />

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
