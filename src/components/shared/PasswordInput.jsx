import React from "react";
const TextInput = ({label, placeholder, value, setValue}) => {
    return (
        <div className="textInputDiv flex flex-col space-y-2 w-full">
            <label for={label} className="font-semibold">
                {label}
            </label>
            <input
                type="password"
                placeholder={placeholder}
                className="p-3 border border-gray-400 border-solid border-opacity-10 rounded placeholder-gray-500 text-white bg-transparent focus:border-red-600 "

                value={value}
                onChange={(e)=>{setValue(e.target.value)}}
            />
        </div>
    );
};

export default TextInput;