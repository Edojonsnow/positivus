import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between items-center  ">
      <div className="flex relative lg:w-[219px] lg:h-[36px] w-[144px] h-[23.61px] items-center  gap-2 ">
        <Image src="/Logo.svg" alt="logo" fill />
      </div>

      <div>
        <Image src="/burger.svg" alt="logo" width={24} height={16} />
      </div>

      <div className="hidden  lg:flex items-center gap-10">
        <p>About Us</p>
        <p>Services</p>
        <p>Use Cases</p>
        <p>Pricing</p>
        <p>Blog</p>
        <div className="button ">Request a quote</div>
      </div>
    </div>
  );
};

export default Nav;
