"use client";

import Image from "next/image";
import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const dataRev = [
  {
    ava: "/reviews/avatar-1.png",
    name: "Jeni",
    job: "Chief",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit deserunt voluptates, illo tempore rerum quidem nihil impedit nesciunt vero dolores sunt minima! Provident, corrupti molestiae velit praesentium explicabo numquam.",
  },
  {
    ava: "/reviews/avatar-2.png",
    name: "Jeni",
    job: "Chief",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit deserunt voluptates, illo tempore rerum quidem nihil impedit nesciunt vero dolores sunt minima! Provident, corrupti molestiae velit praesentium explicabo numquam.",
  },
  {
    ava: "/reviews/avatar-3.png",
    name: "Jeni",
    job: "Chief",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit deserunt voluptates, illo tempore rerum quidem nihil impedit nesciunt vero dolores sunt minima! Provident, corrupti molestiae velit praesentium explicabo numquam.",
  },
  {
    ava: "/reviews/avatar-4.png",
    name: "Jeni",
    job: "Chief",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit deserunt voluptates, illo tempore rerum quidem nihil impedit nesciunt vero dolores sunt minima! Provident, corrupti molestiae velit praesentium explicabo numquam.",
  },
  {
    ava: "/reviews/avatar-5.png",
    name: "Jeni",
    job: "Chief",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit deserunt voluptates, illo tempore rerum quidem nihil impedit nesciunt vero dolores sunt minima! Provident, corrupti molestiae velit praesentium explicabo numquam.",
  },
  {
    ava: "/reviews/avatar-6.png",
    name: "Jeni",
    job: "Chief",
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique suscipit deserunt voluptates, illo tempore rerum quidem nihil impedit nesciunt vero dolores sunt minima! Provident, corrupti molestiae velit praesentium explicabo numquam.",
  },
];

const Reviews = () => {
  return (
    <section className="mb-12 xl:mb-32">
      <div className="container mx-auto">
        <p className="section-title mb-12 text-center mx-auto text-lg">
          They Say
        </p>

        {/* SWIPER */}
        <Swiper
          modules={[Pagination]}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1400: {
              slidesPerView: 3,
            },
          }}
          spaceBetween={30}
          pagination={{
            clickable: true
          }}
          className="h-[450px]"
        >
          {dataRev.map((item, index) => {
            return (
              <SwiperSlide key={index}>
               <Card className="min-h-[300px] border border-primary rounded-xl dark:border-gray-200">
                <CardHeader className="">
                    <div className="flex flex-col items-start g-x-4">
                        {/* AVATAR */}
                        <Image 
                        src={item.ava}
                        alt={item.name}
                        width={70}
                        height={70}
                        priority
                        className="rounded-full"
                        />
                        {/* NAME */}
                        <div className="mt-4">
                            <CardTitle className="text-lg">{item.name}</CardTitle>
                            <CardDescription className="text-sm text-gray-500">{item.job}</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <CardDescription className=" text-muted-foreground">{item.review}</CardDescription>
                </CardContent>
               </Card>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Reviews;