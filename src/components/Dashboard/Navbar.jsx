import React, { useState } from "react";
import { Avatar, Logo } from "../../../public/consts/consts";
import { IoNotifications, IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    "Dashboard",
    "Incidents",
    "Locations",
    "Documents",
    "Cypher AI",
  ];

  const user = {
    avatar: Avatar,
    name: "Jerome Mondol",
    mail: "jeromemondol11@gmail.com",
  };

  return (
    <div className="w-full bg-secondary flex justify-center border-b border-gray-300 h-20">
      <nav className="flex justify-between items-center w-[90%] relative">
        <div className="logo">
          <img src={Logo} alt="Disasters" className="h-10" />
        </div>

        <div className="sm:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoClose size={28} /> : <IoMenu size={28} />}
          </button>
        </div>

        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } navLinks sm:flex flex-col sm:flex-row items-center gap-5 lg:gap-10 absolute sm:static top-16 left-0 w-full sm:w-auto bg-secondary sm:bg-transparent p-5 sm:p-0 shadow-md sm:shadow-none`}
        >
          {navItems.map((item) => (
            <a
              href="#"
              key={item}
              className="navLink text-gray-500 hover:text-gray-900 transition duration-300"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="profile flex items-center gap-3">
          <div className="bg-white w-10 h-10 rounded-full flex justify-center items-center relative">
            <IoNotifications size={24} />
            <span className="top-1 right-1 absolute w-2 h-2 bg-green-500 rounded-full"></span>
          </div>

          <div className="flex gap-3 items-center">
            <img src={user.avatar} alt="J" className="w-10 h-10 rounded-full" />
            <ul className="hidden md:block">
              <li className="font-semibold text-gray-600">{user.name}</li>
              <li className="text-sm text-gray-500">{user.mail}</li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
