import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { Col, Container, Row } from "react-grid-system";

export default class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            licontent1: " The Webeez has a new face.                   Share your feedback about the new face of 'The Webeez'",
            licontent2: "Live Chat"
        }
    }
    render() {
        return (
            <>
                <div className="Main-Header">
                    <div className="top-bar">
                        <Container>
                            <Row>
                                <Col md={7}>
                                    <marquee>
                                        {this.state.licontent1}
                                    </marquee>
                                </Col>
                                <Col md={5}>
                                    <div className="ContactNumber">
                                        <ul className="Topbar-Menu">
                                            <li>
                                                <a href="tel:+1-929-220-2350"> <FontAwesomeIcon icon={faPhoneAlt} /> +1-929-220-2350</a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    {this.state.licontent2}
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
                                                    Get Started
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </>
        );
    }
}