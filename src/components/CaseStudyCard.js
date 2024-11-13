import { IconArrowUpRight } from "@tabler/icons-react";
import React from "react";

const CaseStudyCard = () => {
  return (
    <div className="py-10 lg:hidden px-12 bg-dark rounded-[45px]">
      <div className=" flex flex-col gap-5  ">
        <p className="w-full h-fit  text-white ">
          For a local restaurant, we implemented a targeted PPC campaign that
          resulted in a 50% increase in website traffic and a 25% increase in
          sales.
        </p>
        <p className="text-p flex items-center text-primary">
          Learn more
          <span>
            <IconArrowUpRight stroke={2} size={32} className="text-primary" />
          </span>
        </p>
      </div>
    </div>
  );
};

export default CaseStudyCard;
