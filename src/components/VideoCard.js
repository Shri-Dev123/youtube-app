import React from "react";

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { localized, thumbnails, channelTitle } = snippet;
    const { title } = localized;
    const { viewCount } = statistics;
    return (
        <div className="flex flex-col p-2 m-2 w-64 shadow-lg cursor-pointer">
            <img
                className="rounded-xl"
                src={thumbnails.medium.url}
                alt="thumbnail"
            />
            <ul className="flex flex-col">
                <li className="font-bold py-2">{title}</li>
                <li>{channelTitle}</li>
                <li>{viewCount} views</li>
            </ul>
        </div>
    );
};

export default VideoCard;
