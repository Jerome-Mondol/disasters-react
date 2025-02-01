import React from "react";
import { GiRaining } from "react-icons/gi";

const Card = (props) => {
  return (
    <div className="w-full sm:w-96 md:w-[24rem] lg:w-[26rem] p-6"> {/* Increased width for larger screens */}
      <div className="relative">
        <img
          src={props.img}
          alt="Image"
          className="w-full h-auto max-w-full rounded-lg object-cover"
        />
        <h1 className="title mt-2 text-lg sm:text-xl md:text-2xl font-bold">{props.title}</h1>
        <h5 className="description mt-1 text-sm sm:text-base text-gray-500">{props.desc}</h5>
        <h3 className="loss mt-1 font-semibold text-sm sm:text-base">{props.loss}</h3>

        <div className="flex justify-center items-center gap-1 absolute py-1 px-3 bg-white top-2 right-2 rounded-3xl shadow-md">
          <GiRaining />
          <h1 className="font-bold text-xs sm:text-sm">Blizzard</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
