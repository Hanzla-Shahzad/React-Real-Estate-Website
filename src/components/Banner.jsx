import React, { useState } from "react";
import { MdRealEstateAgent } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
const Banner = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex items-center justify-around  p-4 w-full h-8 absolute top-2 left-0">
      <div>
        <h1 className=" flex items-center gap-0.5 text-white">
          <MdRealEstateAgent className="text-[20px]" />
          <span className="font-bold text-white text-[24px] ">Estate</span>
        </h1>
      </div>
      <div className="hidden md:inline">
        <ul className="flex items-center gap-4 text-white text-sm">
          <li className="hover:text-gray-500 transition-all duration-100 ease-in-out">
            <a href="">Home</a>
          </li>
          <li className="hover:text-gray-500 transition-all duration-100 ease-in-out">
            <a href="#About" className="scroll-smooth">
              About
            </a>
          </li>
          <li className="hover:text-gray-500 transition-all duration-100 ease-in-out">
            <a href="#Projects">Projects</a>
          </li>
          <li className="hover:text-gray-500 transition-all duration-100 ease-in-out">
            <a href="#Testimonials">Testimonials</a>
          </li>
        </ul>
      </div>
      <div>
        <button
          type="button"
          className="hidden md:inline px-5 py-1 text-center font-[sans-serif] bg-white rounded-[17px] hover:bg-gray-200 transition-all duration-100 ease-in-out cursor-pointer"
        >
          Sign Up
        </button>
        <div
          className={`${
            show ? "inline" : "hidden"
          } absolute left-1/2 top-12 py-2  transform -translate-x-1/2 rounded-sm mx-auto w-78 transition-all overflow-hidden bg-white md:hidden`}
        >
          <div>
            <button
              type="button"
              className="inline md:hidden float-end px-5 py-1 text-center font-[sans-serif] bg-white rounded-[17px] hover:bg-gray-200 transition-all duration-100 ease-in-out cursor-pointer"
              onClick={() => setShow(false)}
            >
              <IoClose />
            </button>
          </div>
          <ul className="flex flex-col items-center gap-4  text-sm relative left-7">
            <li className="hover:text-gray-500 transition-all duration-100 ease-in-out">
              <a href="#Home">Home</a>
            </li>
            <li className="hover:text-gray-500 transition-all duration-100 ease-in-out">
              <a href="#About">About</a>
            </li>
            <li className="hover:text-gray-500 transition-all duration-100 ease-in-out">
              <a href="#Projects">Projects</a>
            </li>
            <li className="hover:text-gray-500 transition-all duration-100 ease-in-out">
              <a href="#Testimonials">Testimonials</a>
            </li>
          </ul>
        </div>
        <button
          type="button"
          className="inline md:hidden ms-50 px-5 py-1 text-center font-[sans-serif] bg-white rounded-[17px] hover:bg-gray-200 transition-all duration-100 ease-in-out cursor-pointer"
          onClick={() => setShow(true)}
        >
          <FiAlignJustify />
        </button>
      </div>
    </div>
  );
};

export default Banner;
