"use client";
import React from "react";
import ProjCard from "./ProjCard";
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
    category: "Potraits",
    name: "February 11, 2024",
    desc: "Fotografi potret dengan latar belakang kota.",
    link: "/",
    codepan: "/",
  },
  {
    img: "/work/7.png",
    category: "Potraits",
    name: "February 11, 2024",
    desc: "Potret hitam putih yang artistik.",
    link: "/",
    codepan: "/",
  },
  {
    img: "/work/8.png",
    category: "Potraits",
    name: "February 11, 2024",
    desc: "Potret keluarga dengan suasana hangat.",
    link: "/",
    codepan: "/",
  },
  {
    img: "/work/9.png",
    category: "Potraits",
    name: "February 11, 2024",
    desc: "Fotografi potret dengan efek bokeh.",
    link: "/",
    codepan: "/",
  },
  {
    img: "/work/10.png",
    category: "Potraits",
    name: "February 11, 2024",
    desc: "Potret candid yang menangkap momen spontan.",
    link: "/",
    codepan: "/",
  },
];

const Gallery = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
        <div className="container mx-auto">
            <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    projecyData.map((project, index) => {
                        let direction = "left";
                        if (index % 3 === 1) {
                            direction = "up";
                        } else if (index % 3 === 2) {
                            direction = "right";
                        }

                        return(
                            <Fade key={index} delay={index * 100} triggerOnce={true} direction={direction}>
                                <ProjCard project={project} />
                            </Fade>
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
};

export default Gallery;