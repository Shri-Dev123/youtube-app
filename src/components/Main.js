import React from "react";
import ButtonsList from "./ButtonsList";
import VideoContainer from "./VideoContainer";

const Main = () => {
    return (
        <div className="flex flex-col mt-12">
            <ButtonsList />
            <VideoContainer />
        </div>
    );
};

export default Main;
