import React from "react";

export const Page2 = () => {
	return (
		<section className="relative text-center py-8 md:py-16 bg-slate-100 flex flex-col-reverse md:flex-row-reverse items-center">
			{/* Image Section */}
			<img
				className="h-auto w-full md:w-2/6 object-cover m-6"
				src="image1.png"
				alt="Reza Ghasemzadeh"
			/>

			{/* Text and Stats Section */}
			<div className="p-6 md:p-16 bg-gray-100 text-left">
				{/* Heading */}
				<h1 className="text-2xl md:text-5xl text-black font-bold mb-6">
					I love being a developer!
				</h1>

				{/* Paragraph */}
				<p className="text-sm md:text-lg text-pink-600 mb-6">
					Hello, I am Murli; a 26-year-old backend developer. I started
					programming in 2010 and continued to specialize in 2015. These days,
					along with programming, I study startups and businesses. Besides all
					this, I play the dulcimer and watch my favorite series.
				</p>

				{/* Stats Section */}
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					{/* Completed Projects */}
					<div className="bg-white shadow-md rounded-lg p-6 text-center">
						<div className="text-yellow-600 text-2xl font-bold w-16 h-16 flex items-center justify-center rounded-full mx-auto bg-yellow-100">
							53
						</div>
						<p className="mt-4 text-lg font-semibold">Completed Projects</p>
					</div>

					{/* Positive Reviews */}
					<div className="bg-white shadow-md rounded-lg p-6 text-center">
						<div className="text-yellow-600 text-2xl font-bold w-16 h-16 flex items-center justify-center rounded-full mx-auto bg-yellow-100">
							9
						</div>
						<p className="mt-4 text-lg font-semibold">Positive Reviews</p>
					</div>
				</div>
			</div>
		</section>
	);
};
