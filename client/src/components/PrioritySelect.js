import React from "react";

export const PrioritySelect = ({ todoPriority, setTodoPriority }) => {
	return (
		<>
			<label className="font-bold">Todo Priority: </label>
			<select
				className="py-1 text-center bg-purple-600 text-white font-bold w-1/4"
				value={todoPriority}
				onChange={(event) => setTodoPriority(Number(event.target.value))}
			>
				<option className="bg-purple-600" value={1}>
					1
				</option>
				<option className="bg-purple-600" value={2}>
					2
				</option>
				<option className="bg-purple-600" value={3}>
					3
				</option>
				<option className="bg-purple-600" value={4}>
					4
				</option>
			</select>
		</>
	);
};
