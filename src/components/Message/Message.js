import React from "react";
import PropTypes from "prop-types";

import "./Message.css";

const Message = ({ message, isError }) => {
	return (

		<div className={isError ? "message message--error" : "message message--success"}>{message}</div>

	);
};

Message.propTypes = {
    isError: PropTypes.bool
};

export default Message;