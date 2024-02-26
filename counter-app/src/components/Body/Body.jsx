import React, { useState } from "react";

import "./Body.css";

export const Body = () => {
	const [counter, setCounter] = useState(0);

	const handleClick1 = () => {
		setCounter(counter + 1);
	};

	const handleClick2 = () => {
		setCounter(counter - 1);
	};

	return (
		<div className="body-container">
			Counter Body
			<div className="counter-body-container">
				{counter}
			</div>
			<div className="buttons">
				<button className="increase-button" onClick={handleClick1}>
					Increment
				</button>
				<button className="substract-button" onClick={handleClick2}>
					Decrement
				</button>
			</div>
		</div>
	);
};