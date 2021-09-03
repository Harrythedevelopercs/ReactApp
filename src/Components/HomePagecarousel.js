import React from "react";
import { Col, Container, Row } from "react-grid-system";
import { Carousel } from 'react-responsive-carousel';

export default class HomePagecarousel extends React.Component {
    render() {
        return (
            <>
                <Container>
                    <Row>
                        <Col md={4} className="Homapage-Carousel">
                            <p>Companies we helped build</p>
                        </Col>
                        <Col md={8} className="Homapage-Carousel">
                            <Carousel>
                                <div>

                                    <p className="legend">Legend 1</p>
                                </div>
                                <div>

                                    <p className="legend">Legend 2</p>
                                </div>
                                <div>

                                    <p className="legend">Legend 3</p>
                                </div>
                            </Carousel>
                        </Col>
                    </Row>
                </Container>
            </>
        )
    }
}