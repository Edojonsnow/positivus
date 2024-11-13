import Image from "next/image";
import React from "react";

const TeamCard = ({ name, job, imagesrc, desc }) => {
  return (
    <div className="relative w-full lg:w-[387px] px-9 py-10 h-fit lg:h-[354px]  shadow-[0px_5px_1px_rgba(0,_0,_0,_1)] border border-black rounded-[45px]">
      <div className="flex items-end gap-5">
        <Image src={imagesrc} width={102} height={102} alt="team card" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p>{job}</p>
        </div>
      </div>
      <Image
        className="absolute top-10 right-9"
        src="/in.svg"
        width={34}
        height={34}
        alt="In icon"
      />
      <hr className="border-spacing-px border-black  my-7 " />

      <p>{desc}</p>
    </div>
  );
};

export default TeamCard;
