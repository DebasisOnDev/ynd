"use client";

import Image from "next/image";

const ImgCardThree = ({ images }: { images: string[] }) => {
  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden py-20">
      <div className="relative w-[90%] md:w-[80%] h-full flex items-center justify-center">
        {images?.map((img, i) => (
          <div
            key={i}
            className="absolute transition-all flex items-center justify-center duration-500 ease-in-out"
            style={{
              zIndex: i === 2 ? 10 : i === 0 ? 30 : 20,
              transform:
                i === 2
                  ? "translate(0%, 0%) scale(0.75)"
                  : i === 0
                  ? "translate(45%, -10%) translateX(10%) scale(1)"
                  : "translate(55%, 10%) translateX(15%) scale(0.95)",
              width: i === 2 ? "100%" : "auto",
            }}
          >
            <div
              className={`relative flex items-center justify-center rounded-[2.5rem] overflow-hidden 
                ${i === 2 ? "w-full" : "w-auto"}
                transition-all duration-300 ease-in-out
                ${
                  i === 2
                    ? "hover:-translate-x-[25%]"
                    : i === 1
                    ? " "
                    : "hover:-translate-x-[35%]"
                }
                border-[6px] ring ring-white-pm/70 border-gray-200/20`}
            >
              <Image
                src={`/${img}`}
                alt={`Interface preview ${i + 1}`}
                width={i === 2 ? 800 : 350}
                height={i === 2 ? 400 : 450}
                className={`object-cover rounded-[2.3rem] ${
                  i === 2 ? "w-full h-[350px]" : "w-auto h-[400px]"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImgCardThree;
