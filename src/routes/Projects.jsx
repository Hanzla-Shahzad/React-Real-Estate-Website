import React from "react";
import Slider from "../components/slider";

const Projects = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center mt-30"
        id="Projects"
      >
        <p>
          {" "}
          <span className="text-xl font-[sans-serif] font-[800]">
            Projects
          </span>{" "}
          <span className="text-xl font-[sans-serif] underline">Completed</span>
        </p>
        <p>Crafting Spaces Building Legacies-Explore Our Portfolio</p>
      </div>
      <Slider />
    </>
  );
};

export default Projects;
