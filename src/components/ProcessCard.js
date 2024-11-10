"use client";
import Image from "next/image";
import React, { useState } from "react";

const ProcessCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className={`overflow-hidden  shadow-[0px_5px_1px_rgba(0,_0,_0,_1)]  transition-all duration-500 ${
        isOpen ? "bg-bright" : "bg-primary"
      } flex flex-col rounded-[45px]  px-14 py-10 border border-black" ${
        isOpen ? "h-[159px]" : "h-[279px]"
      }`}
    >
      <div className="flex  justify-between items-center">
        <div className="flex gap-4 items-center">
          <h1>01</h1>
          <h3>Consultation</h3>
        </div>

        <Image
          src={isOpen ? "/plus.svg" : "/minus.svg"}
          alt="minus button"
          width={58}
          height={58}
        />
      </div>

      <hr className="border border-black bg-black my-7" />

      <p className="text-lg">
        During the initial consultation, we will discuss your business goals and
        objectives, target audience, and current marketing efforts. This will
        allow us to understand your needs and tailor our services to best fit
        your requirements.
      </p>
    </div>
  );
};

export default ProcessCard;
