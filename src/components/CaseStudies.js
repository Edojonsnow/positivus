import React from "react";
import { IconArrowUpRight, IconBadge4k } from "@tabler/icons-react";
import CaseStudyCard from "./CaseStudyCard";
const CaseStudies = () => {
  return (
    <div className="mt-[60px] lg:mt-36">
      <div className="flex  flex-col gap-7 lg:flex-row items-center  lg:gap-10 mb-10 lg:mb-20">
        <h2 className="bg-primary px-[7px] lg:text-h2 font-semibold rounded-md mx-auto lg:mx-0 ">
          Case Studies
        </h2>
        <p className=" w-full text-center sm:text-left   lg:w-[580px] lg:text-p">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <div className=" hidden lg:flex bg-dark rounded-[45px]  justify-evenly items-center w-full  h-[347px]">
        <div className=" flex flex-col gap-5 border-r pr-16 pb-5">
          <p className="w-[286px] text-lg text-white ">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>

          <p className=" flex items-center text-primary">
            Learn more
            <span>
              <IconArrowUpRight stroke={2} className="text-primary" />
            </span>
          </p>
        </div>
        <div className=" flex flex-col gap-5 border-r pr-16 pb-5">
          <p className="w-[286px] text-lg text-white ">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <p className=" flex items-center text-primary">
            Learn more
            <span>
              <IconArrowUpRight stroke={2} className="text-primary" />
            </span>
          </p>
        </div>
        <div className=" flex flex-col gap-5   pb-5">
          <p className="w-[286px] text-lg text-white ">
            For a local restaurant, we implemented a targeted PPC campaign that
            resulted in a 50% increase in website traffic and a 25% increase in
            sales.
          </p>
          <p className=" flex items-center text-primary">
            Learn more
            <span>
              <IconArrowUpRight stroke={2} className="text-primary" />
            </span>
          </p>
        </div>
      </div>

      <CaseStudyCard />
    </div>
  );
};

export default CaseStudies;
