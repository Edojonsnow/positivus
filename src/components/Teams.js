import React from "react";
import TeamCard from "./TeamCard";

const Teams = () => {
  return (
    <div className="mt-[60px] lg:mt-36">
      <div className="flex  flex-col gap-7 lg:flex-row items-center  lg:gap-10 mb-10 lg:mb-20">
        <h2
          data-aos="fade-up"
          data-aos-delay="200"
          className="bg-primary px-[7px] lg:text-h2 font-semibold rounded-md mx-auto lg:mx-0 "
        >
          Team
        </h2>
        <p
          data-aos="fade-left"
          data-aos-delay="250"
          className="w-full text-center sm:text-left   lg:w-[580px] lg:text-p"
        >
          Meet the skilled and experienced team behind our successful digital
          marketing strategies
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-y-10 place-items-center ">
        <TeamCard
          name="John Smith"
          job="CEO and Founder"
          imagesrc="/team1.svg"
          desc="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
          delay="100"
        />
        <TeamCard
          name="Jane Doe"
          job="Director of Operations"
          imagesrc="/team2.svg"
          desc="7+ years of experience in project management and team leadership. Strong organizational and communication skills"
          delay="200"
        />
        <TeamCard
          name="Michael Brown"
          job="Senior SEO Specialist"
          imagesrc="/team3.svg"
          desc="5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization"
          delay="300"
        />
        <TeamCard
          name="Emily Johnson"
          job="PPC Manager"
          imagesrc="/team4.svg"
          desc="10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy"
          delay="400"
        />
        <TeamCard
          name="Brian Williams"
          job="Social Media Specialist"
          imagesrc="/team5.svg"
          desc="4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement"
          delay="500"
        />
        <TeamCard
          name="Sarah Kim"
          job="Content Creator"
          imagesrc="/team6.svg"
          desc="2+ years of experience in writing and editing
          Skilled in creating compelling, SEO-optimized content for various industries"
          delay="600"
        />
      </div>
      <div className="flex justify-end ">
        <button className="button mt-10 lg:w-[269px] w-full  bg-black text-white right-0">
          See all team
        </button>
      </div>
    </div>
  );
};

export default Teams;
