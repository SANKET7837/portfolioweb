import React from "react";

export const Page7 = () => {
  return (
    <>
      {/* Header Section */}
      <div className="p-8 bg-gray-100 text-center">
        <h1 className="text-2xl md:text-6xl text-red-900 font-bold mb-4">
          Get In Touch
        </h1>
        <p className="text-sm md:text-2xl text-blue-400">
          Here you can let me know if you have any criticism, suggestion, or
          problem. I'm waiting to hear your voice or see your message.
        </p>
      </div>

      {/* Content Section */}
      <div className="min-h-screen bg-gray-100 flex flex-wrap items-start justify-center gap-8 py-8">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-2xl">
          <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Contact Me
          </h2>
          <form className="space-y-6">
            {/* Name Field */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-600"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                required
              />
            </div>

            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                required
              />
            </div>

            {/* Message Field */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-600"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="5"
                placeholder="Your Message"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
                required
              />
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-green-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-green-600 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-96">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 flex items-center justify-center bg-blue-200 rounded-full">
              <img src="/image8.png" alt="Contact Icon" className="w-6 h-6" />
            </div>
            <h2 className="text-lg font-semibold ml-4 bg-orange-300 px-2 py-1 rounded-md">
              What Is Your Plan? CALL ME!
            </h2>
          </div>

          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>
              You can get my contact information here and see the URLs of my
              social network pages from the top of the page.
            </li>
            <li className="font-bold">Narhe, Pune, Maharashtra</li>
            <li className="font-bold">murli@312@gmail.com</li>
            <li className="font-bold">965456484</li>
          </ul>
        </div>
      </div>
    </>
  );
};
