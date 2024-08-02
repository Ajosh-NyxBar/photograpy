"use client";

import { Button } from "@/components/ui/button";
import { ToastAction } from "@/components/ui/toast";
import { toast, useToast } from "@/components/ui/use-toast";
import { CheckIcon } from "lucide-react";
import React from "react";
import { Fade } from "react-awesome-reveal";

const inc = [
  "Fotografi Profesional",
  "Portofolio Menarik",
  "Kustomisasi Penuh",
  "Plugin Gratis",
];
const Services = () => {
  const { toast } = useToast();
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <Fade direction="up" delay={200} cascade damping={0.1} triggerOnce>
          <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
            My Pricing
          </h2>

          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Memories Worth Love Cherishing
            </h2>
            <p className="mt-6 text-lg leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum quia
              aut nesciunt quae odit unde molestias, reiciendis dolores hic.
              Eveniet, in officia similique ex sint rem ut vitae? Numquam,
              obcaecati!
            </p>
          </div>
        </Fade>

        {/* Price */}
        <Fade direction="up" delay={400} cascade damping={0.1} triggerOnce>
          <div
            className="mx-auto mt-16 max-w-2xl ring-1 ring-gray-200 rounded-3xl sm:mt-20 lg:mx-0 lg:flex
          lg:max-w-none mb-16"
          >
            {/* Left */}
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight">
                Life Time Access
              </h3>
              <p className="mt-6 text-base leading-7">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, et aut perspiciatis nesciunt minima doloribus.
                Neque iure quidem amet veritatis ut, perferendis fugit molestiae
                ex modi eligendi eveniet vero exercitationem!
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-primary">
                  What's included
                </h4>
                <div className="h-px flex-auto bg-primary"></div>
              </div>

              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {inc.map((item, index) => (
                  <li key={index} className="flex text-muted-foreground gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-primary"
                      aria-hidden="true"
                    />{" "}
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT */}
            <div className="-mt-4 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="h-full bg-tertiary py-10 rounded-2xl text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8 dark:text-black">
                  <p className="text-base font-semibold">
                    Pay once, own it forever
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight">Rp.</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide">
                      199.000
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide">
                      ,00
                    </span>
                  </p>

                  <Button
                    className="gap-x-2 mt-3"
                    onClick={() => {
                      toast({
                        title: "Pembelian Berhasil",
                        description: "Pembelian berhasil dilakukan",
                        action: (
                          <ToastAction altText="Goto schedule">
                            Go to schedule
                          </ToastAction>
                        ),
                      });
                    }}
                  >
                    Purchase
                  </Button>
                  <p className="text-sm text-muted-foreground mt-6 leading-5">
                    Invoice will be sent to your email
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Services;