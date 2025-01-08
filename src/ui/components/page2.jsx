import React from 'react'

export const Page2 = () => {
  return (
    <
    section className="relative text-center py-8 md:py-16 bg-slate-100 flex flex-row-reverse items-center">
  
  <img
    className="h-5/6 md:w-2/6 object-cover m-10"
    src="public/image1.png"
    alt="Reza Ghasemjadesh"
  />
  
  
  <div className="p-4md:p-44 bg-gray-100 text-left">
    <h1 className="text-xl md:text-7xl text-black  font-bold m- p-12">I love being a developer !</h1>
    <p className="text-sm md:text-3xl m-4 text-pink-600  ">Hello, I am murli; The 26 -year-old is a backend developer. I started programming in 2010 and continued to specialize in 2015. These days, along with programming, I study about startups and businesses, and besides all this, I play the dulcimer and watch my favorite series. am working</p>
  
    <div className="mt-6 flex gap-6">
        
        <div className="bg-white shadow-md rounded-lg p-6 w-48 text-center">
          <div className=" text-yellow-600 text-2xl font-bold w-16 h-16 flex items-center justify-center rounded-full mx-auto">
            53
          </div>
          <p className="mt-4 text-lg font-semibold"> completed projects</p>
        </div>
        </div>

        <div className="mt-6 flex gap-6">
        
        <div className="bg-white shadow-md rounded-lg p-6 w-48 text-center">
          <div className=" text-yellow-600 text-2xl font-bold w-16 h-16 flex items-center justify-center rounded-full mx-auto">
            9
          </div>
          <p className="mt-4 text-lg font-semibold"> Positive Review</p>
        </div>
        </div>
  </div>

 
</section>

  )
}

