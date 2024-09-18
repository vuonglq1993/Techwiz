import React, { useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../About/about.css";
import img01 from '../../assets/images/new/01.jpg';


const News = () => {

  useEffect(()=>{
    document.title ="News"
    window.scroll(0, 0)
  },[])

  return (
    <>
      <Breadcrumbs title="Travel News" pagename="News" />
      <section className="py-5">
        <Container>
        <div className="news-page">
      <h1 className="h1">Bali Travel Guide</h1>

      {/* Sử dụng iframe để nhúng bài viết */}
      <a
          href="https://www.travelandleisure.com/travel-guide/bali"
          target="_blank"
          rel="noopener noreferrer"
        ><img className="w-50" src={img01} alt="bali titi" /></a>
      <p>
        Check out this travel guide for Bali on Travel & Leisure:{" "}
        <a
          href="https://www.travelandleisure.com/travel-guide/bali"
          target="_blank"
          rel="noopener noreferrer"
        >
          Bali Travel Guide
        </a>
      </p>
    </div>
        </Container>
      </section>
    </>
  );
};

export default News;
