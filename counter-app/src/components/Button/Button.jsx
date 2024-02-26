import React, { useState } from "react";

import "./Button.css";

export const Button = (props) => {
	const {title, type, onClick, uid} = props

	return (
		<button className="counter-button" id={uid} type={type} onClick={() => {onClick(type)}}>{title}</button>
	);
};