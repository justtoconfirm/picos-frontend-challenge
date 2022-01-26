import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Message from "../Message/Message";

import "./TextField.css";

const TextField = ({
    label,
    value,
    name,
    type = 'text',
    onChange,
    placeholder,
    disabled,
    message,
    ...props
}) => {
    const handleChange = useCallback(
        (e) => {
            onChange(e, e.target.value);
        },
        [onChange]
    );

    return (
        <div className="TextField">
            <label htmlFor={name}>{label}</label>
        
            <input
                {...{name, type, value, placeholder, disabled}}
                id={name}
                onChange={handleChange}
                {...props}
            />

            {message && <Message message={message} />}
        </div>
    );
};

TextField.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    message: PropTypes.string
};

export default TextField;
