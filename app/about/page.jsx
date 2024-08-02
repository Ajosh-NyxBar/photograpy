"use client";

import HeroImage from "@/components/HeroImage";
import React from "react";
import {
  RiRidingFill,
  RiSendPlane2Fill,
  RiStarHalfLine,
  RiUserHeartFill,
  RiVidicon2Fill,
} from "react-icons/ri";
import { Fade } from "react-awesome-reveal";

const infoData = [
  {
    icon: <RiUserHeartFill size={20} />,
    text: "Mr. John Doe",
  },
  {
    icon: <RiSendPlane2Fill size={20} />,
    text: "info@gmail.com",
  },
  {
    icon: <RiVidicon2Fill size={20} />,
    text: "0123456789",
  },
  {
    icon: <RiUserHeartFill size={20} />,
    text: "Mr. John Doe",
  },
  {
    icon: <RiStarHalfLine size={20} />,
    text: "4.5",
  },
  {
    icon: <RiRidingFill size={20} />,
    text: "Purwakarta",
  },
];

const About = () => {
  return (
    <section className="pb-12 xl:py-24">
      <div className="container mx-auto">
        <Fade direction="up" triggerOnce>
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            About Me
          </h2>
        </Fade>
        <div className="flex flex-col xl:flex-row">
          <div className="relative flex-1 xl:flex">
            <Fade direction="left" triggerOnce>
              <HeroImage
                containerStyles="w-[350px] h-[350px] lg:w-[505px] lg:h-[505px] bg-no-repeat relative"
                imgSrc="/about/profile.png"
              />
            </Fade>
          </div>
          <div className="flex-1">
            {/* Content */}
            <div className="text-lg mt-12 xl:mt-3">
              <div className="text-center xl:text-left">
                <Fade direction="up" triggerOnce>
                  <h3 className="h3 mb-4">Lets Plan Your Photoshop</h3>
                </Fade>
                <Fade direction="up" triggerOnce delay={200}>
                  <p className="subtitle max-w-xl mx-auto xl:mx-0">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Aliquam commodi exercitationem, rerum perspiciatis labore vero
                    amet provident, voluptatem, accusantium tempora nemo vitae?
                    Fugit ut enim, velit obcaecati voluptas qui quas?
                  </p>
                </Fade>
                <Fade direction="up" triggerOnce delay={400}>
                  <p className="subtitle max-w-lg mx-auto xl:mx-0">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ex
                    suscipit soluta nihil amet molestias tempore?
                  </p>
                </Fade>

                {/* ICONS */}
                <div className="grid xl:grid-cols-2 gap-4 mb-12">
                  {infoData.map((item, index) => (
                    <Fade key={index} direction="up" triggerOnce delay={index * 100}>
                      <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                        <div className="text-primary">{item.icon}</div>
                        <div>{item.text}</div>
                      </div>
                    </Fade>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;