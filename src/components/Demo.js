import React, { useMemo, useState } from "react";
import { findPrime } from "../utilities/Helper";

const Demo = () => {
    const [inputText, setInputText] = useState(0);
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const prime = useMemo(() => findPrime(inputText), [inputText]);
    return (
        <div
            className={
                "ml-28 mt-16 w-96 h-96 border border-black " +
                (isDarkTheme && "bg-gray-700 text-white")
            }
        >
            <h1 className="font-bold text-xl ml-2">useMemo Example</h1>
            <div className="flex flex-col">
                <div>
                    <button
                        className="p-2 m-2 bg-green-100 text-black"
                        onClick={() => setIsDarkTheme(!isDarkTheme)}
                    >
                        {isDarkTheme ? "Light" : "Dark"}
                    </button>
                </div>
                <div>
                    <input
                        className="border border-black text-black px-2 m-2 w-72"
                        type="number"
                        placeholder="Type number"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                    />
                </div>
            </div>
            <span>The Nth Prime Number is: {prime}</span>
        </div>
    );
};

export default Demo;
