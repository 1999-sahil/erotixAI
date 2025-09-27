"use client";

import { motion, AnimatePresence } from "motion/react";

import { useEffect, useState } from "react";
import PrimaryBtn from "../primaryBtn";
import Secondary from "../../assets/testimonial2.jpg";

type Testimonial = {
  quote: string;
  name: string;
  src: string;
};

function Carousal({
  testimonials,
  autoplay = false,
}: {
  testimonials: Testimonial[];
  autoplay?: boolean;
}) {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 5000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div className="flex flex-col lg:flex-row gap-[20px] lg:gap-[24px]">
      {/** image */}
      <div className="relative hidden lg:block w-full lg:h-[428px] lg:w-[283px] rounded-[24px] border border-[#2F2F2F]">
        <AnimatePresence>
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.src}
              initial={{
                opacity: 0,
                scale: 0.9,
                z: -100,
                rotate: randomRotateY(),
              }}
              animate={{
                opacity: isActive(index) ? 1 : 0.01,
                scale: isActive(index) ? 1 : 0.8,
                z: isActive(index) ? 0 : -100,
                rotate: isActive(index) ? 0 : randomRotateY(),
                zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
                y: isActive(index) ? [0, -80, 0] : 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.9,
                z: 100,
                rotate: randomRotateY(),
              }}
              transition={{
                duration: 0.4,
                ease: "easeInOut",
              }}
              className="absolute inset-0 origin-bottom"
            >
              <img
                src={testimonial.src}
                alt={testimonial.name}
                draggable={false}
                className="h-full w-full object-cover object-center rounded-[24px]"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/** quote */}
      <div className="relative w-full lg:w-[550px] h-[300px] lg:h-[428px] rounded-[24px] border border-[#2F2F2F] bg-[#0F0F0F] p-[24px] lg:p-[32px]">
        <motion.div
          key={active}
          initial={{
            y: 20,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}
          exit={{
            y: -20,
            opacity: 0,
          }}
          transition={{
            duration: 0.2,
            ease: "easeInOut",
          }}
        >
          <div className="w-fit rounded-full p-[8px] lg:p-[12px] bg-[#EE46BC1A]">
            <h3 className="font-normal text-[12px] lg:text-[16px] leading-[22px] -tracking-[0.18px] text-primary">
              3 months AI Companion
            </h3>
          </div>
          <div className="absolute bottom-[24px] lg:bottom-[32px] space-y-[14px] lg:space-y-[24px]">
            <span className="">
              <svg
                width="33"
                height="29"
                className="max-md:w-[12px] max-md:h-[12px]"
                viewBox="0 0 33 29"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.125 16.875L7.75 0.499994H14.125L8.875 15.5H13.375V28.75H0.125V16.875ZM18.625 16.875L26.25 0.499994H32.625L27.375 15.5H31.875V28.75H18.625V16.875Z"
                  fill="white"
                />
              </svg>
            </span>

            <motion.p className="mt-[14px] lg:mt-[24px] font-semibold text-[18px] lg:text-[24px] leading-[120%] -tracking-[3%]">
              {testimonials[active].quote.split(" ").map((word, index) => (
                <motion.span
                  key={index}
                  initial={{
                    filter: "blur(10px)",
                    opacity: 0,
                    y: 5,
                  }}
                  animate={{
                    filter: "blur(0px)",
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    duration: 0.2,
                    ease: "easeInOut",
                    delay: 0.02 * index,
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
            <h3 className="font-normal text-[14px] lg:text-[16px] leading-[22px] -tracking-[0.18px]">
              - {testimonials[active].name}
            </h3>
          </div>
        </motion.div>
      </div>

      {/** secondary image and btn */}
      <div className="flex flex-col justify-between">
        <div className="hidden lg:block relative">
          <div className="w-full lg:w-[300px] h-[200px] lg:h-[250px]">
            <img
              src={Secondary}
              alt="secondary"
              className="w-full h-full opacity-60 object-cover object-center rounded-[24px]"
            />
          </div>
          <div className="absolute top-0 flex flex-col justify-between h-full p-[32px]">
            <h3 className="font-semibold text-[24px] leading-[120%] -tracking-[3%]">
              Complete Surrender
            </h3>
            <span>
              <p className="text-[16px] font-normal leading-[22px] -tracking-[0.18px]">
                Clareance b.
              </p>
              <p className="text-[14px] font-normal leading-[20px] -tracking-[0.05px] text-primary">
                3 months AI Companion
              </p>
            </span>
          </div>
        </div>
        <PrimaryBtn text="Get Started Now" href="" />
        {/** buttons */}
        <div className="flex justify-end gap-4 pt-12 md:pt-0">
          <button
            onClick={handlePrev}
            className="group/button flex items-center justify-center cursor-pointer p-1 rounded-full border bg-white border-[#D0D5DD]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 12H4M4 12L10 18M4 12L10 6"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="group/button flex items-center justify-center cursor-pointer p-1 rounded-full border bg-white border-[#D0D5DD]"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 12H20M20 12L14 6M20 12L14 18"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Carousal;
