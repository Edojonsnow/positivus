"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProcessCard = ({ title, index }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`overflow-hidden cursor-pointer  shadow-[0px_5px_1px_rgba(0,_0,_0,_1)]  transition-all duration-500 ${
        isOpen ? "bg-bright" : "bg-primary"
      } flex flex-col rounded-[45px] p-7  lg:px-14 lg:py-10 border border-black" ${
        isOpen ? " h-[98px] lg:h-[159px]" : "h-[279px]"
      }`}
    >
      <div className="flex  justify-between items-center">
        <div className="flex gap-4 items-center">
          <h1 className="text-h3 lg:text-[60px] ">{index}</h1>
          <h3 className=" text-p lg:text-h3 w-[203px] lg:w-fit  ">{title}</h3>
        </div>

        <div className="relative w-[30px] h-[30px] lg:w-[58px] lg:h-[58px]">
          <Image
            src={isOpen ? "/plus.svg" : "/minus.svg"}
            alt="minus button"
            fill
          />
        </div>
      </div>

      <hr className="border-spacing-0.5 border-black bg-black my-7" />

      <p className=" text-sm lg:text-lg">
        During the initial consultation, we will discuss your business goals and
        objectives, target audience, and current marketing efforts. This will
        allow us to understand your needs and tailor our services to best fit
        your requirements.
      </p>
    </div>
  );
};

export default ProcessCard;
