import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utilities/chatSlice";
import { generateRandomMessage, generateRandomName } from "../utilities/Helper";
const LiveChat = () => {
    const dispatch = useDispatch();
    const chatMessages = useSelector((store) => store.chat.messages);
    const [liveMessage, setLiveMessage] = useState("");
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
        <>
            <div className="h-96 flex flex-col">
                <div className="p-2 flex  gap-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex-col-reverse">
                    {chatMessages.map((c, index) => (
                        <ChatMessage
                            key={index}
                            name={c.name}
                            message={c.message}
                        />
                    ))}
                </div>
                {/* {console.log(chatMessages)} */}
            </div>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(
                        addMessage({
                            name: "shrikant",
                            message: liveMessage,
                        })
                    );
                    setLiveMessage("");
                }}
                className="w-full flex gap-1 mt-2 p-2 border border-black"
            >
                <input
                    className="w-80 p-2 border border-black"
                    type="text"
                    placeholder="Type a Message"
                    value={liveMessage}
                    onChange={(e) => setLiveMessage(e.target.value)}
                />
                <button className="bg-green-100 hover:bg-black hover:text-white px-1 rounded-lg border border-black">
                    Send
                </button>
            </form>
        </>
    );
};

export default LiveChat;
