"use client";
import Form from "@/components/Form";
import React from "react";
import { Fade } from "react-awesome-reveal";

const Contact = () => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 mb-16 xl:mb-24">
          {/* LEFT */}
          <Fade direction="up" triggerOnce>
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
                <span className="w-[30px] h-[2px] bg-primary"></span>
                Hello
              </div>
              <h1 className="h1 max-w-md mb-8">Lets Work Together</h1>
              <p className="subtitle max-w-[400px]">
                Kami adalah tim profesional yang berdedikasi untuk memberikan layanan terbaik. 
                Dengan pengalaman bertahun-tahun, kami siap membantu Anda mencapai tujuan Anda 
                dengan solusi yang inovatif dan efektif.
              </p>
            </div>
          </Fade>

          {/* form */}
          <Fade direction="up" delay={200} triggerOnce>
            <div className="lg:mt-24">
              <Form />
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default Contact;