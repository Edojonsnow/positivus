"use client";
import React, { useState } from "react";
import { Radio } from "@material-tailwind/react";
import Form from "./Form";
import Image from "next/image";

const Contact = () => {
  const [selected, setSelected] = useState("");
  return (
    <div>
      <div
        data-aos="fade-up"
        data-aos-delay="350"
        className="mt-[60px] lg:mt-36"
      >
        <div className="flex  flex-col gap-7 lg:flex-row items-center  lg:gap-10 mb-10 lg:mb-20">
          <h2
            data-aos="fade-up"
            data-aos-delay="200"
            className="bg-primary px-[7px] lg:text-h2 font-semibold rounded-md mx-auto lg:mx-0 "
          >
            Contact Us
          </h2>
          <p
            data-aos="fade-left"
            data-aos-delay="250"
            className="w-full text-center sm:text-left   lg:w-[580px] lg:text-p"
          >
            Connect with Us: Let's Discuss Your Digital Marketing Needs
          </p>
        </div>

        <div className="h-fit w-full flex justify-between    items-center gap-[200px] rounded-[45px] bg-bright">
          <div className="flex flex-col w-full gap-10 py-10 px-7 lg:pt-14 lg:pb-20 lg:pl-24">
            <div className="">
              <div className="flex  items-center h-8  gap-9">
                <div className="flex items-center  gap-5  cursor-pointer">
                  <div
                    className="relative w-4 h-4"
                    onClick={() => setSelected("option1")}
                  >
                    <div className="absolute  w-7 h-7 border rounded-full border-black"></div>
                    {selected === "option1" && (
                      <div className="absolute w-4 h-4 transform translate-x-1.5 translate-y-1.5 bg-primary rounded-full"></div>
                    )}
                  </div>
                  <p className="text-gray-700 pt-2">Say Hi</p>
                </div>

                <div className="flex items-center  gap-5 cursor-pointer">
                  <div
                    className="relative w-5 h-5"
                    onClick={() => setSelected("option2")}
                  >
                    <div className="absolute w-7 h-7 border rounded-full border-black"></div>
                    {selected === "option2" && (
                      <div className="absolute w-4 h-4 transform translate-x-1.5 translate-y-1.5 bg-primary rounded-full"></div>
                    )}
                  </div>
                  <span className="text-gray-700 pt-2">Get a Quote</span>
                </div>
              </div>
            </div>

            <Form />
          </div>
          <Image
            data-aos="fade-left"
            data-aos-delay="400"
            className="hidden lg:block"
            src="/contact-image.svg"
            alt="contact"
            width={691.57}
            height={648}
          />
        </div>
      </div>
      <input
        className=" lg:hidden w-full mt-7  button lg:w-[556px] bg-black text-white"
        type="submit"
        value="Send Message"
      />
    </div>
  );
};

export default Contact;
