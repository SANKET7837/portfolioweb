import React from "react";

export const Header = () => {
  return (
    <header className="text-gray-800 w-full font-sans">
      <div className="bg-sky-300 text-white p-4 flex flex-wrap justify-between items-center">
        <h1 className="font-bold text-4xl md:text-6xl">MurliGHZ</h1>
        <nav>
          <ul className="flex gap-4 md:gap-8 text-lg md:text-xl font-semibold text-black">
            <li className="cursor-pointer">
              <a href="#home">Home</a>
            </li>
            <li className="cursor-pointer">
              <a href="#about">About Me</a>
            </li>
            <li className="cursor-pointer">
              <a href="#projects">Projects</a>
            </li>
            <li className="cursor-pointer">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
