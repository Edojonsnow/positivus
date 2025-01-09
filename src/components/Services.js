import React from "react";
import ServiceCard from "./ServiceCard";
import Image from "next/image";

const Services = () => {
  return (
    <div className="mt-36">
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        className="flex  flex-col gap-7 lg:flex-row items-center  lg:gap-10 mb-10 lg:mb-20"
      >
        <h2 className="bg-primary px-[7px] lg:text-h2 font-semibold rounded-md mx-auto lg:mx-0 ">
          Services
        </h2>
        <p className=" w-full text-center sm:text-left   lg:w-[580px] lg:text-p">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-10">
        <ServiceCard
          background="bright"
          titleBG="primary"
          imageSrc="/engine.svg"
          title="Search engine"
          subtitle="optimization"
          arrow="/greenarrow.svg"
          delay=""
        />
        <ServiceCard
          background="primary"
          titleBG="white"
          imageSrc="/payperclick.svg"
          title="Pay-per-click"
          subtitle="advertising"
          arrow="/greenarrow.svg"
        />
        <ServiceCard
          background="dark"
          titleBG="white"
          imageSrc="/smm.svg"
          title="Social Media "
          subtitle="Marketing"
          text="white"
          arrow="/whitearrow.svg"
        />
        <ServiceCard
          background="bright"
          titleBG="primary"
          imageSrc="/em.svg"
          title="Email"
          subtitle="Marketing"
          arrow="/greenarrow.svg"
        />
        <ServiceCard
          background="primary"
          titleBG="white"
          imageSrc="/copy.svg"
          title="Content"
          subtitle="Creation"
          arrow="/greenarrow.svg"
        />
        <ServiceCard
          background="dark"
          titleBG="white"
          imageSrc="/payperclick.svg"
          title="Analytics and"
          subtitle="Tracking"
          text="white"
          arrow="/whitearrow.svg"
        />
      </div>

      <div
        data-aos="fade-right"
        data-aos-delay="300"
        className="bg-bright p-11 h-fit lg:p-0 rounded-[45px] flex justify-evenly items-center w-full mt-24 lg:h-[347px]"
      >
        <div
          data-aos="fade-in"
          data-aos-delay="300"
          className=" flex w-full  lg:w-[500px] flex-col gap-8"
        >
          <h3
            data-aos="fade-right"
            data-aos-delay="400"
            className="font-semibold"
          >
            Let&apos;s make things happen
          </h3>
          <p data-aos="fade-right" data-aos-delay="500" className="lg:text-p">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <button
            data-aos="fade-right"
            data-aos-delay="600"
            className="button mx-auto lg:mx-0 bg-black w-[264px] text-white"
          >
            Get your free proposal
          </button>
        </div>
        <div
          data-aos="fade-left"
          data-aos-delay="400"
          className="hidden lg:block"
        >
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
