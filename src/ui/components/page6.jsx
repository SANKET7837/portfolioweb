import React from "react";

export const Page6 = () => {
	return (
		<>
			<div className="p-4 md:p-4 bg-gray-100 text-left">
				<h1 className="text-xl md:text-6xl text-red-900  font-bold m- p-12 flex justify-center">
					What I am created
				</h1>
				<p className="text-sm md:text-2xl m-3 text-blue-400 text-center  ">
					Creating is always attractive and I tried to never deprive myself of
					this pleasure, here you can see the projects published by me.
				</p>
			</div>

			<div class="bg-white shadow-lg rounded-lg p-6 w-full sm:w-96">
				<div class="flex items-center mb-4">
					<div class="w-10 h-10 flex items-center justify-center bg-blue-200 rounded-full">
						<img src="public/image6.png" alt="Hand Icon" class="w-6 h-6" />
					</div>
					<h2 class="text-lg font-semibold ml-4 bg-orange-300">
						Modi Lipi translater
					</h2>
				</div>

				<div class="text-red-700 font-medium text-sm mb-4"></div>

				<ul class="list-disc pl-6 text-gray-700 ">
					<li>
						focus on developing a software application or system capable of
						translating text written in the Modi script (an old Marathi writing
						style) into a modern script like Devanagari.
					</li>
				</ul>
				<div className="text-gray-800 w-full font-sans">
					<div>
						<button
							type='button'
							className="font-bold bg-red-500 text-white rounded-1xl ml-auto px-2 py-1 rounded-2xl m-4 text-sm"
						>
							Read more
						</button>
					</div>
				</div>
			</div>

			<div class="bg-white shadow-lg rounded-lg p-6 w-full sm:w-96">
				<div class="flex items-center mb-4 ">
					<div class="w-10 h-10 flex items-center justify-center bg-blue-200 rounded-full">
						<img src="public/image7.png" alt="Hand Icon" class="w-6 h-6" />
					</div>
					<h2 class="text-lg font-semibold ml-4 bg-orange-300">
						Contact Management System
					</h2>
				</div>

				<div class="text-red-700 font-medium text-sm mb-4"></div>

				<ul class="list-disc pl-6 text-gray-700 ">
					<li>
						software application designed to store, organize, and manage a
						user's contact information, including names, phone numbers, email
						addresses, and other relevant details.
					</li>
				</ul>
				<div className="text-gray-800 w-full font-sans">
					<div>
						<button
							type="button"
							className="font-bold bg-red-500 text-white rounded-1xl ml-auto px-2 py-1 rounded-2xl m-3 text-sm"
						>
							Read more
						</button>
					</div>
				</div>
			</div>
      
		</>
	);
};
