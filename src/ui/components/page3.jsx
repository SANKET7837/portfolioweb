import React from "react";

export const Page3 = () => {
	return (
		<div className="bg-amber-50 p-10">
			<div className="grid md:grid-cols-2 gap-10">
				<div>
					<h2 className="text-3xl font-bold text-gray-900">Skills</h2>
					<p className="mt-4 text-gray-700">
						Here you can see my skills, one of the fascinations of the computer
						world is the momentary changes of technologies, but I try to update
						my knowledge every day and experience new technologies.
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
					<h2 className="text-3xl font-bold text-gray-900">Language Skills</h2>
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
	);
};
