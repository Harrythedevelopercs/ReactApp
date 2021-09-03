import React from "react";
import { Col, Container, Row } from "react-grid-system";
import Logo from '../Assets/images/web-01.png'

export default class NavBar extends React.Component {
    render() {
        return (
            <>
                <div className="NavBar-Header">
                    <Container>
                        <Row>
                            <Col md={2}>
                                <img src={Logo} className="imglogo" />
                            </Col>
                            <Col md={10}>
                                <div className="NavBar-Wrap">
                                    <ul className="NavBar-ul">
                                        <li>
                                            <a href="#">Home</a>
                                        </li>
                                        <li>
                                            <a href="#">Services</a>
                                        </li>
                                        <li>
                                            <a href="#">Technologies</a>
                                        </li>
                                        <li>
                                            <a href="#">Packages</a>
                                        </li>
                                        <li>
                                            <a href="#">About Us</a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                Contact Us
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#" className="StartChatButton">
                                                Start Chat
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </>
        )
    }
}