"use client";

import Image from "next/image";
import { useInView, motion, AnimatePresence } from "motion/react";
import { useRef } from "react";

const brandlist = [
  { logo: "/logo1.svg", name: "RBI / Burger King", year: "since 2018" },
  { logo: "/logo2.svg", name: "orderbird", year: "since 2015" },
  { logo: "/logo3.svg", name: "Volkswagen", year: "since 2019" },
  { logo: "/logo4.svg", name: "Simple System AG", year: "since 2021" },
  { logo: "/logo5.svg", name: "IWC Schaffhausen", year: "since 2020" },
  { logo: "/logo6.svg", name: "Bidfood Farutex", year: "since 2018" },
  { logo: "/logo7.svg", name: "Audi Denkwerkstatt", year: "since 2019" },
  { logo: "/logo8.svg", name: "Banxware", year: "2019 - 2021" },
  { logo: "/logo9.svg", name: "Lufthansa", year: "2016 - 2019" },
  { logo: "/logo10.svg", name: "KAYAK", year: "2016 - 2017" },
  { logo: "/logo11.svg", name: "St. Oberholz", year: "since 2019" },
  { logo: "/logo12.svg", name: "Trade Republic", year: "2021 - 2022" },
];

const BrandSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const variants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
        delayChildren: 0.2,

        ease: "easeInOut",
      },
    },
  };

  const childVariants = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };
  return (
    <div
      ref={ref}
      className="px-4 py-20 w-full min-h-screen grid grid-cols-5 grid-flow-row "
    >
      <div className="h-full w-auto col-span-1 flex items-start ">
        <h2 className="text-[32px] font-medium text-text-pm">
          Featured Clients
        </h2>
      </div>
      <div className="flex flex-col h-full w-auto col-span-4">
        <div
          style={{
            transform: isInView ? "none" : "translateY(120px)",
            opacity: isInView ? 1 : 0,
            transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.3s",
          }}
          className="w-full h-[220px] text-[33px] font-[520] text-text-pm text-left "
        >
          For over a decade, top-tier companies have <br /> entrusted us with
          the development of their <br /> digital products and services.
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid grid-cols-4 gap-x-24 gap-y-32 p-1 grid-rows-3 mt-20"
          >
            {brandlist.map((brand, i) => (
              <motion.div
                variants={childVariants}
                className="col-span-1 row-span-1 flex flex-col items-start justify-start group"
                key={i}
              >
                <div className="relative h-12 w-full mb-8">
                  <Image
                    src={brand.logo || "/placeholder.svg"}
                    alt={brand.name}
                    fill
                    className="object-contain object-left filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <div className="text-left">
                  <p className="text-[16px] text-gray-900 font-medium mb-1">
                    {brand.name}
                  </p>
                  <p className="text-[14px] text-gray-500">{brand.year}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="w-full h-[150px] flex items-start justify-start gap-4 pt-16">
          <button className="group px-6 py-2.5 rounded-full border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white flex items-center gap-2 transition-all duration-300">
            Read our client&apos;s success stories!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 transition-all duration-300 group-hover:w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>

          <button className="group px-6 py-2.5 rounded-full border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white flex items-center gap-2 transition-all duration-300">
            Become one of them!
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-4 h-4 transition-all duration-300 group-hover:w-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
