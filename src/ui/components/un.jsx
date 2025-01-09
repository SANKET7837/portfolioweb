import React from "react";

const un = () => {
	return (
		<>
			<div className="text-gray-800 w-full font-sans">
				<div className="bg-sky-300 text-white p-4 flex flex-wrap justify-between items-center">
					<h1 className="font-bold text-4xl md:text-6xl">MurliGHZ</h1>
					<nav>
						<ul className="flex gap-4 md:gap-8 text-lg md:text-xl font-semibold text-black">
							<li className=" cursor-pointer">Home</li>
							<li className="cursor-pointer">About me</li>
							<li className="0cursor-pointer">Project</li>
							<li className="  cursor-pointer">contact</li>
						</ul>
					</nav>
				</div>
			</div>

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

			<div className="bg-amber-50 p-10">
				<div className="grid md:grid-cols-2 gap-10">
					<div>
						<h2 className="text-3xl font-bold text-gray-900">Skills</h2>
						<p className="mt-4 text-gray-700">
							Here you can see my skills, one of the fascinations of the
							computer world is the momentary changes of technologies, but I try
							to update my knowledge every day and experience new technologies.
						</p>
						<div className="mt-6 flex flex-wrap gap-4">
							<span className="bg-red-500 text-gray-900 px-4 py-2 rounded-lg font-medium">
								PHP
							</span>
							<span className="bg-red-500 text-gray-900 px-4 py-2 rounded-lg font-medium">
								Laravel
							</span>
							<span className="bg-red-500 text-gray-900 px-4 py-2 rounded-lg font-medium">
								MySQL
							</span>
							<span className="bg-red-500 text-gray-900 px-4 py-2 rounded-lg font-medium">
								Vue.js
							</span>
							<span className="bg-red-500 text-gray-900 px-4 py-2 rounded-lg font-medium">
								PostgreSQL
							</span>
							<span className="bg-red-500 text-gray-900 px-4 py-2 rounded-lg font-medium">
								Tailwind CSS
							</span>
							<span className="bg-red-500 text-gray-900 px-4 py-2 rounded-lg font-medium">
								JavaScript
							</span>
							<span className="bg-red-100 text-gray-900 px-4 py-2 rounded-lg font-medium">
								HTML / CSS
							</span>
							<span className="bg-red-100 text-gray-900 px-4 py-2 rounded-lg font-medium">
								Elastic Search
							</span>
							<span className="bg-red-100 text-gray-900 px-4 py-2 rounded-lg font-medium">
								Git
							</span>
							<span className="bg-red-100 text-gray-900 px-4 py-2 rounded-lg font-medium">
								Livewire
							</span>
							<span className="bg-red-100 text-gray-900 px-4 py-2 rounded-lg font-medium">
								Symfony
							</span>
							<span className="bg-red-100 text-gray-900 px-4 py-2 rounded-lg font-medium">
								Redis
							</span>
							<span className="bg-red-100 text-gray-900 px-4 py-2 rounded-lg font-medium">
								Linux
							</span>
						</div>
					</div>

					<div>
						<h2 className="text-3xl font-bold text-gray-900">
							Language Skills
						</h2>
						<p className="mt-4 text-gray-700">
							One of my hobbies is studying and learning languages. I try to be
							able to learn and use my favorite languages.
						</p>
						<div className="mt-6 flex gap-6">
							<div className="bg-white shadow-md rounded-lg p-6 w-48 text-center">
								<div className="bg-orange-500 text-gray-900 text-2xl font-bold w-16 h-16 flex items-center justify-center rounded-full mx-auto">
									99%
								</div>
								<p className="mt-4 text-lg font-semibold">Hindi</p>
							</div>

							<div className="bg-white shadow-md rounded-lg p-6 w-48 text-center">
								<div className="bg-orange-300 text-gray-900 text-2xl font-bold w-16 h-16 flex items-center justify-center rounded-full mx-auto">
									70%
								</div>
								<p className="mt-4 text-lg font-semibold">English</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="p-4md:p-44 bg-gray-100 text-left">
				<h1 className="text-xl md:text-6xl text-black  font-bold m- p-12 flex justify-center">
					My Experiences
				</h1>
				<p className="text-sm md:text-2xl m-9 text-pink-600 flex items-center justify-center w-3/6 ">
					One of the most beautiful parts of every person's life, the part of
					their work life, I am very happy to have spent this part of my life
					with the people I loved and it has made my interest in my work more
					and more.
				</p>
			</div>
		</>
	);
};

export default un;
