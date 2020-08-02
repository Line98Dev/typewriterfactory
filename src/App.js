import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/App.scss';
import './css/App.css'
import {About, InProgress, NavMenu, Stream, TwitterFeed} from "./components";
import {Col, Container, Row} from "react-bootstrap";

function App() {
    return (
        <div className="App bg-dark text-white">
            <NavMenu/>
            <Container>
                <InProgress/>
            </Container>
            <Stream/>
            <hr className={"d-none d-md-block my-4"} style={{backgroundColor: "#9147ff", maxWidth: "95vw"}}/>
            <Container fluid={"sm"}>
                <Row className="Twitter">
                    <Col sm={{span: "auto", offset: 0, order: "last"}} lg={{span: "auto", offset: 0, order: "first"}}>
                        <TwitterFeed/>
                    </Col>
                    <Col md="auto">
                        <About/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
