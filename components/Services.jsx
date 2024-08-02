"use client";
import { Bird, Scan, Smile } from "lucide-react";
import React from "react";
import {
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
  Card,
} from "./ui/card";
import { Fade } from "react-awesome-reveal";

const Data = [
  {
    icon: <Smile size={48} strokeWidth={1} />,
    title: "Portraiture",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quasi voluptate corporis id assumenda voluptas repudiandae sapiente cupiditate, vel impedit!",
  },
  {
    icon: <Scan size={48} strokeWidth={1} />,
    title: "Landscape",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quasi voluptate corporis id assumenda voluptas repudiandae sapiente cupiditate, vel impedit!",
  },
  {
    icon: <Bird size={48} strokeWidth={1} />,
    title: "Lifestyle",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quasi voluptate corporis id assumenda voluptas repudiandae sapiente cupiditate, vel impedit!",
  },
];

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <Fade direction="up" delay={200} cascade damping={0.1} triggerOnce>
          <h2 className="section-title mb-6 xl:mb-24 text-center mx-auto">
            Our Service
          </h2>
        </Fade>

        <div
          className="grid xl:grid-cols-3 justify-center gap-y-12 
        xl:gap-y-24 xl:gap-8"
        >
          {Data.map((item, index) => {
            return (
              <Fade direction="up" delay={200 * (index + 1)} cascade damping={0.1} triggerOnce key={index}>
                <Card
                  className="relative w-full max-w-[425px] h-[450px] flex
                flex-col pb-10 justify-center items-center cursor-pointer hover:bg-primary/10 duration-300
                 hover:dark:bg-white/10 dark:duration-300 border border-black/10
                 hover:dark:border-white/20 dark:border-white/20"
                >
                  <CardHeader className="text-primary">
                    <div
                      className="w-[80px] h-[80px] bg-primary text-white rounded-full flex
                    justify-center items-center absolute -bottom-6 right-6"
                    >
                      {item.icon}
                    </div>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardTitle className="mb-4">{item.title}</CardTitle>
                    <CardDescription className="text-lg">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Fade>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;