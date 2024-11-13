import React from "react";

const Form = () => {
  return (
    <div className="relative">
      <form className="flex flex-col gap-8 ">
        <label className="flex flex-col mb-1 ">
          Name*
          <input
            type="text"
            name="name"
            placeholder="Name"
            className=" w-full h-14 lg:w-[556px] lg:h-[59px] mt-1 outline-none pl-5 px-1.5 border border-black rounded-[14px]"
          />
        </label>
        <label className="flex flex-col">
          Email*
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full h-14 lg:w-[556px] lg:h-[59px] mt-1 outline-none pl-5 py-1.5 border border-black rounded-[14px]"
          />
        </label>
        <label className="flex flex-col">
          Message*
          <textarea
            type="tel"
            name="phone"
            placeholder="Message"
            className=" w-full h-32 lg:w-[556px] lg:h-[190px] mt-1 border outline-none pl-5 pt-5  block  border-black rounded-[14px]"
          />
        </label>
        <input
          className=" hidden lg:block  button lg:w-[556px] bg-black text-white"
          type="submit"
          value="Send Message"
        />
      </form>
    </div>
  );
};

export default Form;
