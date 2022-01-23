import React from "react";
import "./Button.css";

const Button = props => {

	// Destructure the props in the component and set any default values
	const {
		type = 'button',
		onClick,
		children,
		url = '',
	} = props;

	// Check if the component has the url prop value that match with this list so a link can render as a link
	const isAnchorLink = url && (url.includes('http') || url.startsWith('#') || url.startsWith('mailto') || url.startsWith('/'));

	const renderAsLink = () =>
		<a href={url} role="button">{ children }</a>

	const renderAsButton = () =>
		<button {...{type, onClick}}>{ children }</button>

	return (

		// If the button component has a url prop with a value call the method to render as a link, or render as a button element
		isAnchorLink ? renderAsLink() : renderAsButton()

	);
};

export default Button;
