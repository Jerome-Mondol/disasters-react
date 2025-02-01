import React from "react";
import { GiRaining } from "react-icons/gi";

const Card = (props) => {
  return (
    <div className="">
      <div className="relative">
        <img src={props.img} alt="Image" className="w-80" />
        <h1 className="title mt-2 font-bold">{props.title}</h1>
        <h5 className="description mt-1 text-gray-500">{props.desc}</h5>
        <h3 className="loss mt-1 font-bold">{props.loss}</h3>

        <div className="flex justify-center items-center gap-1 absolute py-2 px-3 bg-white top-2 right-2 rounded-3xl">
          <GiRaining />
          <h1 className="font-bold text-sm">Blizzard</h1>
        </div>
      </div>
    </div>
  );
};

export default Card;
