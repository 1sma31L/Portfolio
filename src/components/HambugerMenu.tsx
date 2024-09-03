import React, { useState } from "react";

const Nav = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<button
			onClick={handleClick}
			className="flex flex-col justify-center items-center">
			<span
				className={`bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
											isOpen ? "rotate-45 translate-y-1" : "-translate-y-0.5"
										}`}></span>
			<span
				className={`bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm my-0.5 ${
											isOpen ? "opacity-0" : "opacity-100"
										}`}></span>
			<span
				className={`bg-steel-500 block transition-all duration-300 ease-out 
                    h-0.5 w-6 rounded-sm ${
											isOpen ? "-rotate-45 -translate-y-1" : "translate-y-0.5"
										}`}></span>
		</button>
	);
};
export default Nav;
