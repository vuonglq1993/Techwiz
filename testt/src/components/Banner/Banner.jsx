import React from "react";
<<<<<<< HEAD
import { Carousel } from "react-bootstrap";
import sliderImg from "../../assets/images/slider/1.png";
import sliderImg1 from "../../assets/images/slider/2.png";
import "../Banner/banner.css"
=======
import "../Banner/banner.css";
import bannervideo from "../../assets/video/bannervideo.mp4";
>>>>>>> origin/main

const Banner = () => {
  return (
    <>
      <section className="slider">
<<<<<<< HEAD
        <Carousel variant="dark">
          <Carousel.Item>
            <img src={sliderImg} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  JOURNEY TO <span>EXPLORE WORLD</span>
                </h5>
                <p className="sub_text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={sliderImg1} className="d-block w-100" alt="First slide" />
            <Carousel.Caption>
              <div className="slider_des">
                <h5 className="heading">
                  BEAUTIFUL PLACE <span>TO VISIT</span>
                </h5>
                <p className="sub_text">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s,
                </p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
=======
        <div className="video-wrapper">
        <video
            width="100%"
            height="500"
            src={bannervideo}
            type="video/mp4"
            autoPlay
            muted
            loop
            controls={false}
          >
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="slider_des">
          <h5 className="heading">
            {/* JOURNEY TO <span>EXPLORE WORLD</span> */}
          </h5>
          <p className="sub_text">
            {/* Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. */}
          </p>
        </div>
>>>>>>> origin/main
      </section>
    </>
  );
};

export default Banner;
