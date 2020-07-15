import React from "react";
import { Link } from "react-router-dom";

export const HeaderButton = ({ buttonText, buttonUrl, twClasses }) => {
	return (
		<Link className={twClasses} to={buttonUrl}>
			{buttonText}
		</Link>
	);
};
