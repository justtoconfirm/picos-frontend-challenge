import React, { useCallback } from "react";
import PropTypes from "prop-types";
import Message from "../Message/Message";

import "./TextArea.css";

const TextArea = ({
    label,
    rows,
    value,
    name,
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
        <div className="TextArea">
            <label htmlFor={name}>{label}</label>
            
            <textarea
                id={name}
                {...{name, value, placeholder, rows, disabled}}
                onChange={handleChange}
                {...props}
            />

            {message && <Message message={message} />}
        </div>
    );
};

TextArea.propTypes = {
    label: PropTypes.string,
    rows: PropTypes.number,
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    message: PropTypes.string
};

export default TextArea;
