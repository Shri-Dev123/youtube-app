import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { menuClose } from "../utilities/appSlice";
import { useSearchParams } from "react-router-dom";
const WatchPage = () => {
    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(menuClose());
    }, []);

    return (
        <div className="flex flex-wrap gap-1 mt-20 ml-24 pl-2">
            <iframe
                width="650"
                height="400"
                src={"https://www.youtube.com/embed/" + searchParams.get("v")}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullscreen
            ></iframe>
        </div>
    );
};

export default WatchPage;
