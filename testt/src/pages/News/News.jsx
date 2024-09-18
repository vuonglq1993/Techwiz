import React, { useEffect } from "react";
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../About/about.css";
import img01 from "../../assets/images/new/01.jpg";
import img04 from "../../assets/images/new/04.jpg";

const News = () => {
  const articles = [
    {
      id: 1,
      title: "Travel Guide Bali",
      img: img01,
      link: "https://www.travelandleisure.com/travel-guide/bali",
      desc: "Check out this travel guide for Bali on Travel & Leisure ",
    },
    {
      id: 2,
      title:
        "The Best (and Worst) Times to Visit Vietnam, According to Experts",
      img: img04,
      link: "https://www.travelandleisure.com/best-times-to-visit-vietnam-8546761",
      desc: "Here's when to visit Vietnam for sunny weather, lower prices, and excellent sightseeing",
    },
  ];
  useEffect(() => {
    document.title = "News";
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Breadcrumbs title="Travel News" pagename="News" />
      <section className="py-5">
        <Container>
          <h1 className="h1 my-4">Latest Travel News</h1>

          <Row>
            {articles.map((article) => (
              <div
                className="col-md-4 d-flex align-items-stretch"
                key={article.id}
              >
                {" "}
                {/* Mỗi bài viết chiếm 1/3 màn hình */}
                <div className="card mb-4 d-flex flex-column h-100">
                  {" "}
                  {/* Dùng flex để căn chiều cao */}
                  <img
                    src={article.img}
                    className="card-img-top"
                    alt={article.title}
                  />{" "}
                  {/* Ảnh bài viết */}
                  <div className="card-body flex-grow-1">
                    <h5 className="card-title">{article.title}</h5>
                    <p className="card-text">{article.desc}</p>
                  </div>
                  <div className="card-footer">
                    <a
                      href={article.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary w-33.3"
                    >
                      Read More
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default News;
