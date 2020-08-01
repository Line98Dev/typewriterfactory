import {Alert} from "react-bootstrap";
import React, {useState} from "react";

export function InProgress() {
    const [show, setShow] = useState(true);

    if (show) {
        return (
            <Alert variant="warning" onClose={() => setShow(false)} dismissible className={"text-center"}>
                This site is still in heavy development. <Alert.Link href="https://www.twitch.tv/typewriterfactory">Check
                out Typewriter on Twitch</Alert.Link> for the best viewing experience for now.
            </Alert>
        );
    }
    return null;
}
