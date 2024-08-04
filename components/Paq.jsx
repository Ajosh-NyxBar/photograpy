"use client";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Fade } from "react-awesome-reveal";

const Paq = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="w-full pt-12 mb-6 xl:mb-24">
          <Fade direction="up" cascade damping={0.1} triggerOnce>
            <h2 className="section-title mb-12 text-center mx-auto">
              FAQ
            </h2>
            <div>
              {/* ACORDION */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    <div className="ms-3">01. Apa nama Anda?</div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="ms-3">
                      Nama saya adalah John Doe.
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    <div className="ms-3">02. Apa pekerjaan Anda?</div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="ms-3">
                      Saya adalah seorang fotografer profesional.
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    <div className="ms-3">03. Di mana Anda tinggal?</div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="ms-3">
                      Saya tinggal di Jakarta, Indonesia.
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Paq;