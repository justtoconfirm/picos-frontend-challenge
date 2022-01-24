import React, { useCallback } from "react";

import "./TextField.css";

const TextField = ({
    label,
    value,
    name,
    type = 'text',
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
        <div className="TextField">
            <label htmlFor={name}>{label}</label>
        
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                placeholder={placeholder}
                onChange={handleChange}
                disabled={disabled}
                {...props}
            />
        </div>
    );
};

export default TextField;
