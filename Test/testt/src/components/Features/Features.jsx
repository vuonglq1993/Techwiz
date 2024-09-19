import React from "react";
import "../Features/features.css";

import feature5 from "../../assets/images/feature/preview.png";

import { Card, Col, Container, Row } from "react-bootstrap";



const Features = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay:false,
    autoplaySpeed:1500,
    slidesToShow: 4,
    slidesToScroll: 1,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          autoplay: true,
          prevArrow:false,
          nextArrow:false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow:false,
          nextArrow:false,
        },
      },
    ],
  };

  
  return (
    <>
    
      <section className="feature-section">
        <Container>
          <Row>
            <Col lg = "6" md="6" sm = "12">
            <div className="image-container">

              <img src={feature5} className="img-fluid hover-image"></img>
              </div>
            </Col>
            <Col lg = "6" md="6" sm = "12">
              <p className="fs-6 m-3"><strong>lorem</strong></p>
              <p className="fs-3 m-3"><strong>lorem</strong></p>
            <p className = "fs-6 m-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at fermentum nibh, at porttitor dui. Nulla rutrum rutrum consectetur. Etiam quis dui sit amet augue tempus mattis. Nam dictum maximus elit, at laoreet mi fermentum porta. Praesent ac dolor ante. Mauris dapibus elementum nisi a egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris maximus iaculis purus, eget fermentum ante viverra ac. Pellentesque ut fringilla nulla, sed pharetra odio. Suspendisse at facilisis risus, non finibus est. Donec imperdiet sit amet purus a accumsan. Etiam maximus mollis mi, in tempus urna convallis nec. Pellentesque lectus tellus, sagittis vitae commodo ac, tincidunt id neque.</p>
            <Row>
              <Col md="6">
                <p className="text-success fs-1 mt-5 ms-2">10000+</p>
                <p className="fs-6 mt-3 ms-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-success fs-1 mt-5 ms-2">10000+</p>
                <p className="fs-6 mt-3 ms-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Col>
              <Col md="6">
                <p className="text-success fs-1 mt-5 ms-2">10000+</p>
                <p className="fs-6 mt-3 ms-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p className="text-success fs-1 mt-5 ms-2">10000+</p>
                <p className="fs-6 mt-3 ms-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Col>
            </Row>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Features;
