import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-between mt-16">
      <div className="flex flex-col gap-9">
        <h1 className="w-[531px]">
          Navigating the digital landscape for success
        </h1>
        <p className="w-[498px]">
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <button className="button bg-black text-white">
          Book a consultation
        </button>
      </div>

      <div className="relative w-[600px]">
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
