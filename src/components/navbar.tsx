"use client";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { navLinks } from "../constant/navLinks";
import Logo from "./logo";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <nav
      style={{
        borderBottom: "1px dashed",
        borderImage:
          "repeating-linear-gradient(to right, #2F2F2F 0 5px, transparent 5px 10px) 1",
      }}
      className="flex items-center justify-between px-[20px] py-[16px] md:px-[120px] md:py-[24px] border-b border-dashed border-[#2F2F2F]"
    >
      {/** logo and links */}
      <div className="flex items-center gap-[72px]">
        <Logo />
        <div className="hidden md:flex gap-[24px]">
          {navLinks.map((link, index) => (
            <NavLink
              to={link.href}
              key={link.href}
              className={({ isActive }) =>
                `text-white text-center font-redhat text-[16px] font-medium leading-[22px] -tracking-[0.18px] transition
             ${isActive ? "text-[#FAA7E0]" : "hover:text-[#FAA7E0]"}`
              }
              end={index === 0} // makes "Home" active by default when at "/"
            >
              {link.title}
            </NavLink>
          ))}
        </div>
      </div>

      {/** buttons */}
      <div className="w-[300px] h-[48px] gap-[12px] hidden md:flex items-center">
        <button className="w-[181px] border rounded-[12px] px-[20px] py-[13px] text-center whitespace-nowrap bg-white border-[#EAECF0] font-redhat font-medium text-[16px] leading-[22px] -tracking-[0.18px] text-black cursor-pointer hover:text-[#121212] hover:opacity-95 transition">
          Create free account
        </button>
        <button className="w-[107px] flex items-center gap-1 rounded-[12px] px-[20px] py-[13px] text-center whitespace-nowrap bg-[#EE46BC] font-redhat font-medium text-[16px] leading-[22px] -tracking-[0.18px] text-white cursor-pointer hover:bg-[#f94fc6] transition-colors">
          <svg
            width="16"
            height="18"
            viewBox="0 0 16 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.00004 11.5C5.35831 11.5 3.00904 12.7755 1.51337 14.755C1.19146 15.181 1.0305 15.394 1.03577 15.6819C1.03984 15.9043 1.17951 16.1849 1.35451 16.3222C1.58103 16.5 1.89493 16.5 2.52273 16.5H13.4773C14.1051 16.5 14.4191 16.5 14.6456 16.3222C14.8206 16.1849 14.9602 15.9043 14.9643 15.6819C14.9696 15.394 14.8086 15.181 14.4867 14.755C12.991 12.7755 10.6418 11.5 8.00004 11.5Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M8.00004 9C10.0711 9 11.75 7.32107 11.75 5.25C11.75 3.17893 10.0711 1.5 8.00004 1.5C5.92897 1.5 4.25004 3.17893 4.25004 5.25C4.25004 7.32107 5.92897 9 8.00004 9Z"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Login
        </button>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none cursor-pointer"
        >
          <div
            className="w-6 h-0.5 bg-[#EE46BC] mb-1 transition-all duration-300"
            style={{
              transform: isOpen ? "rotate(45deg) translateY(8px)" : "rotate(0)",
            }}
          ></div>
          <div
            className={`w-6 h-0.5 bg-[#EE46BC] mb-1 transition-all duration-300 ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          ></div>
          <div
            className="w-6 h-0.5 bg-[#EE46BC] transition-all duration-300"
            style={{
              transform: isOpen
                ? "rotate(-45deg) translateY(-8px)"
                : "rotate(0)",
            }}
          ></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-black min-h-screen flex flex-col items-center md:hidden shadow-md z-50 p-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-3 w-full text-start text-white font-redhat font-medium hover:text-[#EE46BC]"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </a>
          ))}
          <div className="w-full h-full flex flex-col rounded-[8px] bg-[#EE46Bc] font-redhat text-black p-2 mt-6">
            <span className="text-xs bg-black text-[#EE46BC] rounded-full px-2 py-1 w-fit">
              JOIN NOW
            </span>
            <h2>Create Your Account</h2>
            <button className="rounded-[8px] w-[98%] py-[6px] mt-5 mx-auto text-center whitespace-nowrap bg-white border-[#EAECF0] font-redhat font-medium text-[16px] leading-[22px] -tracking-[0.18px] text-black cursor-pointer hover:text-[#121212] hover:opacity-95 transition">
              Get started for free
            </button>
            <span className="text-center mb-2 mt-1">
              Already a member? <strong className="underline">Login</strong>
            </span>
            <p className="text-xs">*No credit card required</p>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
