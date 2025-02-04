"use client";
import { useHeaderContext } from "@/context/header-context";

import Link from "next/link";
import React, { useEffect, useRef } from "react";

const Header = () => {
  const links = [
    "Home",
    "Services",
    "About us",
    "Case Studies",
    "Careers",
    "Blog",
  ];

  const { setHeaderStyle, headerStyle } = useHeaderContext();

  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const checkHeaderPosition = () => {
      if (headerRef.current) {
        const headerRect = headerRef.current.getBoundingClientRect();
        const styledSections = document.querySelectorAll("[data-header-style]");

        let isIntersecting = false;
        styledSections.forEach((section) => {
          const sectionRect = section.getBoundingClientRect();
          if (
            headerRect.bottom >= sectionRect.top + 10 &&
            headerRect.top + 50 <= sectionRect.bottom
          ) {
            isIntersecting = true;
          }
        });

        if (!isIntersecting) {
          setHeaderStyle({
            background: "text-sitebg",
            textColor: "text-text-pm",
            buttonBg: "bg-white",
          });
        }
      }
    };

    window.addEventListener("scroll", checkHeaderPosition);
    checkHeaderPosition();
    return () => window.removeEventListener("scroll", checkHeaderPosition);
  }, [setHeaderStyle]);

  return (
    <header
      ref={headerRef}
      className="   z-20 h-12 w-full sticky top-0 left-0 "
    >
      <div className=" grid md:grid-cols-5 grid-cols-2  h-full grid-rows-1">
        <div
          className={` ${headerStyle.textColor} ${headerStyle.background}  col-span-1  h-full px-3 py-2`}
        >
          <Link
            href={"#"}
            className="  transition-all h-full w-full flex items-center justify-start "
          >
            <span className="hover:text-green-600 text-[22px] font-aeonic font-bold">
              YND
            </span>
          </Link>
        </div>
        <div
          className={`${headerStyle.textColor} ${headerStyle.background}   hidden md:flex md:col-span-3 items-center justify-start text-[13px]  gap-6 font-light h-full `}
        >
          {links.map((item) => (
            <Link
              key={item}
              href={"#"}
              className={` ${
                item === "Home"
                  ? " underline underline-offset-4  "
                  : "  hover:text-green-600 transition duration-100"
              }`}
            >
              {item}
            </Link>
          ))}
        </div>
        <div
          className={`${headerStyle.buttonBg} col-span-1 md:flex text-text-pm md:items-center md:justify-center hidden px-3 py-2 hover:bg-hover-pm transition text-center h-full `}
        >
          <Link
            href={"#"}
            className=" w-full h-full text-center flex items-center justify-center text-[13px] font-light"
          >
            {" "}
            Contact us
          </Link>
        </div>
        <div className=" col-span-1 md:hidden block  h-full ">Contact us</div>
      </div>
    </header>
  );
};

export default Header;
