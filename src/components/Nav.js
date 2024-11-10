import Image from "next/image";
import React from "react";

const Nav = () => {
  return (
    <div className="flex justify-between items-center  ">
      <div className="flex items-center  ">
        <Image src="/Icon.svg" alt="logo" width={36} height={36} />
        <h2 className=" font-spg">Posivitus</h2>
      </div>

      <div className="flex items-center gap-10">
        <p>About Us</p>
        <p>Services</p>
        <p>Use Cases</p>
        <p>Pricing</p>
        <p>Blog</p>
        <div className="button">Request a quote</div>
      </div>
    </div>
  );
};

export default Nav;
