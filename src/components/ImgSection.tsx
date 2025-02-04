"use client";
import Image from "next/image";
import React, { useRef } from "react";
import HeaderStyleWrapper from "./HeaderStyleWrapper";
import { motion, useScroll, useTransform } from "framer-motion";

const ImgSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.3, 1]);

  return (
    <HeaderStyleWrapper
      style={{
        background: "backdrop-blur-md",
        textColor: "text-white",
        buttonBg: "bg-white",
      }}
    >
      <div
        ref={ref}
        className="relative w-full h-[50vh] md:h-[75vh] overflow-hidden"
      >
        <motion.div
          style={{
            scale,
            transformOrigin: "center center",
          }}
          className="w-full h-full"
        >
          <Image
            alt="Image"
            src="/img.jpg"
            fill
            sizes="100vw"
            priority
            className="object-cover grayscale-100"
          />
        </motion.div>
      </div>
    </HeaderStyleWrapper>
  );
};

export default ImgSection;
