"use client";
import { FiArrowUpRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useEffect } from "react";

function HeroSection() {
  const handleScroll = (href: string) => {
    const section = href.substring(1);
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <div className="w-full min-h-screen flex items-center max-lg:flex-col max-lg:items-start px-10 max-lg:px-4 max-lg:py-10 relative overflow-hidden">
        {/* Left Section */}
        <div className="w-[50%] space-y-10 z-10 max-lg:w-full max-lg:space-y-10">
          <h1 className="text-7xl font-semibold max-lg:text-5xl">
            Trusted <span className="text-primary">Legal Guidance</span> For
            Your Future
          </h1>
          <p className="text-lg">
            Expert legal counsel and dedicated representation when <br /> you
            need it the most & attorneys offering committed support
          </p>
          <Button
            className="h-14 flex items-center max-lg:w-[80%] max-lg:h-16"
            onClick={() => handleScroll("#contact")}
          >
            Schedule a Consultation
            <FiArrowUpRight />
          </Button>
        </div>

        {/* Right Section */}
        <div className="relative w-[50%] z-50 max-lg:w-full max-lg:mt-10">
          <Image
            src={"/download1.png"}
            alt=""
            width={500}
            height={500}
            className="object-cover w-[500px] h-[500px] max-lg:h-[400px]"
          />
          <div className="">
            {/* Floating Tags */}
            <div className="absolute top-50 left-0 inline-flex items-center backdrop-blur-md bg-white/30 text-sm font-medium px-3 py-2 rounded-sm shadow-sm">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Personal Injury
            </div>
            <div className="absolute top-60 right-40 max-lg:top-30 max-lg:right-10 inline-flex items-center backdrop-blur-md bg-white/30 text-sm font-medium px-3 py-2 rounded-sm shadow-sm">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Family Law
            </div>
            <div className="absolute top-[400px] -left-10 max-lg:left-0 max-lg:top-90 inline-flex items-center backdrop-blur-md bg-white/30 text-sm font-medium px-3 py-2 rounded-sm shadow-sm">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Criminal Defense
            </div>
            <div className="absolute top-[380px] right-30 max-lg:right-10 max-lg:top-80 inline-flex items-center backdrop-blur-md bg-white/30 text-sm font-medium px-3 py-2 rounded-sm shadow-sm">
              <span className="w-2 h-2 bg-red-500 rounded-full mr-2"></span>
              Corporate Law
            </div>
          </div>
        </div>

        {/* Blob Background */}
        <div className="absolute -top-20 right-0 w-[700px] h-[700px] z-0 opacity-40 max-lg:hidden">
          <svg
            viewBox="0 0 200 200"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
          >
            <path
              fill="#f97316" // Tailwind's purple-600
              d="M43.4,-72.5C56.7,-66.4,68.3,-56.5,73.5,-44.2C78.7,-31.9,77.6,-17.2,75.4,-3.1C73.2,11,69.8,24.1,63.3,35.6C56.9,47.2,47.5,57.3,36.2,64.2C24.8,71.1,12.4,74.8,-0.6,76.1C-13.5,77.3,-27,76.1,-37.8,69.4C-48.6,62.6,-56.8,50.3,-61.6,37.4C-66.5,24.5,-67.9,11,-68.2,-3.6C-68.5,-18.3,-67.6,-34.1,-59.7,-45.2C-51.9,-56.2,-36.9,-62.4,-22.2,-67.3C-7.6,-72.1,6.7,-75.6,20.6,-75.5C34.5,-75.4,48.1,-71.7,43.4,-72.5Z"
              transform="translate(100 100)"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
