import React from "react";

const TestimonialCard = () => {
  return (
    <div className="mx-auto w-[330px] lg:w-[606px] px-3 lg:px-6 ">
      <div className=" flex flex-col ">
        <div className="bubble speech flex justify-center  items-center h-[302px] lg:h-[237px] rounded-[45px] text-white   ">
          <p className=" w-[270px] lg:w-[502px]  text-left">
            "We have been working with Positivus for the past year and have seen
            a significant increase in website traffic and leads as a result of
            their efforts. The team is professional, responsive, and truly cares
            about the success of our business. We highly recommend Positivus to
            any company looking to grow their online presence."
          </p>
        </div>

        <div className="flex flex-col pt-10 pl-12 lg:pl-20">
          <h4 className="text-primary">John Smith</h4>
          <p className="text-white">Managing director as XYZ Corp</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
