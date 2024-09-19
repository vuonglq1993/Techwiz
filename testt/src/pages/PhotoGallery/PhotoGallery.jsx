import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Gallery from "../../components/Gallery/Gallery";
<<<<<<< HEAD
=======
import AdvanceSearch from "../../components/AdvanceSearch/AdvanceSearch";
>>>>>>> origin/main
import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";

const PhotoGallery = () => {
  useEffect(() => {
    document.title = " Gallery   ";
    window.scroll(0, 0);
  }, []);

  return (
<<<<<<< HEAD
    <>
      <Breadcrumbs title="Gallery" pagename="Gallery" />
      <section className="py-5" style={{ overflow: "hidden" }}>
        <Container>
          <Row>
            <Col>
              <Gallery />
            </Col>
          </Row>
        </Container>
      </section>
    </>
=======
      <>
          <Breadcrumbs title="Gallery" pagename="Gallery" />
          <AdvanceSearch />
          <section className="py-5" style={{ overflow: "hidden" }}>
              <Container>
                  <Row>
                      <Col>
                          <Gallery />
                      </Col>
                  </Row>
              </Container>
          </section>
      </>
>>>>>>> origin/main
  );
};

export default PhotoGallery;
