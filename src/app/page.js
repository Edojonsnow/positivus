import Brands from "@/components/Brands";
import CaseStudies from "@/components/CaseStudies";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import Services from "@/components/Services";
import Teams from "@/components/Teams";
import Testimonials from "@/components/Testimonials";
import WorkingProcess from "@/components/WorkingProcess";
import Image from "next/image";

export default function Home() {
  return (
    <div className=" overflow-x-hidden  pt-[60px]">
      <div className="mx-5  lg:mx-24  ">
        <Nav />
        <Hero />
        <Brands />
        <Services />
        <CaseStudies />
        <WorkingProcess />
        <Teams />
        <Testimonials />
        <Contact />
      </div>
      <div className=" lg:mx-24 ">
        <Footer />
      </div>
    </div>
  );
}
