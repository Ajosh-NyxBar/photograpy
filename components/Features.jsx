"use client";

import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { Fade } from "react-awesome-reveal";

const features = [
  {
    name: "PHOTOGRAPHY",
    description:
      "Menangkap momen indah dengan keahlian fotografi profesional, menghasilkan gambar yang memukau dan penuh kenangan.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "PORTFOLIO",
    description:
      "Menyusun portofolio yang menarik dan profesional untuk menampilkan karya terbaik Anda kepada dunia.",
    icon: LockClosedIcon,
  },
  {
    name: "FULLY CUSTOMIZABLE",
    description:
      "Menawarkan solusi yang sepenuhnya dapat disesuaikan untuk memenuhi kebutuhan unik dan preferensi Anda.",
    icon: ArrowPathIcon,
  },
  {
    name: "FREE PLUGIN",
    description:
      "Menyediakan plugin gratis yang mudah digunakan untuk meningkatkan fungsionalitas dan kinerja situs web Anda.",
    icon: FingerPrintIcon,
  },
];

const Features = () => {
  return (
    <section className="pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-12 xl:mb-3 text-center mx-auto">
          Key Features
        </h2>
        <div className="flex flex-col">
          <div className="mx-auto max-w-7xl text-center">
            <Fade direction="up" triggerOnce>
              <p
                className="mt-2 text-3xl font-bold tracking-tight text-black dark:text-white
              sm:text-4xl"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
                quos.
              </p>
            </Fade>
            <Fade direction="up" triggerOnce delay={200}>
              <p className="mt-6 text-lg leading-8 text-black dark:text-white">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim
                blanditiis accusamus fuga sunt corporis, maxime asperiores magni
                similique veritatis nesciunt assumenda, dolores nam reiciendis
                fugiat incidunt! Dolorum deleniti soluta sint?
              </p>
            </Fade>
          </div>
        </div>
        {/* FEATURES SECTION */}

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <Fade key={feature.name} direction="up" triggerOnce>
                <div className="relative hover:scale-110 transition-all">
                  <dt className="text-base font-semibold leading-7 text-muted-foreground justify-center">
                    <div
                      className="flex flex-col w-[100px] h-[100px] bg-primary
                    rounded-full items-center mb-4 justify-center"
                    >
                      <feature.icon
                        className="h-[36px] w-[36px] text-white"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="text-black dark:text-white">{feature.name}</div>
                  </dt>

                  <dd className="mt-2 text-base leading-7">{feature.description}</dd>
                </div>
              </Fade>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Features;