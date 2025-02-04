"use client";

import { useEffect, useRef, type RefObject } from "react";
import { useHeaderContext } from "@/context/header-context";

interface StyleChangeProps {
  background: string;
  textColor: string;
  buttonBg: string;
}

export const useHeaderStyleChange = (
  style: StyleChangeProps
): RefObject<HTMLDivElement> => {
  const ref = useRef<HTMLDivElement>(null);
  const { setHeaderStyle } = useHeaderContext();

  useEffect(() => {
    const header = document.querySelector("header");
    if (!header || !ref.current) return;

    const checkIntersection = () => {
      const headerRect = header.getBoundingClientRect();
      const elementRect = ref.current!.getBoundingClientRect();

      if (
        headerRect.bottom >= elementRect.top &&
        headerRect.top <= elementRect.bottom
      ) {
        setHeaderStyle(style);
      }
    };

    window.addEventListener("scroll", checkIntersection);
    checkIntersection();

    return () => window.removeEventListener("scroll", checkIntersection);
  }, [style, setHeaderStyle]);

  return ref as RefObject<HTMLDivElement>;
};
