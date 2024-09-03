import React from "react";
import { ImSpinner9 } from "react-icons/im";

function Blog() {
	return (
		<main className="container min-h-[83vh] font-bold text-[24px] sm:text-[32px] flex justify-center items-center">
			<div className="flex gap-4 justify-center items-center">
				<h1>Under Development </h1>
				<ImSpinner9 className="text-xl md:text-2xl animate-spin" />
			</div>
		</main>
	);
}

export default Blog;
