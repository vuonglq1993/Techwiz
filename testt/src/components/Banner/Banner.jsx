import React from "react";
import "../Banner/banner.css";
import bannervideo from "../../assets/video/bannervideo.mp4";

const Banner = () => {
  return (
    <>
      <section className="slider">
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
      </section>
    </>
  );
};

export default Banner;
