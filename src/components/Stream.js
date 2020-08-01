import React from "react";
import {TwitchEmbed} from "react-twitch-embed";

export const Stream = () => (
    <div className="App-stream">
        <TwitchEmbed
            channel={"typewriterfactory"}
            theme={"dark"}
            width={"95vw"}
            height={"95vh"}
            className={"mx-auto"}
        />

    </div>
)
