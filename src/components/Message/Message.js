import React from "react";
import PropTypes from "prop-types";

import "./Message.css";

const Message = ({ message }) => {
	return (

		<div className="message">{message}</div>

	);
};

Message.propTypes = {
    message: PropTypes.string
};

export default Message;