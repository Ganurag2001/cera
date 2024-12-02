// MultiSelect.js
import React, { useState } from 'react';

const MultiSelect = ({ options, selectedOptions, onChange }) => {
    const handleOptionChange = (event) => {
        const { value, checked } = event.target;
        let updatedSelection = [...selectedOptions];

        if (checked) {
            updatedSelection.push(value);
        } else {
            updatedSelection = updatedSelection.filter(option => option !== value);
        }

        onChange(updatedSelection);
    };

    return (
        <div>
            {options.map((option, index) => (
                <div key={index}>
                    <input
                        type="checkbox"
                        value={option}
                        checked={selectedOptions.includes(option)}
                        onChange={handleOptionChange}
                    />
                    <label>{option}</label>
                </div>
            ))}
        </div>
    );
};

export default MultiSelect;
