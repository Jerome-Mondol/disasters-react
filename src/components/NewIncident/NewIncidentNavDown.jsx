import React, { useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const NewIncidentNavDown = ({ greet, component, btn1, btn }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="h-30 bg-secondary flex justify-center items-center">
      <div className="flex justify-between items-center w-[90%] h-full">
        <div className="flex gap-1 flex-col">
          <h1 className="text-gray-500 text-sm md:text-base">{greet}</h1>
          <h1 className="font-semibold text-2xl md:text-3xl">{component}</h1>
        </div>

        <div className="flex-1 flex justify-center items-center">
          <div className="w-full md:w-60 bg-red-500 h-2 rounded-md overflow-hidden">
            <div className="progress bg-green-500 h-full w-1/2"></div> {/* Adjust width as needed */}
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
          className={`flex-col md:flex-row md:flex gap-5 items-center ${
            isMenuOpen ? "flex" : "hidden"
          } md:static absolute top-16 right-4 bg-secondary md:bg-transparent p-4 md:p-0 rounded-md shadow-md md:shadow-none z-50`}
        >
          <button className="bg-white px-4 py-2 rounded-md text-gray-400 border border-gray-400 text-sm font-bold hover:bg-black hover:text-primary transition-all w-full md:w-auto text-center">
            {btn1}
          </button>

          <button className="bg-primary px-4 py-2 rounded-md text-white text-sm font-bold hover:bg-black hover:text-primary transition-all w-full md:w-auto text-center">
            {btn}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewIncidentNavDown;
