"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";
import { motion, useScroll } from "framer-motion";

type ScrollContextType = {
  scrollYProgress: number;
  activeSection: string | null;
  setActiveSection: (section: string | null) => void;
};

const ScrollContext = createContext<ScrollContextType>({
  scrollYProgress: 0,
  activeSection: null,
  setActiveSection: () => {},
});

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const { scrollYProgress } = useScroll();

  return (
    <ScrollContext.Provider
      value={{
        scrollYProgress: scrollYProgress.get(),
        activeSection,
        setActiveSection,
      }}
    >
      {children}
    </ScrollContext.Provider>
  );
};

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollSection = ({
  children,
  id,
  className,
}: {
  children: ReactNode;
  id: string;
  className?: string;
}) => {
  const { setActiveSection } = useScrollContext();

  return (
    <motion.div
      id={id}
      className={className}
      onViewportEnter={() => setActiveSection(id)}
      onViewportLeave={() => setActiveSection(null)}
      viewport={{ amount: 0.95 }}
    >
      {children}
    </motion.div>
  );
};
