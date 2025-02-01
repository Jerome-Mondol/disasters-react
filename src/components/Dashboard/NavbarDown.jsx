import React from "react";
import { IoSearch } from "react-icons/io5";

const NavbarDown = (props) => {
  return (
    <div className="h-30 bg-secondary flex justify-center items-center">
      <div className="flex justify-between items-center w-[90%] h-full">
        <div className="flex gap-1 flex-col">
          <h1 className="text-gray-500">{props.greet}</h1>
          <h1 className="font-semibold text-3xl">{props.component}</h1>
        </div>
        <div className="flex gap-5">
          <div className="input flex items-center gap-1 border-1 bg-white border-gray-300 rounded-md py-3 px-2">
            <IoSearch color="gray"/>
            <input type="text" className="placeholder:text-sm outline-none" placeholder="Search incident"/>
          </div>
            <input type="text" className="placeholder:text-sm outline-none border-1 border-gray-300 pl-2 bg-white rounded-md" placeholder="Sort by: Date modified"/>
          <button className="bg-primary px-6 py-2 rounded-md text-white text-sm font-bold cursor-pointer hover:bg-black hover:text-primary transition-all">{props.btn}</button>
        </div>
      </div>
    </div>
  );
};

export default NavbarDown;
