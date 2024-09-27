import AnimatedDiv from "@/components/AnimatedDiv";
import { MdLocalMovies } from "react-icons/md";
import React from "react";

function MoviesAndTvShows() {
	return (
		<AnimatedDiv id={33}>
			<main className="container mx-auto min-h-[93vh] font-bold text-[24px] sm:text-[32px]  py-6 px-4 sm:px-0">
				<div className="flex gap-3 justify-start items-center px-2">
					<MdLocalMovies className="text-xl md:text-2xl" />
					<h1 className={`text-[26px] md:text-[40px] font-bold`}>
						Movies And TV Shows
					</h1>
				</div>
				<div className="min-h-[50vh] flex justify-center items-center">
					<p>Under Development ...</p>
				</div>
			</main>
		</AnimatedDiv>
	);
}

export default MoviesAndTvShows;
