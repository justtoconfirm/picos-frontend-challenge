import React, { useCallback } from "react";
import PropTypes from "prop-types";

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

Dropdown.propTypes = {
    label: PropTypes.string,
    options: PropTypes.string,
    value: PropTypes.string,
    name: PropTypes.string,
    onChange: PropTypes.func,
    isClearable: PropTypes.bool,
    disabled: PropTypes.bool
};

export default Dropdown;
