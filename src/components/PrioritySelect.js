import React from "react";

export const PrioritySelect = ({ todoPriority, setTodoPriority }) => {
	return (
		<>
			<label>Todo Priority: </label>
			<select
				value={todoPriority}
				onChange={(event) => setTodoPriority(Number(event.target.value))}
			>
				<option value={1}>1</option>
				<option value={2}>2</option>
				<option value={3}>3</option>
				<option value={4}>4</option>
			</select>
		</>
	);
};
