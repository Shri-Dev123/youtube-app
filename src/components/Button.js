import React from "react";

const Button = ({ title }) => {
    return (
        <div>
            <button
                className="bg-gray-200 p-1 rounded-md tex-sm active:bg-black active:text-white"
                type="submit"
            >
                {title}
            </button>
        </div>
    );
};

export default Button;
