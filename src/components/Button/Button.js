import React from "react";
import "./Button.css";

const Button = props => {

	// Destructure the props in the component and set any default values
	const {
		type = 'button',
		onClick,
		children
	} = props;

	return (

		<button {...{type, onClick}}>{ children }</button>

	);
};

export default Button;
