import React, { useRef, useState } from "react";

const Demo2 = () => {
    let x = 0;
    const [y, setY] = useState(0);
    const Ref = useRef(0);

    /**
     * not like Ref ===> Ref = 0;
     *
     * it's like Ref = {current:0 }
     *
     */
    console.log("Rendering.....");
    return (
        <div className=" ml-2 mt-16 w-96 h-96 border border-black">
            <h1 className="ml-2 font-bold text-xl">useRef Example</h1>
            <div>
                <button
                    className="bg-green-100 p-2 m-4"
                    onClick={() => {
                        x = x + 1;
                        console.log("X=" + x);
                    }}
                >
                    increase x
                </button>
                <span className="font-bold text-xl">Let {x}</span>
            </div>
            <div>
                <button
                    className="bg-green-100 p-2 m-4"
                    onClick={() => {
                        setY(y + 1);
                    }}
                >
                    increase y
                </button>
                <span className="font-bold text-xl">State {y}</span>
            </div>
            <div>
                <button
                    className="bg-green-100 p-2 m-4"
                    onClick={() => {
                        Ref.current = Ref.current + 1;
                        console.log("Ref=" + Ref.current);
                    }}
                >
                    increase Ref
                </button>
                <span className="font-bold text-xl">Ref {Ref.current}</span>
            </div>
        </div>
    );
};

export default Demo2;
