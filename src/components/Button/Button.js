import React from "react";
import PropTypes from "prop-types";

import "./Button.css";

const Button = props => {

	// Destructure the props in the component and set any default values
	const {
		type = 'button',
		onClick,
		children,
		url = '',
		disabled,
	} = props;

	// Check if the component has the url prop value that match with this list so a link can render as a link
	const isAnchorLink = url && (url.includes('http') || url.startsWith('#') || url.startsWith('mailto') || url.startsWith('/'));

	const renderAsLink = () =>
		<a href={url} role="button">{ children }</a>

	const renderAsButton = () =>
		<button {...{type, onClick, disabled}}>{ children }</button>

	return (

		// If the button component has a url prop with a value call the method to render as a link, or render as a button element
		isAnchorLink ? renderAsLink() : renderAsButton()

	);
};

Button.propTypes = {
    type: PropTypes.string,
    onClick: PropTypes.func,
    children: PropTypes.string,
    url: PropTypes.string,
    disabled: PropTypes.bool,
};

export default Button;
