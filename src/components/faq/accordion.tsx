"use client";

import { useState } from "react";

interface AccordionProps {
  title: string;
  answer: string;
}

function Accordion({ title, answer }: AccordionProps) {
  const [accordionOpen, setAccordionOpen] = useState<boolean>(false);
  return (
    <div className="bg-[#0F0F0F] rounded-[12px] px-[16px] py-[20px] lg:px-[20px] lg:py-[24px] space-y-[8px]">
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex w-full justify-between"
      >
        <span className="max-md:w-[90%] font-semibold text-[18px] lg:text-[20px] leading-[120%] -tracking-[3%] text-start">{title}</span>
        {accordionOpen ? (
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M23.3337 14H4.66699"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        ) : (
          <svg
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.0003 5.16699V23.8337M23.3337 14.5003H4.66699"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        )}
      </button>
      <div
        className={`grid overflow-hidden transition-all duration-300 ease-in-out
                ${
                  accordionOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }
                `}
      >
        <div className="overflow-hidden font-normal text-[16px] lg:text-[20px] lg:leading-[28px] -tracking-[2%] text-[#EAECF0]">{answer}</div>
      </div>
    </div>
  );
}

export default Accordion;
