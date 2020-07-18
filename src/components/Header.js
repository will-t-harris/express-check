import React from "react";
import { HeaderButton } from "./HeaderButton";

export const Header = ({ headerText }) => {
	return (
		<div className="flex flex-row absolute w-full h-10 pl-8 bg-purple-800">
			<h1 className="text-2xl text-yellow-400 font-extrabold leading-10  ">
				<span role="img" aria-label="horse emoji">
					🐴
				</span>{" "}
				{headerText}
			</h1>
			<HeaderButton
				twClasses="self-center ml-auto mr-8 text-yellow-400 font-bold"
				buttonText="REGISTER"
				buttonUrl="/register"
			/>
			<HeaderButton
				twClasses="self-center mr-8 text-yellow-400 font-bold"
				buttonText="LOG IN"
				buttonUrl="/login"
			/>
		</div>
	);
};
