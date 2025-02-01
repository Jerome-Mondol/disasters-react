import React from "react";
import { Avatar, Logo } from "../../../public/consts/consts";
import { IoNotifications } from "react-icons/io5";

const Navbar = () => {
  const navItems = [
    "Dashboard",
    "Incidents",
    "Locations",
    "Documents",
    "Cypher AI",
  ];

  const user = [{
    avatar: Avatar,
    name: "Jerome Mondol",
    mail: "jeromemondol11@gmail.com"
  }]

  return (
    <div className="w-full bg-secondary flex justify-center border-b-1 border-gray-300">
      <nav className="flex justify-between items-center w-[90%]">
        <div className="logo">
          <img src={Logo} alt="Disasters" />
        </div>
        <div className="navLinks flex gap-10">
          {navItems.map((item) => (
            <a href="#" key={item} className="text-gray-500">{item}</a>
          ))}
        </div>
        <div className="Profile">
            <div><IoNotifications /></div>

            {user.map(({avatar, name, mail}) => (
                <div key={mail}>
                    <img src={avatar} alt="J" />
                    <ul>
                        <li>{name}</li>
                        <li>{mail}</li>
                    </ul>
                </div>
            ))}

        </div>
      </nav>
    </div>
  );
};

export default Navbar;
