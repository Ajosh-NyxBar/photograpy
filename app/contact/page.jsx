import Form from "@/components/Form";
import React from "react";

const Contact = () => {
  return (
    <section className="min-h-screen">
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 mb-16 xl:mb-24">
          {/* LEFT */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Hello
            </div>
            <h1 className="h1 max-w-md mb-8">Lets Work Together</h1>
            <p className="subtitle max-w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque necessitatibus, perspiciatis facere quia quam adipisci
              fuga nesciunt dolorum atque fugiat impedit, nostrum voluptatum?
              Laboriosam aliquam, ab odit eius maxime illo?
            </p>
          </div>

          {/* form */}
          <div className="lg:mt-24">
            <Form />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
