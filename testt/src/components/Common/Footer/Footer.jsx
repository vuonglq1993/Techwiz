import React from "react";
import "../Footer/footer.css";
import { Col, Container, Row, ListGroup } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col md="4" sm="12" className="footer_col">
            <h4>About us</h4>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <NavLink to="/">About TravelSmart</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
                <NavLink to="/news">News</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
                <NavLink to="/">Reviews</NavLink>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md="4" sm="12" className="footer_col">
            <h4>Explorer</h4>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <NavLink to="/">Tours Listing</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
                <NavLink to="/">Top Places</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
                <NavLink to="/">Gallery</NavLink>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md="2"></Col>
          <Col md="2" sm="12" className="footer_col">
            <h4>Quicklink</h4>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <NavLink to="/">Home</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
                <NavLink to="/">About Us</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
                <NavLink to="/">Contact</NavLink>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>

        <Row className="footer_bottom align-items-center">
          <Col md="4" sm="12" className="text-md-start text-center footer_language_select_wrapper">
            <select className="footer_language_select">
              <option value="en">English</option>
              <option value="vi">Vietnamese</option>
            </select>
          </Col>

          <Col md="4" sm="12" className="text-center copyright">
            <p>Copyright 2024 © by Group 1 T2403M Aptech HaNoi</p>
          </Col>
        
          <Col md="4  " sm="12" className="text-md-end text-center footer_social_icons">
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="bi bi-facebook"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="bi bi-instagram"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="bi bi-pinterest"></i></a>
            <a href="#" target="_blank" rel="noopener noreferrer"><i className="bi bi-whatsapp"></i></a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
