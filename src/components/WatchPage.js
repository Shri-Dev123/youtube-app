import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { menuClose } from "../utilities/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
const WatchPage = () => {
    const [searchParams] = useSearchParams();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(menuClose());
    }, []);

    return (
        <div className="flex flex-wrap flex-row gap-1 mt-20 ml-24 pl-2">
            <div className="px-5 flex">
                <div>
                    <iframe
                        width="650"
                        height="400"
                        src={
                            "https://www.youtube.com/embed/" +
                            searchParams.get("v")
                        }
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullscreen
                    ></iframe>
                </div>
                <div className=" flex flex-col ml-2 w-96">
                    <LiveChat />
                </div>
            </div>
            <CommentsContainer />
        </div>
    );
};

export default WatchPage;
