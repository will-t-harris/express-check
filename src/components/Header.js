import React from "react";

export const Header = ({ headerText }) => {
	return (
		<h1 className="absolute w-full h-10 pl-8 text-2xl text-yellow-400 font-extrabold leading-10  bg-purple-800">
			<span role="img" aria-label="horse emoji">
				🐴
			</span>{" "}
			{headerText}
		</h1>
	);
};
