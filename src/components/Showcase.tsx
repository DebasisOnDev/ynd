"use client";
import { useRef, useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import ImgCardOne from "./ImgCardOne";
import ImgCardTwo from "./ImgCardTwo";
import ImgCardThree from "./ImgCardThree";
import HeaderStyleWrapper from "./HeaderStyleWrapper";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";

const items = [
  {
    id: 1,
    title: "Job well done:",
    subtitle: "IWC Schaffhausen",
    description:
      "We partnered with IWC Schaffhausen and Scholz & Friends to create a one-of-a-kind luxury watches experience.",
    images: ["p1.jpg", "p2.jpg", "p3.jpg"],
  },
  {
    id: 2,
    title: "Case study:",
    subtitle: "Bidfood Farutex",
    description:
      "During our long-term partnership we've built an extensive, custom tailored solution for HORECA e-commerce.",
    images: ["b1.png", "b2.png", "b3.png"],
  },
  {
    id: 3,
    title: "Case study:",
    subtitle: "Maximum versatility for Orderbird MINI",
    description:
      "How we created a standalone mobile android version of orderbird's successful POS product from the scratch.",
    images: ["g1.png", "g2.png", "g3.jpg"],
  },
];

const Showcase = () => {
  const [activeItem, setActiveItem] = useState(items[0]);
  const target = useRef(null);
  const { scrollYProgress } = useScroll({
    target: target,
    offset: ["start start", "end start"],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 25]);

  const handleNext = () => {
    setActiveItem(items[(activeItem.id % items.length) + 1 - 1]);
  };
  const handlePrev = () => {
    setActiveItem(items[(activeItem.id - 2 + items.length) % items.length]);
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } },
  };

  return (
    <div className="min-h-screen bg-text-pm text-sitebg px-4 py-14 w-full">
      <HeaderStyleWrapper
        style={{
          background: "backdrop-blur-md",
          textColor: "text-white",
          buttonBg: "bg-white",
        }}
      >
        <div className="grid md:grid-cols-5 h-[550px] w-full">
          <div className="font-medium col-span-1 p-2 text-[15px]">
            Our work speaks best for itself!
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              ref={target}
              style={{ rotateX: rotate }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="col-span-2 p-2  relative perspective-1000"
            >
              {activeItem.id === 1 && <ImgCardOne images={activeItem.images} />}
              {activeItem.id === 2 && <ImgCardTwo images={activeItem.images} />}
              {activeItem.id === 3 && (
                <ImgCardThree images={activeItem.images} />
              )}{" "}
            </motion.div>
          </AnimatePresence>

          <div className="font-medium flex flex-col items-start justify-between p-2 gap-10 col-span-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeItem.id}
                variants={contentVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="space-y-2"
              >
                <h3 className="text-[15px] text-text-specific">
                  {activeItem.title}
                </h3>
                <h2 className="text-[20px]">{activeItem.subtitle}</h2>
                <span className="text-[20px]">{activeItem.description}</span>
              </motion.div>
            </AnimatePresence>

            <button className="group px-6 py-2.5 rounded-full border border-white text-white bg-black hover:bg-emerald-400 hover:text-black hover:border-emerald-500 flex items-center gap-2 transition-all duration-300">
              Show more
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
          <div className="col-span-1 flex items-center justify-between flex-col p-4">
            <motion.button
              whileHover={{ scale: 1.05, transition: { ease: "easeInOut" } }}
              onClick={handleNext}
              className="px-6 py-2 rounded-full hover:px-9 hover:bg-hover-pm hover:text-text-pm"
            >
              <ArrowRight />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, transition: { ease: "easeInOut" } }}
              onClick={handlePrev}
              className="px-6 py-2 rounded-full hover:px-9 hover:bg-hover-pm hover:text-text-pm"
            >
              <ArrowLeft />
            </motion.button>
          </div>
        </div>
      </HeaderStyleWrapper>
    </div>
  );
};

export default Showcase;
