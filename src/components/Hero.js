import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col  lg:flex-row justify-between mt-10 lg:mt-16">
      <div className="flex flex-col gap-9">
        <h1 className=" font-semibold lg:text-[60px] w-full  lg:w-[531px]">
          Navigating the digital landscape for success
        </h1>

        <div className=" block lg:hidden  relative w-full h-[310px]">
          <Image
            className="object-contain"
            src="/hero-image.png"
            fill
            alt="hero-image"
          />
        </div>
        <p className="lg:text-lg   sm:text-sm  w-full lg:w-[498px]">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button className="button w-full lg:w-[264px] bg-black text-white">
          Book a consultation
        </button>
      </div>

      <div className="hidden lg:block relative w-[600px]">
        <Image
          className="object-contain"
          src="/hero-image.png"
          fill
          alt="hero-image"
        />
      </div>
    </div>
  );
};

export default Hero;
