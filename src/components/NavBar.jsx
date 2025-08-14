import React from "react";
import assets from "../assets/assets";

const NavBar = ({ theme, setTheme }) => {
  return (
    <div className="flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 z-20 backdrop-blur-xl font-medium bg-white/50 dark:bg-grey-900/70">
      <img
        src={theme === "dark" ? assets.logo_dark : assets.logo}
        className="w-32 sm:w40 "
        alt=""
      />
      <div className="text-grey-700 dark:text-white sm:text-sm max-sm:w-60 max-sm:pl-10">
        <a href="#" className="sm:hover:border-b">
          Home
        </a>
        <a href="#services" className="sm:hover:border-b">
          Services
        </a>
        <a href="#our-work" className="sm:hover:border-b">
          Our Work
        </a>
        <a href="#contact-us" className="sm:hover:border-b">
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default NavBar;
