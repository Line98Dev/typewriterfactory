import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/App.scss';
import {NavMenu, Stream} from "./components";
import {Alert, Container} from "react-bootstrap";

function App() {
    return (
        <div className="App bg-dark">
            <NavMenu/>
            <Container>
                <Alert variant="warning" className={"text-center"}>
                    This site is still in heavy development. <Alert.Link href="https://www.twitch.tv/typewriterfactory">Check
                    out Typewriter on Twitch</Alert.Link> for the best viewing experience for now.
                </Alert>
            </Container>
            <Stream/>
        </div>
    );
}

export default App;
