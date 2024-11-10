import Brands from "@/components/Brands";
import CaseStudies from "@/components/CaseStudies";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Services from "@/components/Services";
import WorkingProcess from "@/components/WorkingProcess";
import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-24 pt-[60px]">
      <Nav />
      <Hero />
      <Brands />
      <Services />
      <CaseStudies />
      <WorkingProcess />
    </div>
  );
}
