import BrandSection from "@/components/BrandSection";
import CurvedFooter from "@/components/CurvedFooter";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ImgSection from "@/components/ImgSection";
import ServiceSection from "@/components/ServiceSection";
import Showcase from "@/components/Showcase";
import Testimonials from "@/components/Testimonials";
import React from "react";
import { HeaderContextProvider } from "@/context/header-context";

const HomeSweetHome = () => {
  return (
    <HeaderContextProvider>
      <div className=" bg-sitebg min-h-screen w-full">
        <Header />
        <Hero />
        <ServiceSection />
        <Showcase />
        <ImgSection />
        <BrandSection />
        <Testimonials />
        <CurvedFooter />
      </div>
    </HeaderContextProvider>
  );
};

export default HomeSweetHome;
