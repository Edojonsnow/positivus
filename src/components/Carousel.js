import React from "react";
import TestimonialCard from "./TestimonialCard";
import useEmblaCarousel from "embla-carousel-react";
import { DotButton, useDotButton } from "./CarouselDots";
import { PrevButton, NextButton, usePrevNextButtons } from "./CarouselArrows";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";

const Carousel = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);
  return (
    <div className=" h-[625px]">
      <div className="    px-5 flex flex-col    gap-14 lg:gap-32  pt-20 overflow-hidden h-full  bg-dark rounded-[45px]">
        <div className="embla__viewport   " ref={emblaRef}>
          <div className="embla__container flex  ">
            {slides.map((index) => (
              <div className="embla__slide" key={index}>
                <TestimonialCard />
              </div>
            ))}
          </div>
        </div>

        <div className="embla__controls  mx-auto">
          <div className="embla__buttons flex justify-between w-fit items-center gap-12  lg:gap-48">
            <IconArrowLeft
              className={` text-white`}
              onClick={onPrevButtonClick}
              disabled={prevBtnDisabled}
            />
            <div className="embla__dots flex lg:w-40  gap-4">
              {scrollSnaps.map((_, index) => (
                <DotButton
                  key={index}
                  onClick={() => onDotButtonClick(index)}
                  imagesrc={
                    index === selectedIndex ? "/greenstar.svg" : "/star.svg"
                  }
                />
              ))}
            </div>
            <IconArrowRight
              className={` text-white`}
              onClick={onNextButtonClick}
              disabled={nextBtnDisabled}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
