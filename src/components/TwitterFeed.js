import React from "react";
import {TwitterTimelineEmbed} from "react-twitter-embed";

export const TwitterFeed = () => (
    <TwitterTimelineEmbed
        sourceType="profile"
        screenName="Typewritergg"
        options={{height: "100vh"}}
        nofooter
        noboarders
    />
)
