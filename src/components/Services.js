import React from "react";
import ServiceCard from "./ServiceCard";
import Image from "next/image";

const Services = () => {
  return (
    <div className="mt-36">
      <div className="flex items-center gap-10 mb-20">
        <h2 className="bg-primary px-[7px] rounded-md">Services</h2>
        <p className="w-[580px] text-lg">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="grid grid-cols-2 gap-x-10 gap-y-10">
        <ServiceCard
          background="bright"
          titleBG="primary"
          imageSrc="/engine.svg"
          title="Search engine"
          subtitle="optimization"
        />
        <ServiceCard
          background="primary"
          titleBG="white"
          imageSrc="/payperclick.svg"
          title="Pay-per-click"
          subtitle="advertising"
        />
        <ServiceCard
          background="dark"
          titleBG="white"
          imageSrc="/smm.svg"
          title="Social Media "
          subtitle="Marketing"
          text="white"
        />
        <ServiceCard
          background="bright"
          titleBG="primary"
          imageSrc="/em.svg"
          title="Email"
          subtitle="Marketing"
        />
        <ServiceCard
          background="primary"
          titleBG="white"
          imageSrc="/copy.svg"
          title="Content"
          subtitle="Creation"
        />
        <ServiceCard
          background="dark"
          titleBG="white"
          imageSrc="/payperclick.svg"
          title="Analytics and"
          subtitle="Tracking"
          text="white"
        />
      </div>

      <div className="bg-bright rounded-[45px] flex justify-evenly items-center w-full mt-24 h-[347px]">
        <div className=" flex  w-[500px] flex-col gap-8">
          <h3>Let's make things happen</h3>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button className="button bg-black text-white">
            Get your free proposal
          </button>
        </div>
        <div>
          <Image
            src="/proposal.svg"
            width={359}
            height={394}
            alt="proposal pic"
          />
        </div>
      </div>
    </div>
  );
};

export default Services;
