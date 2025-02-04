/* eslint-disable @next/next/no-img-element */
"use client";
import { useEffect, useState } from "react";

const ImgCardOne = ({ images }: { images: string[] }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full h-full flex items-center duration-300 transition-all ease-in-out justify-center overflow-hidden">
      <div className="relative group w-[70%] h-full flex items-center justify-center">
        {images?.map((img, i) => (
          <div
            key={i}
            className={`absolute transition-all duration-300 ease-in-out
              ${
                i === 2
                  ? "-translate-x-[42%] group-hover:-translate-x-[45%] group-hover:rotate-x-12 transition-all  rotate-x-3 scale-90  z-0"
                  : i === 0
                  ? "z-10"
                  : "translate-x-[42%] group-hover:translate-x-[45%] transition-all group-hover:rotate-x-12 rotate-x-3 scale-90  z-0"
              }
            `}
          >
            <div className="relative border-[6px] ring ring-white-pm/70 border-gray-200/20 rounded-[2rem] overflow-hidden shadow-xl">
              <img
                src={`/${img}`}
                alt={`Image ${i + 1}`}
                className="object-contain w-auto h-[450px] rounded-[2rem]"
                style={{
                  maxHeight: "calc(100vh - 200px)",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgCardOne;
