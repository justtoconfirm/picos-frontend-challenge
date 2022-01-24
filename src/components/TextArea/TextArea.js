import React, { useCallback } from "react";

import "./TextArea.css";

const TextArea = ({
    label,
    rows,
    value,
    name,
    onChange,
    placeholder,
    disabled,
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
        </div>
    );
};

export default TextArea;
