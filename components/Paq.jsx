import React from "react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const Paq = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="w-full pt-12 mb-6 xl:mb-24">
          <h2 className="section-title mb-12 text-center mx-auto">
            Our Studio
          </h2>
          <div>
            {/* ACORDION */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  <div className="ms-3">01. What is your name?</div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="ms-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Asperiores esse quo inventore assumenda incidunt non cum
                    voluptatibus doloribus quas aspernatur vitae eius saepe
                    voluptate, sit modi, totam facere. Qui, corrupti.
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  <div className="ms-3">01. What is your name?</div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="ms-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Asperiores esse quo inventore assumenda incidunt non cum
                    voluptatibus doloribus quas aspernatur vitae eius saepe
                    voluptate, sit modi, totam facere. Qui, corrupti.
                  </div>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  <div className="ms-3">01. What is your name?</div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="ms-3">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Asperiores esse quo inventore assumenda incidunt non cum
                    voluptatibus doloribus quas aspernatur vitae eius saepe
                    voluptate, sit modi, totam facere. Qui, corrupti.
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Paq;