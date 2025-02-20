import React from "react";
import { IconArrowUpRight, IconBadge4k } from "@tabler/icons-react";
import ProcessCard from "./ProcessCard";

const WorkingProcess = () => {
  return (
    <div className="mt-[60px] lg:mt-36">
      <div className="flex  flex-col gap-7 lg:flex-row items-center  lg:gap-10 mb-10 lg:mb-20">
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className=" hidden lg:block bg-primary px-[7px] text-center w-fit lg:text-h2 font-semibold rounded-md mx-auto lg:mx-0 "
        >
          Our Working Process
        </h2>

        <div className="lg:hidden">
          <h2 className="bg-primary px-[7px] text-center w-fit lg:text-h2 font-semibold rounded-md mx-auto lg:mx-0 ">
            Our Working
          </h2>
          <h2 className="bg-primary px-[7px] text-center w-fit lg:text-h2 font-semibold rounded-md mx-auto lg:mx-0 ">
            Process
          </h2>
        </div>

        <p
          data-aos="fade-left"
          data-aos-delay="250"
          className="w-full text-center sm:text-left   lg:w-[580px] lg:text-p"
        >
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      <div className="flex flex-col  gap-7">
        <ProcessCard delay="200" index="01" title="Consultation" />
        <ProcessCard
          delay="300"
          index="02"
          title="Research and Strategy Development"
        />
        <ProcessCard delay="400" index="03" title="Implementation" />
        <ProcessCard
          delay="500"
          index="04"
          title="Monitoring and Optimization"
        />
        <ProcessCard
          delay="600"
          index="05"
          title="Reporting and Communication"
        />
        <ProcessCard delay="700" index="06" title="Continual Improvement" />
      </div>
    </div>
  );
};

export default WorkingProcess;
