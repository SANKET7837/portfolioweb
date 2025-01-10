import React from "react";

export const Page1 = () => {
	return (
		<section className="relative text-center py-8 md:py-16 bg-slate-600 flex flex-col-reverse md:flex-row items-center">
			{/* Image Section */}
			<img
				className="w-full md:w-96 h-auto object-cover m-4"
				src="public/image.png"
				alt="Murali Vijay"
			/>

			{/* Text Section */}
			<div className="p-6 md:p-16 bg-gray-100 rounded-lg shadow-lg">
				<h1 className="text-xl md:text-4xl text-yellow-400 mb-4 font-bold">
					Hi There, I'm
				</h1>
				<p className="text-lg md:text-6xl font-bold text-black">
					Murali Vijay
				</p>
				<h2 className="text-lg md:text-3xl text-yellow-400 mt-4">
					Full Stack Developer
				</h2>
			</div>
		</section>
	);
};
