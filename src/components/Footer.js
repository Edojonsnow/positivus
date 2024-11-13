import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-36  bg-dark screen lg:rounded-tl-[45px] lg:rounded-tr-[45px]  pt-[55px] pb-[50px] px-[60px]">
      <div className="flex flex-col lg:flex-row justify-between items-center   ">
        <div className="flex  items-center  gap-2 ">
          <Image src="/whitelogo.svg" alt="logo" width={36} height={36} />
          <h2 className=" text-white">Posivitus</h2>
        </div>

        <div className="flex lg:flex-row flex-col text-white items-center gap-4 pt-9 lg:pt-0 lg:gap-10">
          <p className="lg:border-b">About Us</p>
          <p className="lg:border-b">Services</p>
          <p className="lg:border-b">Use Cases</p>
          <p className="lg:border-b">Pricing</p>
          <p className="lg:border-b">Blog</p>
        </div>
        <div className="lg:flex gap-5 hidden  ">
          <Image src="/linkedin.svg" width={30} height={30} alt="social icon" />
          <Image src="/facebook.svg" width={30} height={30} alt="social icon" />
          <Image src="/x.svg" width={30} height={30} alt="social icon" />
        </div>
      </div>

      <div className="text-white flex flex-col items-center lg:flex-row gap-9 lg:gap-[154px] mt-9 lg:mt-16">
        <div className="flex flex-col items-center lg:items-start  gap-7">
          <h4 className="bg-primary text-black rounded-[7px] px-1">
            Contact us:
          </h4>
          <div className="flex flex-col items-center lg:items-start gap-4 lg:gap-5">
            <p>Email: info@positivus.com</p>
            <p>Phone: 555-567-8901</p>
            <p className="text-center">
              Address: 1234 Main St <br /> Moonstone City, Stardust State 12345
            </p>
          </div>
        </div>
        <div className=" flex flex-col lg:flex-row gap-5 py-14 px-10 bg-[#292A32] h-fit  lg:w-[634px] rounded-[14px]">
          <div className=" border border-white w-[285px]  h-[69px] py-5 pl-8 rounded-[14px]">
            <p>Email</p>
          </div>
          <div className=" bg-primary text-center lg:text-left text-black w-[285px] h-[69px] py-5 lg:pl-8 rounded-[14px]">
            <p>Subscribe to News</p>
          </div>
        </div>
      </div>
      <hr className="border-white border-spacing-0.5 my-12" />
      <div className="flex lg:flex-row flex-col items-center  gap-10">
        <p className="text-white">© 2023 Positivus. All Rights Reserved.</p>
        <p className="text-white">Privacy Policy</p>
      </div>
    </div>
  );
};

export default Footer;
