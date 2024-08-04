"use client";
import ProjCard from "@/components/ProjCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";

const projecyData = [
  {
    img: "/work/3.png",
    category: "Potraits",
    name: "February 11, 2024",
    desc: "Proyek potret yang menampilkan keindahan alam.",
    link: "/",
    codepan: "/",
  },
  {
    img: "/work/1.png",
    category: "Potraits",
    name: "February 11, 2024",
    desc: "Potret manusia dengan pencahayaan alami.",
    link: "/",
    codepan: "/",
  },
  {
    img: "/work/5.png",
    category: "Landscape",
    name: "February 11, 2024",
    desc: "Fotografi potret dengan latar belakang kota.",
    link: "/",
    codepan: "/",
  },
  {
    img: "/work/7.png",
    category: "Landscape",
    name: "February 11, 2024",
    desc: "Potret hitam putih yang artistik.",
    link: "/",
    codepan: "/",
  },
  {
    img: "/work/8.png",
    category: "Landscape",
    name: "February 11, 2024",
    desc: "Potret keluarga dengan suasana hangat.",
    link: "/",
    codepan: "/",
  },
  {
    img: "/work/9.png",
    category: "Panorama",
    name: "February 11, 2024",
    desc: "Fotografi potret dengan efek bokeh.",
    link: "/",
    codepan: "/",
  },
  {
    img: "/work/10.png",
    category: "Panorama",
    name: "February 11, 2024",
    desc: "Potret candid yang menangkap momen spontan.",
    link: "/",
    codepan: "/",
  },
];

const unique = [
  "all project",
  ...new Set(projecyData.map((item) => item.category)),
];
const Portofolio = () => {
  const [active, setActive] = useState("all project");
  const filter = projecyData.filter((item) => {
    return active === "all project" ? item : item.category === active;
  });
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Portofolio
        </h2>
        {/* TABS */}
        <Tabs
          defaultValue={active}
          onValueChange={(value) => setActive(value)}
          className="mb-24 xl:mb-48"
        >
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[740px] mb-12 mx-auto md:border dark:border-none">
            {unique.map((item, index) => {
              return (
                <TabsTrigger
                  value={item}
                  key={index}
                  onClick={() => setActive(item)}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {item}
                </TabsTrigger>
              );
            })}
          </TabsList>

          <TabsContent value="all project">
            <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
              {filter.map((project, index) => {
                let direction = "left";
                if (index % 3 === 1) {
                  direction = "up";
                } else if (index % 3 === 2) {
                  direction = "right";
                }

                return (
                  <Fade key={index} delay={index * 100} triggerOnce={true} direction={direction}>
                    <ProjCard project={project} />
                  </Fade>
                );
              })}
            </div>
          </TabsContent>

          {unique.slice(1).map((category, index) => (
            <TabsContent value={category} key={index}>
              <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-12">
                {filter.map((project, index) => {
                  let direction = "left";
                  if (index % 3 === 1) {
                    direction = "up";
                  } else if (index % 3 === 2) {
                    direction = "right";
                  }

                  return (
                    <Fade key={index} delay={index * 100} triggerOnce={true} direction={direction}>
                      <ProjCard project={project} />
                    </Fade>
                  );
                })}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Portofolio;