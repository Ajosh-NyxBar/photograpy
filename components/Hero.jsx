import React from "react";
import { Input } from "./ui/input";
import Link from "next/link";
import { Button } from "./ui/button";
import { RiBook3Fill, RiMenFill, RiProjector2Fill, RiUserFollowLine } from "react-icons/ri";
import Social from "./Social";
import HeroImage from "./HeroImage";
import Badge from "./Badge";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[auto] bg-bottom">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Left side */}
          <div className="flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">
              PHOTOGRAPHY
            </div>
            <h1 className="h1 uppercase">Lets make magic</h1>
            <p className="subtitle max-w-[590px] mt-4 mx-auto xl:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              nostrum laudantium laboriosam est autem assumenda. Alias sapiente
              distinctio quidem quae numquam delectus deleniti perferendis
              temporibus molestias fugit iure, iste inventore.
            </p>
            {/* SUB BUTTON */}
            <div className="flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12">
              <div className="flex w-full gap-x-4">
                <label className="sr-only" htmlFor="email">
                  EMAIL
                </label>
                <Input type="email" id="email" placeholder="Enter your email" />
                <Link href="./contact">
                  <Button className="gap-x-2 bg-black">
                    Subscribe <RiMenFill size={18} />{" "}
                  </Button>
                </Link>
              </div>
            </div>

            {/* SOSIAL */}
            <Social
              containerStyles="flex gap-x-6 mx-auto xl:mx-0"
              iconStyles="text-foreground text-[22px] hover:text-primary transition-all duration-300"
            />
          </div>
          {/* Banner Img */}
          <div className="hidden xl:flex relative">
            <HeroImage
              imgSrc="/about/photography.svg"
              containerStyles="w-[550px] h-[475px] bg-no-repeat relative bg-bottom"
            />
          </div>
        </div>

        {/* BAdge */}
        <div className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
              {/* B1 */}
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-muted-foreground">
                  Years of Experience
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl ">
                  <Badge 
                  icon={<RiBook3Fill />}
                  endCountNum={12}
                  endCountText="+"
                  badgeText=''
                  />
                </dd>
              </div>
              {/* B2 */}
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-muted-foreground">
                  Project Work
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl ">
                  <Badge 
                  icon={<RiProjector2Fill />}
                  endCountNum={819}
                  endCountText="+"
                  badgeText=''
                  />
                </dd>
              </div>
              {/* B3 */}
              <div className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base leading-7 text-muted-foreground">
                  Followers
                </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl ">
                  <Badge 
                  icon={<RiUserFollowLine />}
                  endCountNum={12}
                  endCountText="M"
                  badgeText=''
                  />
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
