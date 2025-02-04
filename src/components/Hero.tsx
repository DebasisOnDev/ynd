"use client";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import HeaderStyleWrapper from "./HeaderStyleWrapper";

const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.25], [1, 0]);
  const translateY = useTransform(scrollYProgress, [0, 0.35], [0, -200]);
  const borderRadius = useTransform(scrollYProgress, [0.15, 0.65], [95, 0]);
  const height = useTransform(scrollYProgress, [0.15, 0.7], [350, 550]);
  const padding = useTransform(scrollYProgress, [0.15, 0.6], [32, 0]);

  return (
    <div
      ref={targetRef}
      className="min-h-screen border-b border-black/15 text-black w-full relative"
    >
      <motion.div
        ref={targetRef}
        style={{
          opacity,
          scale,
          translateY,
          transformOrigin: "top center",
        }}
        transition={{
          opacity: { duration: 0.8, ease: "easeOut" },
        }}
        className="px-4 py-2 w-full md:h-[400px] flex items-center"
      >
        <span className="font-semibold md:text-[33px] text-start text-text-pm">
          Scale your software development project with <br /> a world-class
          engineering team, on demand.
        </span>
      </motion.div>

      <div className=" py-2 space-x-1.5 h-[52%] w-full">
        <motion.div
          style={{
            opacity,
            scale,
            translateY,
            transformOrigin: "top center",
          }}
          className="grid-cols-4 grid"
        >
          <span className="text-end md:px-12 py-1.5 col-span-2 font-normal text-neutral-800 text-[13px]">
            Scroll down to find out what we can do for you!
          </span>
        </motion.div>

        <HeaderStyleWrapper
          style={{
            background: "backdrop-blur-md",
            textColor: "text-white",
            buttonBg: "bg-white",
          }}
        >
          <motion.div className="relative w-full h-full">
            <motion.video
              autoPlay
              muted
              loop
              playsInline
              src="coding.mp4"
              className="px-4 py-2 object-cover w-full md:h-[350px]"
              style={{ borderRadius, height, padding }}
            />
            <span className="absolute bottom-16 left-16 text-white-pm font-[520] text-[33px] z-10">
              We specialize in custom software
              <br /> development, end-to-end.
            </span>
          </motion.div>
        </HeaderStyleWrapper>
      </div>
    </div>
  );
};

export default Hero;
