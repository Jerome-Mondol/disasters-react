import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";
import { NavLink } from 'react-router'

const IncidentInputNavDown = ({ greet, component, btn1, btn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-20 bg-secondary flex justify-center items-center px-4 md:px-8 lg:px-16">
      <div className="flex justify-between items-center w-full max-w-7xl h-full">
        <div className="flex gap-1 flex-col">
          <h1 className="text-gray-500 text-sm md:text-base lg:text-lg">
            {greet}
          </h1>
          <h1 className="font-semibold text-xl md:text-2xl lg:text-3xl">
            {component}
          </h1>
        </div>

        <div className="hidden md:flex justify-center items-center flex-1 px-4">
          <div className="w-full md:w-[70%] bg-gray-300 h-2 rounded-md overflow-hidden">
            <div className="progress bg-primary h-full w-1/3 transition-all duration-300"></div>
          </div>
        </div>

        <div className="md:hidden">
          {isMenuOpen ? (
            <IoClose
              size={28}
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <IoMenu
              size={28}
              className="cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>

        <div
          className={`flex-col md:flex-row md:flex gap-4 items-center ${
            isMenuOpen ? "flex" : "hidden"
          } md:static absolute top-20 right-4 bg-secondary md:bg-transparent p-4 md:p-0 rounded-md shadow-md md:shadow-none z-50 w-full md:w-auto`}
        >
          <button className="bg-white px-4 py-2 rounded-md text-gray-400 border border-gray-400 text-sm font-bold hover:bg-black hover:text-primary transition-all w-full md:w-auto text-center">
            {btn1}
          </button>

          <NavLink to="/incidents">
            <button className="bg-primary px-4 py-2 rounded-md text-white text-sm font-bold hover:bg-black hover:text-primary transition-all w-full md:w-auto text-center">
              {btn}
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default IncidentInputNavDown;
