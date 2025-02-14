import React, { useState } from "react";
import { IoSearch, IoMenu, IoClose } from "react-icons/io5";

const NavbarDown = (props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-30 bg-secondary flex justify-center items-center">
      <div className="flex justify-between items-center w-[90%] h-full">
        <div className="flex gap-1 flex-col">
          <h1 className="text-gray-500 text-sm md:text-base">{props.greet}</h1>
          <h1 className="font-semibold text-2xl md:text-3xl">
            {props.component}
          </h1>
        </div>

        <div className="md:hidden">
          <IoMenu
            size={28}
            className="cursor-pointer"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          />
        </div>

        <div
          className={`flex-col md:flex-row md:flex gap-5 items-center ${isMenuOpen ? "flex" : "hidden"} md:static absolute top-16 right-4 bg-secondary md:bg-transparent p-4 md:p-0 rounded-md shadow-md md:shadow-none z-50`}
        >
          <div className="flex justify-between w-full">
            <div className="input flex items-center gap-1 border border-gray-300 bg-white rounded-md py-3 px-2 w-full md:w-auto">
              <IoSearch color="gray" />
              <input
                type="text"
                className="placeholder:text-sm outline-none w-full"
                placeholder="Search incident"
              />
            </div>

            {/* Close button */}
            <IoClose
              size={28}
              className="cursor-pointer md:hidden mt-2"
              onClick={() => setIsMenuOpen(false)}
            />
          </div>

          <input
            type="text"
            className="placeholder:text-sm outline-none border border-gray-300 pl-2 bg-white rounded-md py-3 w-full md:w-auto"
            placeholder="Sort by: Date modified"
          />

          <button className="bg-primary pr-15 px-5 py-3 rounded-md text-white text-sm font-bold cursor-pointer hover:bg-black hover:text-primary transition-all w-full md:w-auto whitespace-nowrap text-center">
            {props.btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavbarDown;
