import AnimatedDiv from "@/components/AnimatedDiv";
import { IoIosMusicalNotes } from "react-icons/io";
import React from "react";

function Music() {
	return (
		<AnimatedDiv id={22}>
			<main className="container mx-auto min-h-[93vh] font-bold text-[24px] sm:text-[32px]  py-6 px-4 sm:px-0">
				<div className="flex gap-3 justify-start items-center px-2">
					<IoIosMusicalNotes className="text-xl md:text-2xl" />
					<h1 className={`text-[26px] md:text-[40px] font-bold`}>Music</h1>
				</div>
				<div className="min-h-[50vh] flex justify-center items-center">
					<p>Under Development ...</p>
				</div>
			</main>
		</AnimatedDiv>
	);
}

export default Music;
