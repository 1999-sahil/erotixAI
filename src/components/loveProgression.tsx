"use client";

import { useState } from "react";
import SectionSubheading from "./sectionSubheading";
import progression1 from "../assets/progression1.svg";
import { progress } from "../constant/loveProgression";
import { motion } from "motion/react";

function LoveProgression() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <div className="my-[40px] lg:my-[60px]" >
      {/** heading and desc */}
      <div className="flex flex-col items-start lg:items-center justify-center w-full gap-2">
        <SectionSubheading subheading="Love That Evolves" />
        <h2 className="text-[26px] lg:text-[44px] font-semibold leading-[120%] -tracking-[3%]">
          Your Passion Progression
        </h2>
        <p className="max-w-[680px] text-start lg:text-center text-[16px] lg:text-[20px] leading-[28px] -tracking-[2%]">
          Every conversation deepens your connection, making each encounter more
          exciting and intimate than the last.
        </p>
      </div>

      {/** progression */}
      <div className="flex flex-col-reverse lg:flex-row gap-8 lg:justify-between lg:gap-16 mt-10 lg:mt-16">
        <div className="border rounded-[24px] border-[#2F2F2F] p-6 w-full h-[300px] lg:w-1/2 lg:h-[450px]">
          <motion.img
            key={active}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 2,
              ease: [0.25, 0.1, 0.25, 1],
              
            }}
            src={progress[active!]?.mainSvg || progression1} 
            alt={progress[active!]?.title || "love progression"}
            className="w-full h-full object-fill"
          />
        </div>

        <div className="">
          {progress.map((pro, idx) => (
            <div
              key={pro.title}
              onClick={() => setActive(idx)}
              className={`flex cursor-pointer rounded-md transition-colors ${
                active === idx ? "bg-[#0F0F0F]" : "bg-transparent"
              }`}
            >
              {/* Border left indicator */}
              <div
                className={`w-[4px] transition-colors ${
                  active === idx ? "bg-primary" : "bg-[#EAECF0]"
                }`}
              />

              {/* Content */}
              <div className="flex-1 pl-4 py-3 pr-3">
                <div className="flex items-center justify-between">
                  <span className="text-[16px] lg:text-[24px] leading-[120%] -tracking-[3%] font-semibold flex items-center gap-2">
                    <img
                      src={pro.svg}
                      alt="progression"
                      className="w-8 h-8 lg:w-10 lg:h-10"
                    />
                    {pro.title}
                  </span>
                  <span className="w-fit font-semibold text-[28px] lg:text-[36px] leading-[120%] -tracking-[3%] text-[#475467]">
                    {pro.index}
                  </span>
                </div>
                <p className="font-normal text-[14px] lg:text-[18px] leading-[24px] -tracking-[0.26px] text-[#EAECF0]">
                  {pro.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LoveProgression;
