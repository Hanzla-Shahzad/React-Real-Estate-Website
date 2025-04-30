import React from "react";
import { MdRealEstateAgent } from "react-icons/md";

const Footer = () => {
  return (
    <>
      <div className="bg-black text-white h-auto  px-20 pt-5 mt-8">
        <div className="flex flex-col md:flex-row justify-around gap-10">
          <div>
            <p className="flex items-center gap-1 text-lg">
              {" "}
              <MdRealEstateAgent className="text-blue-600 text-lg" />
              Estate
            </p>
            <p className="text-sm mt-2 text-gray-400 font-[sans-serif] w-60">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Praesentium, voluptate rerum! Voluptatum laborum magnam officia
              odio repellat recusandae at earum.
            </p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-bold text-sm font-[sans-serif]">Company</p>
            <p className="text-sm text-gray-400 font-[sans-serif]">Home</p>
            <p className="text-sm text-gray-400 font-[sans-serif]">About Us </p>
            <p className="text-sm text-gray-400 font-[sans-serif]">
              Contact Us
            </p>
            <p className="text-sm text-gray-400 font-[sans-serif]">
              Privacy Policy
            </p>
          </div>
          <div>
            <p className="font-bold font-[sans-serif] text-sm">
              Subscribe to our newsletter
            </p>
            <p className="mt-1 text-sm text-gray-400 font-[sans-serif]">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            </p>
            <input
              type="email"
              className="border-[0.5px] border-white w-56 h-8 px-2 mt-5"
              placeholder="Your Email"
            />{" "}
            <button className="inline px-4 py-1 bg-green-600 rounded-sm">
              Subscribe
            </button>
          </div>
        </div>
        <div className="text-center text-white mt-5">
          <p className="bg-gray-600 w-[80%] mx-auto h-[0.2px]"></p>
          <p className="text-sm text-gray-400 font-[sans-serif] mt-3">
            Coptyright 2025 @.Greatstack Allrights Reserved
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;
