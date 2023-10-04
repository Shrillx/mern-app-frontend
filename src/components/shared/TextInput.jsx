import React from "react";
const TextInput = ({
    label,
    placeholder,
    className,
    value,
    setValue,
    labelClassName,
}) => {
    return (
        <div
            className={`textInputDiv flex flex-col space-y-2 w-full ${className}`}
        >
            <label for={label} className={`font-semibold ${labelClassName}`}>
                {label}
            </label>
            <input
                type="text"
                placeholder={placeholder}
                className="p-3 border border-gray-400 border-solid border-opacity-10 rounded placeholder-gray-500 text-white bg-transparent"
                id={label}
                value={value}
                onChange={(e)=>{setValue(e.target.value)}}

            />
        </div>
    );
};

export default TextInput;