"use client";

import { CircleGauge, SwatchBook, TabletSmartphone, Users } from "lucide-react";
import { useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import HoverButton from "./HoverButton";

const ServiceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

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

  const services = [
    {
      icon: <CircleGauge className="w-8 h-8" />,
      title: "Product Design",
      description:
        "Our team manages the entire product design, from ideation to refining each detail, with both development and user feedback in mind.",
    },
    {
      icon: <SwatchBook className="w-8 h-8" />,
      title: "Web Development",
      description:
        "With years of expertise, we've developed applications and systems for leading brands, reaching millions of users and addressing their needs.",
    },
    {
      icon: <TabletSmartphone className="w-8 h-8" />,
      title: "Mobile Development",
      description:
        "We support companies in offering outstanding mobile experiences across platforms and devices, enhancing customer connections.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Team Extension",
      description:
        "Based on your needs and project status, we assemble a skilled team to tackle the challenges you're currently facing.",
    },
  ];

  return (
    <div ref={ref} className="flex flex-col gap-20 min-h-screen w-full py-24">
      <div className="h-full px-4 py-2 grid gap-8 grid-cols-1 md:grid-cols-5">
        <div className="font-[520] text-[22px] text-text-pm row-span-1 h-auto">
          What we do?
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="col-span-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={childVariants}
                className="flex flex-col gap-8 hover:cursor-pointer font-[520] text-text-pm hover:text-green-500 row-span-1 h-auto"
              >
                <div className="flex flex-col gap-4 p-2">
                  {service.icon}
                  <span className="text-[22px]">{service.title}</span>
                </div>
                <div className="font-[520] text-[22px]">
                  {service.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="w-full">
        <div className="max-w-3xl flex items-center justify-end gap-8">
          <HoverButton className="hover:cursor-pointer hover:bg-emerald-400">
            See our services
          </HoverButton>
          <HoverButton className="hover:cursor-pointer hover:bg-emerald-400">
            Estimate your project!
          </HoverButton>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
