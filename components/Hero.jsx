import React from "react";

const Hero = () => {
  return (
    <section className="py-12 xl:py-24 h-[auto] bg-bottom">
      <div className="container mx-auto">
        <div className="flex justify-between gap-x-8">
          {/* Left side */}
          <div className="flex max-w-[800px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
            <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">PHOTOGRAPHY</div>
            <h1 className="h1 uppercase">Lets make magic</h1>
            <p className="subtitle max-w-[590px] mt-4 mx-auto xl:mx-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              nostrum laudantium laboriosam est autem assumenda. Alias sapiente
              distinctio quidem quae numquam delectus deleniti perferendis
              temporibus molestias fugit iure, iste inventore.
            </p>
          </div>
          {/* Banner Img */}
          <div className="hidden xl:flex relative">Banner</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;