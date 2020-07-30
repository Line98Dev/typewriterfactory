import React from "react";
import {TwitchEmbed} from "react-twitch-embed";

export const Stream = () => (
    <div className="App-stream">
        <TwitchEmbed channel={"typewriterfactory"} theme={"dark"} width={"100vw"} height={"90vh"}/>

    </div>
)
