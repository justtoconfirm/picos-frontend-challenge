import React, { useCallback } from "react";

import "./Dropdown.css";

const Dropdown = ({
    label,
    options,
    value,
    name,
    onChange,
    isClearable,
    placeholder,
    disabled,
    ...props
}) => {
    const handleChange = useCallback(
        (e) => {
            onChange(e, e.currentTarget.value);
        },
        [onChange]
    );
  
    return (
        <div className="Dropdown">
            <label htmlFor={name}>{label}</label>
      
            <select
                id={name}
                {...{name, value, disabled}}
                onChange={handleChange}
                {...props}
            >
                {isClearable && (
                    <option value={null}>{placeholder || "Select option..."}</option>
                )}
                
                {options.map((option) => (
                    <option key={option.value}>{option.label}</option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
