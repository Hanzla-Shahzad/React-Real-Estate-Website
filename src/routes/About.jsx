import React from "react";

const About = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center mt-8"
        id="About"
      >
        <p>
          {" "}
          <span className="text-xl font-[sans-serif] font-extrabold">
            About
          </span>{" "}
          <span className="text-xl font-[sans-serif] underline">Our Brand</span>
        </p>
        <p>Passionate About Properties.Dedicated to your Vision</p>
      </div>
      <div className="flex flex-col items-center justify-center md:flex-row md:items-start gap-4 mt-5 px-4">
        <div>
          <img
            src="https://img.freepik.com/premium-vector/exterior-residential-house-front-view-vector-illustration_230920-3523.jpg?semt=ais_hybrid&w=740"
            className="size-96 bg-white"
            alt=""
          />
        </div>
        <div>
          <div className="grid grid-cols-2 gap-10 mt-5">
            <p>
              <span className="block font-bold text-xl font-[sans-serif]">
                10+
              </span>
              Years of Exellence
            </p>
            <p>
              <span className="block font-bold text-xl font-[sans-serif]">
                12+
              </span>
              Projects Completed
            </p>
            <p>
              <span className="block font-bold text-xl font-[sans-serif]">
                20+
              </span>
              Min. Sq. Fit. Delivered
            </p>
            <p>
              <span className="block font-bold text-xl font-[sans-serif]">
                25+
              </span>
              Ongoing Projects
            </p>
          </div>
          <div>
            <p className="w-110 mt-8 text-justify whitespace-normal">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Recusandae illum praesentium qui aspernatur consequuntur earum
              provident dolore modi iste, beatae, commodi ut incidunt. Natus sit
              fugiat est qui, reiciendis enim?
            </p>
            <button className="bg-blue-600 px-6 py-1.5 mt-8 text-white rounded-sm">
              <a href="https://www.lipsum.com/">Learn More</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
