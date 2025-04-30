import React from "react";
import Banner from "./Banner";

const Header = () => {
  return (
    <>
      <div className="text-center flex items-center justify-center  relative w-full h-[560px] bg-cover bg-center bg-no-repeat bg-[url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?cs=srgb&dl=pexels-binyaminmellish-1396122.jpg&fm=jpg')]">
        <p className="bg-black h-[560px] w-full absolute top-0 opacity-[0.5] overflow-hidden"></p>
        <p className="text-white text-4xl font-bold absolute">
          Explore homes that fit your dreams
        </p>
        <div className="absolute flex gap-4 mt-48 sm:mt-42 md:mt-26">
          <button className="border border-white px-4 rounded-xs text-white py-1">
            Projects
          </button>
          <button className="bg-blue-600 rounded-xs text-white px-4 py-1">
            <a href="#Contact">Contact Us</a>
          </button>
        </div>
      </div>
      <Banner />
    </>
  );
};

export default Header;
