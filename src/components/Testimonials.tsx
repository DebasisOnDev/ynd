/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import HeaderStyleWrapper from "./HeaderStyleWrapper";

interface Testimonial {
  img: string;
  content: string;
  name: string;
  position: string;
  company: string;
}

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const testimonials = [
    {
      img: "/per1.jpg",
      content:
        "The most impressive thing about them is how they share our vision and are so invested in our work. They poured their hearts and minds into designing a good setup and taking the right measures. They didn't do this for us — we did it together!",
      name: "Christian Scheper-Stuke",
      position: "Senior Business Development Manager",
      company: "orderbird",
    },
    {
      img: "/per2.jpg",
      content:
        "They were hands-on and solution-oriented — it was easy to work with them. They helped us find what was best for us and worked with us to solve any problem through a good solution.",
      name: "Malte Fiedler",
      position: "Malte Fiedler",
      company: "Burger King Deutschland",
    },
    {
      img: "/per3.jpg",
      content:
        "YND has delivered phenomenal work. On top of being extraordinary in their technical skills, they're also exceptional in their collaborative mindset. They brought the client into their development process and maintained transparent lines of communication. They're a skilled team and a true partner.",
      name: "Suzy Fereira",
      position: "CEO",
      company: "Dinie.com",
    },
    {
      img: "/per4.jpg",
      content:
        "YND has an excellent ability to translate complex tech challenges into simple solutions. They bring high-level expertise to the table. They are a great tech partner for those who want to innovate.",
      name: "Malte Schoenfeld",
      position: "Venture Developer",
      company: "Audi Denkwerkstatt",
    },
    {
      img: "/per5.jpg",
      content:
        "With exceptional project management skills and technical expertise, YND produced an impressive, turnkey MVP solution. They offered value beyond their delivering the product, educating their client along the way. Their contribution was invaluable.",
      name: "Ludovic Ciannarella",
      position: "CEO",
      company: "AirPlus International",
    },
  ];

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex + newDirection + testimonials.length) % testimonials.length
    );
  };

  const TestimonialContent = ({
    testimonial,
  }: {
    testimonial: Testimonial;
  }) => (
    <div className="w-full">
      <div className="flex justify-between transition-all duration-300 ease-in-out items-start gap-16">
        <div className=" w-full ">
          <p className="text-[33px] font-[520] text-left max-w-3xl text-text-pm  leading-tight mb-8">
            {testimonial.content}
          </p>
        </div>
        <div className="w-[300px] pl-3.5 flex-shrink-0">
          <div className="relative">
            <div className="aspect-w-1 flex flex-col gap-2 aspect-h-1 ml-2  overflow-hidden rounded-b-full">
              <img
                src={testimonial.img}
                alt={testimonial.name}
                className="w-full h-[300px]  object-cover"
              />
            </div>
            <div className="  text-[13px] flex items-center justify-center  font-medium text-text-pm py-2.5">
              <p className=" text-center max-w-52 flex-wrap">
                {testimonial.name},{testimonial.position},{testimonial.company},
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <HeaderStyleWrapper
      style={{
        background: "bg-emerald-400",
        textColor: "text-text-pm",
        buttonBg: "bg-emerald-400 border-l border-b border-black",
      }}
    >
      <div className="min-h-screen bg-emerald-400 flex items-center justify-center ">
        <div className=" px-2 w-full relative">
          <h2 className="text-[33px] font-[520] px-2 mb-16 text-black">
            What our clients say
          </h2>

          <div className="relative px-2 h-[400px]">
            <div className="absolute w-full">
              <TestimonialContent testimonial={testimonials[currentIndex]} />
            </div>
          </div>

          <div className="absolute  right-0.5 top-0 flex gap-4">
            <button
              onClick={() => paginate(-1)}
              className="p-4  text-white text-center flex items-center justify-center w-32 h-28 bg-transparent hover:bg-text-pm transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => paginate(1)}
              className="p-4  text-white text-center flex items-center justify-center w-32 h-28 bg-transparent hover:bg-text-pm transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </HeaderStyleWrapper>
  );
};

export default Testimonials;
