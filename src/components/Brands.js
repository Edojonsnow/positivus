import Image from "next/image";
import React from "react";

const Brands = () => {
  return (
    <div className=" grid grid-cols-3 gap-y-9 lg:flex mt-16 justify-between">
      <Image alt="brand-logo" src="/amazon.svg" width={120} height={48} />
      <Image alt="brand-logo" src="/dribble.svg" width={120} height={48} />
      <Image alt="brand-logo" src="/hubspot.svg" width={120} height={48} />
      <Image alt="brand-logo" src="/notion.svg" width={120} height={48} />
      <Image alt="brand-logo" src="/netflix.svg" width={120} height={48} />
      <Image alt="brand-logo" src="/zoom.svg" width={120} height={48} />
    </div>
  );
};

export default Brands;
