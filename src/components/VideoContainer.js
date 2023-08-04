import React, { useEffect, useState } from "react";
import { YOUTUBE_API_URL } from "../constants/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoContainer = () => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        fetchVideoData();
    }, []);

    const fetchVideoData = async () => {
        const response = await fetch(YOUTUBE_API_URL);
        const data = await response.json();
        setVideos(data.items);
        console.log(videos);
    };
    return (
        <div className="flex flex-wrap gap-1 mt-14 ml-20 pl-2">
            {videos.map((video) => (
                <Link to={"/watch?v=" + video.id}>
                    <VideoCard key={video.id} info={video} />
                </Link>
            ))}
        </div>
    );
};

export default VideoContainer;
