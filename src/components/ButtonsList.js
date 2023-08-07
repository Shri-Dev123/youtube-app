import React from "react";
import Button from "./Button";

const ButtonsList = () => {
    return (
        <div className="flex w-full mt-2 bg-white flex-row items-center fixed gap-3 ml-20 p-4 z-0">
            <Button title={"All"} />
            <Button title={"React Router"} />
            <Button title={"Music"} />
            <Button title={"Hollywood"} />
            <Button title={"Bollywod"} />
            <Button title={"Tests"} />
            <Button title={"Filmy"} />
            <Button title={"News"} />
            <Button title={"Sports"} />
            <Button title={"Regional"} />
            <Button title={"Kids"} />
            <Button title={"code"} />
            <Button title={"javascript"} />
            <Button title={"react"} />
            <Button title={"webpack"} />
        </div>
    );
};

export default ButtonsList;
