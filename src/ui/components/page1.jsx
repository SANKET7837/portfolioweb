import React from "react";

export const Page1 = () => {
	return (
		<section className="relative text-center py-8 md:py-16 bg-slate-100 flex flex-row bg-slate-600">
			<img
				className="h-5/6 md: w-96 object-cover m-10"
				src="public/iamge.png"
				alt=""
			/>
			<div className="p-4 md:p-44 bg-gray-100">
				<h1 className="text-xl md:text-5xl text-yellow-400 m-4 font-bold ">
					Hi There I'm
				</h1>
				<p className="text-sm md:text-7xl font-bold ">Murali Vijay</p>
				<h1 className="text-xl md:text-5xl text-yellow-400 m-2 ">
					Full stack developer
				</h1>
			</div>
		</section>
	);
};
