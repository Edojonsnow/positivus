"use client";
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
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true });
  });
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
