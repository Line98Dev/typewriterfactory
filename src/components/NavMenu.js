import React from "react";
import {Navbar, Nav, Container} from 'react-bootstrap';
import logo from './images/Typewriter-Circle.png'

export const NavMenu = () => (
    <Navbar bg="primary" variant="dark" className="App-header">
        <Container>
            <Navbar.Brand>
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                <span className={"p-3"}>
                Typewriterfactory
            </span>
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="https://www.twitch.tv/typewriterfactory">Twitch</Nav.Link>
                <Nav.Link href="https://twitter.com/Typewritergg">Twitter</Nav.Link>
            </Nav>
        </Container>
    </Navbar>
)
