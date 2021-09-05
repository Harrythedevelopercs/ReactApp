import React from "react";
import { Col, Container, Row } from "react-grid-system";

import client1 from "../Assets/images/clients01.png";
import client2 from "../Assets/images/clients02.png";
import client3 from "../Assets/images/clients03.png";
import client4 from "../Assets/images/clients04.png";
import client5 from "../Assets/images/clients05.png";
import client6 from "../Assets/images/clients06.png";

import Slider from "react-slick";
export default function SimpleSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow:false,
  };
  return (
    <section className="new-seciont-home">
      <Container maxWidth="sm" className=" Home-carousel-con">
      <Row >
        <Col md={3} >
          <div className="heading-content-client">
            <h3>Companies we helped build</h3>
          </div>
        </Col>
        <Col md={9}>
          <Slider {...settings}>
            <div className="client-div">
              <img src={client1} className="client-logo" />
            </div>
            <div className="client-div">
              <img src={client2} className="client-logo" />
            </div>
            <div className="client-div">
              <img src={client3} className="client-logo" />
            </div>
            <div className="client-div">
              <img src={client4} className="client-logo" />
            </div>
            <div className="client-div">
              <img src={client5} className="client-logo" />
            </div>
            <div className="client-div">
              <img src={client6} className="client-logo" />
            </div>
          </Slider>
        </Col>
      </Row>
    </Container>
    </section>
   
  );
}
