import { ArrowRight, CornerRightUp } from "lucide-react";
import Link from "next/link";
import React from "react";
import HeaderStyleWrapper from "./HeaderStyleWrapper";

const CurvedFooter = () => {
  return (
    <div className="  pt-[90px] min-h-screen ">
      <div className=" grid grid-cols-5 grid-flow-row h-full ">
        <div className=" h-full w-full col-span-4 ">
          <div className=" h-[250px] w-full flex gap-1 ">
            <span className=" text-[22px] px-4 flex items-center justify-start w-[50%] font-medium max-w-xl text-left text-text-pm">
              Work with our experienced team to develop a customized software
              solution tailor made for your business needs
            </span>
            <button className=" h-full transition-all duration-300 flex items-center justify-around p-3 text-[20px] gap-16 text-text-pm border group border-black rounded-r-full rounded-tl-full hover:rounded-l-full hover:rounded-br-full hover:rounded-tr-none bg-white hover:bg-hover-pm  w-[50%] ">
              <span>Contact</span>{" "}
              <ArrowRight className=" w-12 group-hover:w-16 group-hover:-rotate-45" />
            </button>
          </div>
          <HeaderStyleWrapper
            style={{
              background: "bg-[#0A0A0A]",
              textColor: "text-white",
              buttonBg: "bg-white",
            }}
          >
            <div className=" p-8  h-screen  bg-[#0A0A0A] w-full  grid grid-cols-4 grid-rows-2 gap-8">
              <div className="text-left mt-8 text-sitebg text-sm  w-full h-full">
                YND Technologies Sp. z o.o.
                <br /> ©2023
              </div>
              <div className="w-full text-sm text-sitebg  mt-8  space-x-4 flex flex-col  text-left h-full">
                <Link className=" hover:text-hover-pm" href={"#"}>
                  Terms & Conditions
                </Link>
                <Link className=" hover:text-hover-pm" href={"#"}>
                  Privacy Policy
                </Link>
              </div>
              <div className="w-full h-full  mt-8 text-sitebg text-sm ">
                <div className="flex items-center gap-2 mb-2">
                  <span>Warsaw</span>
                  <span className="px-2 py-1 text-xs rounded-full border border-sitebg ">
                    PL
                  </span>
                </div>
                <div className="text-left text-sm text-sitebg  space-y-1">
                  <div>
                    00-533
                    <br /> Mokotowska 63
                  </div>
                  <Link
                    href={"mailto:warsaw@ynd.co"}
                    className="block  hover:text-hover-pm"
                  >
                    warsaw@ynd.co
                  </Link>
                </div>
              </div>
              <div className="w-full h-full text-sitebg   mt-8">
                <div className="flex  items-center gap-2 mb-2">
                  <span>Berlin</span>
                  <span className="px-2 py-1 text-xs rounded-full border border-sitebg ">
                    DE
                  </span>
                </div>
                <div className="text-left text-sm space-y-1">
                  <div>
                    10405
                    <br /> Kollwitzstraße 46
                  </div>
                  <Link
                    href={"mailto:berlin@ynd.co"}
                    className="block  hover:text-hover-pm"
                  >
                    berlin@ynd.co
                  </Link>
                </div>
              </div>
              <div className="w-full h-full">
                <span className="block mb-4 text-lg text-text-specific ">
                  Site:
                </span>
                <div className="flex flex-col space-y-2">
                  {[
                    "Home",
                    "Services",
                    "About us",
                    "Case Studies",
                    "Careers",
                    "Blog",
                    "Contact",
                  ].map((item, index) => (
                    <Link
                      key={index}
                      href="#"
                      className={` ${
                        item === "Home" ? "text-text-specific  " : "text-white"
                      } " hover:text-hover-pm text-[22px] font-medium"`}
                    >
                      {item}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="w-full h-full">
                <span className="block mb-4 text-lg text-text-specific">
                  Social:
                </span>
                <div className="flex flex-col text-[22px] font-medium space-y-2">
                  {["Linkedin", "Behance", "Clutch", "Twitter"].map(
                    (item, index) => (
                      <Link
                        key={index}
                        href="#"
                        className="flex items-center gap-2  hover:text-hover-pm group"
                      >
                        {item}
                        <CornerRightUp className="w-0 h-4 transition-all duration-300 group-hover:w-4 opacity-0 group-hover:opacity-100" />
                      </Link>
                    )
                  )}
                </div>
              </div>
              <div className="w-full h-full"></div>
              <div className="w-full h-full"></div>
            </div>
          </HeaderStyleWrapper>
        </div>
        <div className=" col-span-1 bg-[#0A0A0A]">
          <div className=" w-full h-full rounded-bl-full bg-sitebg"></div>
        </div>
      </div>
    </div>
  );
};

export default CurvedFooter;
