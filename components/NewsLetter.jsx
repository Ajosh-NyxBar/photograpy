"use client"
import React from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import { Button } from "./ui/button";
import { RiMenFill } from "react-icons/ri";
import { CalendarDaysIcon, HandRaisedIcon } from "@heroicons/react/24/outline";
import { Fade } from "react-awesome-reveal";

const NewsLetter = () => {
  return (
    <section>
      <div className="relative bg-tertiary dark:bg-accent overflow-hidden py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <Fade direction="up" delay={200} triggerOnce>
              <div className="max-w-xl lg:max-w-lg">
                <h2 className="text-3xl font-bold tracking-tight section-title sm:text-4xl">
                  Need a Photographer?
                </h2>
                <p className="mt-4 text-lg leading-8 subtitle">
                  But I must explain to you how all this mistaken idea of
                  denouncing pleasure and praising pain was born and I will give
                  you a complete account of the system, and expound the actual
                  teachings of the great explorer of the truth, the master-builder
                  of human happiness.
                </p>

                <div className="mt-6 flex max-w-md gap-x-4">
                  <Input
                    id="email-address"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Enter your email"
                  />
                  <Link href={"/contact"}>
                    <Button>
                      Subscribe <RiMenFill size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            </Fade>
            <Fade direction="up" delay={400} triggerOnce>
              <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
                <div className="flex flex-col items-start">
                  <div className="h-10 w-10 flex items-center justify-center bg-primary rounded-full">
                    <CalendarDaysIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <dt className="mt-4 font-semibold">Weekly Articles</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      Kami menyediakan artikel mingguan yang menarik dan informatif
                      untuk membantu Anda tetap terinspirasi dan termotivasi.
                    </dd>
                  </div>
                </div>
                <div className="flex flex-col items-start">
                  <div className="h-10 w-10 flex items-center justify-center bg-primary rounded-full">
                    <HandRaisedIcon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <dt className="mt-4 font-semibold">Weekly Articles</dt>
                    <dd className="mt-2 text-sm text-gray-500">
                      Dapatkan tips dan trik terbaru dari para ahli di bidangnya
                      langsung ke kotak masuk email Anda setiap minggu.
                    </dd>
                  </div>
                </div>
              </dl>
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;