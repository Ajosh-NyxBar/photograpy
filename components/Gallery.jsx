import React from "react";
import ProjCard from "./ProjCard";

const projecyData = [
  {
    img: "/work/3.png",
    category: "Potraits",
    name: "February 11, 2024",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, sit!",
    link: "/",
    codepan: "/",
  },
  {
    img: "/work/1.png",
    category: "Potraits",
    name: "February 11, 2024",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, sit!",
    link: "/",
    codepan: "/",
  },
  {
    img: "/work/5.png",
    category: "Potraits",
    name: "February 11, 2024",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, sit!",
    link: "/",
    codepan: "/",
  },
  {
    img: "/work/7.png",
    category: "Potraits",
    name: "February 11, 2024",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, sit!",
    link: "/",
    codepan: "/",
  },
  {
    img: "/work/8.png",
    category: "Potraits",
    name: "February 11, 2024",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, sit!",
    link: "/",
    codepan: "/",
  },
  {
    img: "/work/9.png",
    category: "Potraits",
    name: "February 11, 2024",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, sit!",
    link: "/",
    codepan: "/",
  },
  {
    img: "/work/10.png",
    category: "Potraits",
    name: "February 11, 2024",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae, sit!",
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
                    projecyData.map((project) => {
                        return(
                            <ProjCard project={project} />
                        )
                    })
                }
            </div>
        </div>
    </section>
  )
};

export default Gallery;