"use client";
import React, { useCallback, useState } from "react";

import Carousel from "./Carousel";

const Testimonials = (props) => {
  const OPTIONS = { loop: true };
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

  return (
    <div className="mt-[60px] lg:mt-36">
      <div className="flex  flex-col gap-7 lg:flex-row items-center  lg:gap-10 mb-10 lg:mb-20">
        <h2 className="bg-primary px-[7px] lg:text-h2 font-semibold rounded-md mx-auto lg:mx-0 ">
          Testimonials
        </h2>
        <p className="w-full text-center sm:text-left   lg:w-[580px] lg:text-p">
          Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
          about Our Digital Marketing Services
        </p>
      </div>

      <Carousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
};

export default Testimonials;
