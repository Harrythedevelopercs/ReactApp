import React from "react";
import { Col, Container } from "react-grid-system";
import BannerImager from '../Assets/images/section-banner.jpg';


const containerStyle = {
    width: "100%",
    height: "200px",
}

export default class HomeBanner extends React.Component {


    render() {
        return (
            <>
                <div className="HomePage-Banner" style={{
                    backgroundImage: `url(${BannerImager})`
                }}>
                    <Container style={containerStyle} >
                        <Col md={5} style={{
                            left: "15%",
                            top: "70%"
                        }}>
                            <div className="HomePage-Banner-Wrap">
                                <div className="HomePage-Banner-Content">
                                    <h1>DEVELOP WEBSITES AND APPS FOR YOUR BUSINESS</h1>
                                    <p>Uniquely showcase your brand and provide a great user experience on all devices. Creative Web Design Studio from New York.</p>
                                </div>
                            </div>
                        </Col>
                    </Container>
                </div>
            </>
        )
    }
}