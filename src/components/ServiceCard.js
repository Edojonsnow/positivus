import Image from "next/image";
import React from "react";

const ServiceCard = ({
  background,
  titleBG,
  text,
  title,
  subtitle,
  imageSrc,
  arrow,
  delay,
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
      data-aos="fade-up"
      data-aos-delay={delay}
      className={` ${backgrounds[background]} relative shadow-[0px_5px_1px_rgba(0,_0,_0,_1)]  w-full h-fit lg:w-[600px] flex items-center justify-between p-12 border border-black rounded-[45px] lg:h-[310px]`}
    >
      <div className="flex flex-col w-[221px] h-[210px] gap-24">
        <div>
          <h3
            data-aos="fade-in"
            data-aos-delay="100"
            className={` ${titleBackgrounds[titleBG]} lg:text-h3 w-fit  px-[6px] rounded-md`}
          >
            {title}
          </h3>
          <h3
            data-aos="fade-in"
            data-aos-delay="150"
            className={` ${titleBackgrounds[titleBG]} lg:text-h3 w-fit  px-[6px] rounded-md`}
          >
            {subtitle}
          </h3>
        </div>
        <div
          data-aos="fade-in"
          data-aos-delay="200"
          className="flex items-center gap-4"
        >
          <Image src={arrow} alt="arrow" width={41} height={41} />
          <p className={` ${textColor[text]} hidden lg:block `}>Learn more</p>
        </div>
      </div>
      <div
        data-aos="fade-in"
        data-aos-delay="200"
        className="absolute bottom-11 right-11 w-[165px] h-[129px] lg:w-[210px] lg:h-[170px] "
      >
        <Image src={imageSrc} alt="image" fill />
      </div>
    </div>
  );
};

export default ServiceCard;
