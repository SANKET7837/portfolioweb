import React from 'react'

export const Header = () => {
  return (
    <div className="text-gray-800 w-full font-sans">
    <div className="bg-sky-300 text-white p-4 flex flex-wrap justify-between items-center">
      <h1 className="font-bold text-4xl md:text-6xl">MurliGHZ</h1>
      <nav>
        <ul className="flex gap-4 md:gap-8 text-lg md:text-xl font-semibold text-black">
          <li className=" cursor-pointer">Home</li>
          <li className="cursor-pointer">About me</li>
          <li className="0cursor-pointer">Project</li>
          <li className="  cursor-pointer">contact
          </li>
        </ul>
      </nav>
    </div>
  </div>
  )
}


