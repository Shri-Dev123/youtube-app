import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utilities/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utilities/Helper";
const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    useEffect(() => {
        let intervalTimer = setInterval(() => {
            //Api Polling
            dispatch(
                addMessage({
                    name: generateRandomName(),
                    message: generateRandomMessage(),
                })
            );
        }, 2000);

        return () => {
            clearInterval(intervalTimer);
        };
    }, []);
    return (
        <div className="h-4/6 flex absolute">
            <div className="p-2 flex flex-col gap-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll">
                {chatMessages.map((c, index) => (
                    <ChatMessage
                        key={index}
                        name={c.name}
                        message={c.message}
                    />
                ))}
            </div>
        </div>
    );
};

export default LiveChat;
