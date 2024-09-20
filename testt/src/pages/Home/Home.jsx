import React from "react";
import Banner from "../../components/Banner/Banner";
import AdvanceSearch from "../../components/AdvanceSearch/AdvanceSearch";
import Features from "../../components/Features/Features";
import { Container, Row, Col } from "react-bootstrap";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./home.css";
import Footerapp from "../../assets/images/footerapp/footerapp.png";
import Gallery from "../../components/Gallery/Gallery";
import Cards from "../../components/Cards/Cards";
import { destinationsData, popularsData } from "../../utils/data";
import PopularCard from "../../components/Cards/PopularCard";


const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
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
          autoplay: true,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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
          prevArrow: false,
          nextArrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          prevArrow: false,
          nextArrow: false,
        },
      },
    ],
  };

  return (
    <>
      <Banner />
      <AdvanceSearch />
      <Features />

      <section className="tours_section slick_slider">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
                <p className="fs-2 text-uppercase"> Top places</p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col md="12">
              <Slider {...settings}>
                {destinationsData.map((destination, inx) => {
                  return <Cards destination={destination} key={inx} />;
                })}
              </Slider>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="popular py-5">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
              <p className="fs-2 text-uppercase"> Popular Tours</p>
              </div>
            </Col>
          </Row>
          <Row>
            {popularsData.map((val, inx) => {
              return (
                <Col md={3} sm={6} xs={12} className="mb-5" key={inx}>
                  <PopularCard val={val} />
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section className="call_us">
        <Container>
          <Row className="align-items-center">
            <Col md="8">
              <h5 className="title">CALL TO ACTION</h5>
              <h2 className="heading">
                READY FOR UNFORGATABLE TRAVEL. REMEMBER US!
              </h2>
              <p className="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s,{" "}
              </p>
            </Col>
            <Col md="4" className="text-center mt-3 mt-md-0">
              <a
                href="tel:6398312365"
                className="secondary_btn bounce"
                rel="no"
              >
                {" "}
                Contact Us !
              </a>
            </Col>
          </Row>
        </Container>
        <div className="overlay"></div>
      </section>

      <section className="gallery">
        <Container>
          <Row>
            <Col md="12">
              <div className="main_heading">
              <p className="fs-2 text-uppercase"> experience</p>
              </div>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Gallery />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="download">
        <Container>
          <Row className="align-items-center mb-5">
            <Col md="6">
              <p className="fs-2">Download the <strong>TRAVELSMART</strong> app</p>
              <p className="fs-4">and discover special object anytime, anywhere</p>
              <Row>
                <Col md="6">
                  <div><a href="/" tabIndex="0"><img class="bn46" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="bn45" /></a>
                  </div>
                </Col>
                <Col md="6">
                  <div><a href="/" tabIndex="0"><img class="bn45" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/2560px-Google_Play_Store_badge_EN.svg.png" alt="bn45" /></a></div>
                </Col>
              </Row>
            </Col>
            <Col md="6">
              <img src={Footerapp} className="img-fluid"></img>            
              </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
