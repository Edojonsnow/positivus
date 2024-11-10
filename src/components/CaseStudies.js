import React from "react";
import { IconArrowUpRight, IconBadge4k } from "@tabler/icons-react";
const CaseStudies = () => {
  return (
    <div className="mt-36">
      <div className="flex items-center gap-10 mb-20">
        <h2 className="bg-primary px-[7px] w-fit rounded-md">Case Studies</h2>
        <p className="w-[580px] text-lg">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>

      <div className="bg-dark rounded-[45px] flex justify-evenly items-center w-full mt-24 h-[347px]">
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
    </div>
  );
};

export default CaseStudies;
