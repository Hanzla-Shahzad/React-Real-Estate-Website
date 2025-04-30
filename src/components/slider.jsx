import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Slider = () => {
  const [data, setData] = useState([]);
  const [curIdx, setCurIdx] = useState(0);

  const api = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setData(response.data.products);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    api();
  }, []);

  const handlePrev = () => {
    setCurIdx((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurIdx((next) => Math.min(next + 1, data.length - visibleItems));
  };

  // 🧠 Based on screen size, decide how many items to show
  const [visibleItems, setVisibleItems] = useState(3);

  useEffect(() => {
    const updateVisibleItems = () => {
      let width = window.innerWidth;
      if (width < 640) {
        setVisibleItems(1); // Mobile
      }
      if (width < 1024) {
        setVisibleItems(2); // Tablet
      } else {
        setVisibleItems(3); // Desktop
      }
    };

    updateVisibleItems();
    window.addEventListener("resize", updateVisibleItems);
    return () => window.removeEventListener("resize", updateVisibleItems);
  }, []);

  const itemWidth = 240; // Width of one card (in px, you can adjust)

  return (
    <div className="relative w-full overflow-hidden p-4 mt-25">
      {/* Buttons */}
      <button
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
        onClick={handlePrev}
      >
        <FaArrowLeft />
      </button>
      <button
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md"
        onClick={handleNext}
      >
        <FaArrowRight />
      </button>

      {/* Slider */}
      <div
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${curIdx * (itemWidth + 16)}px)` }}
      >
        {data.map((item) => (
          <div
            key={item.id}
            className="flex flex-shrink-0 flex-grow-0 flex-col"
            style={{ width: `${itemWidth}px`, marginRight: "16px" }}
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="rounded-lg shadow-md w-full h-40 object-cover"
            />
            <p className="text-center mt-2 font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
