import React from "react";

export const Page6 = () => {
  return (
    <>
     
      <div className="p-8 bg-gray-100 text-center">
        <h1 className="text-2xl md:text-6xl text-red-900 font-bold mb-4">
          What I Have Created
        </h1>
        <p className="text-sm md:text-2xl text-blue-400">
          Creating is always attractive, and I strive to never deprive myself of
          this pleasure. Here you can see the projects I have published.
        </p>
      </div>

      
      <div className="flex flex-wrap justify-center gap-6 py-8">
       
        <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-96">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-200 rounded-full">
              <img
                src="image6.png"
                alt="Modi Lipi Translator Icon"
                className="w-6 h-6"
              />
            </div>
            <h2 className="text-lg font-semibold ml-4 bg-orange-300 px-2 py-1 rounded-md">
              Modi Lipi Translator
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            Focus on developing a software application or system capable of
            translating text written in the Modi script (an old Marathi writing
            style) into a modern script like Devanagari.
          </p>
          <button
            type="button"
            className="font-bold bg-red-500 text-white rounded-lg px-4 py-2 text-sm"
          >
            Read more
          </button>
        </div>

      
        <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-96">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-200 rounded-full">
              <img
                src="image7.png"
                alt="Contact Management Icon"
                className="w-6 h-6"
              />
            </div>
            <h2 className="text-lg font-semibold ml-4 bg-orange-300 px-2 py-1 rounded-md">
              Contact Management System
            </h2>
          </div>
          <p className="text-gray-700 mb-4">
            A software application designed to store, organize, and manage a
            user's contact information, including names, phone numbers, email
            addresses, and other relevant details.
          </p>
          <button
            type="button"
            className="font-bold bg-red-500 text-white rounded-lg px-4 py-2 text-sm"
          >
            Read more
          </button>
        </div>
      </div>
    </>
  );
};
