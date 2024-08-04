"use client";
import React from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  RiBook3Fill,
  RiMenFill,
  RiProjector2Fill,
  RiUserFollowLine,
} from "react-icons/ri";
import Social from "./Social";
import HeroImage from "./HeroImage";
import Badge from "./Badge";
import { Fade } from "react-awesome-reveal";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[auto] bg-bottom">
      <div className="container mx-auto text-center xl:text-left">
        <div className="flex flex-col justify-center items-center gap-x-8 xl:flex-row">
          {/* Left side */}
          <div className="flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <Fade
              direction="up"
              delay={400}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
                PHOTOGRAPHY
              </div>
            </Fade>
            <Fade
              direction="up"
              delay={600}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <h1 className="h1 uppercase">Lets make magic</h1>
            </Fade>
            <Fade
              direction="up"
              delay={800}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              <p className="subtitle max-w-[590px] mt-4 mx-auto xl:mx-0">
                Ajosh Photography adalah tempat di mana keajaiban fotografi
                terjadi. Kami mengabadikan momen-momen indah dengan keahlian dan
                dedikasi, menciptakan kenangan yang tak terlupakan. Bergabunglah
                dengan kami dan rasakan pengalaman fotografi yang luar biasa.
              </p>
            </Fade>

            <Fade
              direction="up"
              delay={1000}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              {/* SUB BUTTON */}
              <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
                <div className="flex w-full gap-x-4">
                  <label className="sr-only" htmlFor="email">
                    EMAIL
                  </label>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                  />
                  <Link href="./contact">
                    <Button className="gap-x-2 bg-black">
                      Subscribe <RiMenFill size={18} />{" "}
                    </Button>
                  </Link>
                </div>
              </div>
            </Fade>

            <Fade
              direction="up"
              delay={1200}
              cascade
              damping={1e-1}
              triggerOnce={true}
            >
              {/* SOSIAL */}
              <Social
                containerStyles="flex gap-x-6 mx-auto xl:mx-0"
                iconStyles="text-foreground text-[22px] hover:text-primary transition-all duration-300"
              />
            </Fade>
          </div>

          <Fade
            direction="right"
            delay={400}
            cascade
            damping={1e-1}
            triggerOnce={true}
          >
            {/* Banner Img */}
            <div className="hidden xl:flex relative">
              <HeroImage
                imgSrc="/about/photography.svg"
                containerStyles="w-[550px] h-[475px] bg-no-repeat relative bg-bottom"
              />
            </div>
          </Fade>
        </div>

        {/* BAdge */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              <Fade
                direction="up"
                delay={400}
                cascade
                damping={1e-1}
                triggerOnce={true}
              >
                {/* B1 */}
                <div className="mx-auto flex max-w-xs flex-col gap-y-4 items-center">
                  <dt className="text-base leading-7 text-muted-foreground">
                    Years of Experience
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl ">
                    <Badge
                      icon={<RiBook3Fill />}
                      endCountNum={12}
                      endCountText="+"
                      badgeText=""
                    />
                  </dd>
                </div>
                {/* B2 */}
                <div className="mx-auto flex max-w-xs flex-col gap-y-4 items-center">
                  <dt className="text-base leading-7 text-muted-foreground">
                    Project Work
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl ">
                    <Badge
                      icon={<RiProjector2Fill />}
                      endCountNum={819}
                      endCountText="+"
                      badgeText=""
                    />
                  </dd>
                </div>
                {/* B3 */}
                <div className="mx-auto flex max-w-xs flex-col gap-y-4 items-center">
                  <dt className="text-base leading-7 text-muted-foreground">
                    Followers
                  </dt>
                  <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl ">
                    <Badge
                      icon={<RiUserFollowLine />}
                      endCountNum={12}
                      endCountText="M"
                      badgeText=""
                    />
                  </dd>
                </div>
              </Fade>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
