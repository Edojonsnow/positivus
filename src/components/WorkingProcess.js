import React from "react";
import { IconArrowUpRight, IconBadge4k } from "@tabler/icons-react";
import ProcessCard from "./ProcessCard";

const WorkingProcess = () => {
  return (
    <div className="mt-36">
      <div className="flex items-center gap-10 mb-20">
        <h2 className="bg-primary px-[7px] w-fit rounded-md">
          Our Working Process
        </h2>
        <p className="w-[580px] text-lg">
          Step-by-Step Guide to Achieving Your Business Goals˜
        </p>
      </div>
      <div className="flex flex-col  gap-7">
        <ProcessCard />
        <ProcessCard />
        <ProcessCard />
        <ProcessCard />
        <ProcessCard />
      </div>
    </div>
  );
};

export default WorkingProcess;
