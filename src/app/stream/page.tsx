"use client"
import { sendCapture } from "@/lib/llm/llmClient";
import { CaptureImage } from "@/lib/llm/types";
import React, { useEffect, useState } from "react";

const StreamPage = () => {
    // const [tempChat, setTempChat] = useState<string[]>([]);
    const [chat, setChat] = useState<string>("");

    // useEffect(() => {
    //   // setChat(tempChat.map(tc => JSON.parse(tc || "{}")?.choices[0]?.delta || "").join(""));
    // }, [tempChat])

    const image: CaptureImage = {mime: "image/png", data: "dataBase64"};

    return (
        <div>
            <h1>Stream</h1>
            <div>{chat.split("content\":\"").splice(1).map(c => (
              <>{c.split("\"},\"index\"")[0]}</>
            ))}</div>
            <button onClick={() => sendCapture(image, (text) => {
              setChat(text);
            })}>GET</button>
        </div>
    )
}

export default StreamPage;