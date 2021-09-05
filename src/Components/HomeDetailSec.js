import React from "react";
import { Col, Container, Row } from "react-grid-system";
import client1 from "../Assets/images/programs/1.jpg";
import client2 from "../Assets/images/programs/2.jpg";
import client3 from "../Assets/images/programs/3.jpg";
import client4 from "../Assets/images/programs/4.jpg";
import client5 from "../Assets/images/programs/5.jpg";
import client6 from "../Assets/images/programs/6.jpg";
import Slider from "react-slick";
export default class HomeDetailSec extends React.Component {
    constructor() {
        super();
        this.state = {
            settings: {
                infinite: true,
                speed: 500,
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        };
    }
    render() {
        return (
            <>
                <section className="HomeDetailSection">
                    <Container className="HomeDetailSectionContainer">
                        <Col className="HomeDetailSecCol">
                            <h1 className="HomeDetailSectionHeading">We create custom website, Web apps and software that delivers on your business goals.</h1>
                        </Col>
                        <Row>
                            <Col className="COl-1">
                                <p>We create responsive web applications and sites leveraging the most robust technologies in the industry to help you boost your business – the unique value proposition you deliver to your customers – with a bespoke, custom-crafted websites, web apps and products (that only you have access to) without worrying about or managing any of the technical details</p>
                            </Col>
                            <Col className="COl-1">
                                <p>We’re a full-cycle web and mobile application development company creating solutions for mobiles, desktops and wearables. At TheWebeez, we cultivate deep, probing insights about your business and how web, mobile, database and IoT technology could multiply and accelerate your organization’s worldwide impact.</p>
                            </Col>
                            <Col md={12} className="coro-slider-container">
                                <Slider {...this.state.settings}>
                                    <div className="client-div">
                                        <img src={client1} />
                                        <h4 className="h4c">Website <br /> Maintainance</h4>

                                    </div>
                                    <div className="client-div">
                                        <img src={client2} />
                                        <h4 className="h4c">Mobile Application Development</h4>
                                    </div>
                                    <div className="client-div">
                                        <img src={client3} />
                                        <h4 className="h4c">Backend Development</h4>
                                    </div>
                                    <div className="client-div">
                                        <img src={client4} />
                                        <h4 className="h4c">Website <br /> Development</h4>
                                    </div>
                                    <div className="client-div">
                                        <img src={client5} />
                                        <h4 className="h4c">E-commerce Development</h4>
                                    </div>
                                    <div className="client-div">
                                        <img src={client6} />
                                        <h4 className="h4c">Wordpress Development</h4>
                                    </div>

                                </Slider>
                            </Col>

                        </Row>
                    </Container>
                </section>
            </>
        );
    }

}