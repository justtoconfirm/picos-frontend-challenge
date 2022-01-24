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
                {...{name, type, value, placeholder, disabled}}
                id={name}
                onChange={handleChange}
                {...props}
            />
        </div>
    );
};

export default TextField;
