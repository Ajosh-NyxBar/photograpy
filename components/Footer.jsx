"use client";

import React from "react";
import Social from "./Social";
import { Fade } from "react-awesome-reveal";

const Footer = () => {
  return (
    <footer className="bg-primary py-12">
      <div className="container mx-auto">
        <div className="flex flex-col items-center justify-between">
          <Fade direction="up" cascade damping={0.1} triggerOnce>
            {/* Social */}
            <Social
              containerStyles="flex gap-x-4 mx-auto xl:mx-0 mb-4"
              iconStyles="text-white text-[20px] transition-all dark:text-white/70 hover:text-white/70
        dark:hover:text-white"
            />
            <div className="text-white">
              copyright &copy; 2024 all rights reserved
            </div>
          </Fade>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
