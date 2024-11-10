import Image from "next/image";
import React from "react";

const ServiceCard = ({
  background,
  titleBG,
  text,
  title,
  subtitle,
  imageSrc,
}) => {
  const backgrounds = {
    primary: "bg-primary",
    bright: "bg-bright",
    dark: "bg-dark",
    white: "bg-white",
  };
  const titleBackgrounds = {
    primary: "bg-primary",
    white: "bg-white",
  };
  const textColor = {
    black: "text-black",
    white: "text-white",
  };

  return (
    <div
      className={` ${backgrounds[background]} shadow-[0px_5px_1px_rgba(0,_0,_0,_1)]  w-[600px] flex items-center justify-between p-12 border border-black rounded-[45px] h-[310px]`}
    >
      <div className="flex flex-col w-[221px] h-[210px] gap-24">
        <div>
          <h3
            className={` ${titleBackgrounds[titleBG]} w-fit  px-[6px] rounded-md`}
          >
            {title}
          </h3>
          <h3
            className={` ${titleBackgrounds[titleBG]} w-fit  px-[6px] rounded-md`}
          >
            {subtitle}
          </h3>
        </div>
        <div className="flex items-center gap-4">
          <Image src="/greenarrow.svg" alt="arrow" width={41} height={41} />
          <p className={` ${textColor[text]} `}>Learn more</p>
        </div>
      </div>
      <div>
        <Image src={imageSrc} alt="arrow" width={210} height={170} />
      </div>
    </div>
  );
};

export default ServiceCard;
