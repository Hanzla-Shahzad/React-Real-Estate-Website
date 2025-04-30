import React from "react";

const Testimonials = () => {
  return (
    <>
      <div
        className="flex flex-col items-center justify-center mt-30"
        id="Testimonials"
      >
        <p>
          {" "}
          <span className="text-xl font-[sans-serif] font-[800]">
            Customer
          </span>{" "}
          <span className="text-xl font-[sans-serif] underline">
            Testimonials
          </span>
        </p>
        <p className="mt-1">Real Stories from Those hwo found home with us</p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 mt-10 px-4">
        <div className="bg-white shadow-2xl rounded-sm h-auto py-7 w-70 px-5 text-center  flex flex-col items-center justify-center mt-10 ">
          <img
            src="https://static.wixstatic.com/media/a3c153_b8bb507898b541cf9a7c0c71c089d455~mv2.png/v1/fill/w_473,h_662,al_c,lg_1,q_85,enc_avif,quality_auto/IMG_3981.png"
            className="size-20 bg-white rounded-full "
            alt=""
          />
          <p className="mt-5 font-[sans-serif] font-semibold text-md">
            John Doe
          </p>
          <p>Marketing Manager</p>
          <div className="mt-1.5">⭐⭐⭐⭐⭐</div>
          <p className="mt-2 text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            corporis quasi! Iste dolores et ipsum non odio similique, quae
            minus!
          </p>
        </div>
        <div className="bg-white shadow-2xl rounded-sm h-auto py-7 w-70 px-5 text-center flex flex-col items-center justify-center mt-10">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLFYAcxxLRxKjLhVH-AGLhoetJ9qTaeVKERg&s"
            className="size-20 bg-white rounded-full shadow-2xl"
            alt=""
          />
          <p className="mt-5 font-[sans-serif] font-semibold text-md">
            John Doe
          </p>
          <p>Marketing Manager</p>
          <div className="mt-1.5">⭐⭐⭐⭐⭐</div>
          <p className="mt-2 text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            corporis quasi! Iste dolores et ipsum non odio similique, quae
            minus!
          </p>
        </div>
        <div className="bg-white shadow-2xl rounded-sm h-auto py-7 w-70 px-5 text-center flex flex-col items-center justify-center mt-10">
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/041/714/852/small/ai-generated-happy-businessman-on-transparent-background-png.png"
            className="size-20 bg-white rounded-full shadow-2xl"
            alt=""
          />
          <p className="mt-5 font-[sans-serif] font-semibold text-md">
            John Doe
          </p>
          <p>Marketing Manager</p>
          <div className="mt-1.5">⭐⭐⭐⭐⭐</div>
          <p className="mt-2 text-[15px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            corporis quasi! Iste dolores et ipsum non odio similique, quae
            minus!
          </p>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
