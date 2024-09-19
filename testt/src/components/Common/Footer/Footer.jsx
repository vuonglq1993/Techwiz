<<<<<<< HEAD
import React, { useState } from "react";
import "../Footer/footer.css"
import { Col, Container, Row ,ListGroup} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const Footer = () => {
  const [visible, setVisible]=useState(false);

  const toggleVisible=()=>{
    const scrolled = document.documentElement.scrollTop;
    if(scrolled > 300){
      setVisible(true)
    }
   else if(scrolled  <= 300){
      setVisible(false)
    }
  }

  const scrollTop =()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

  if(typeof window !== "undefined"){
    window.addEventListener("scroll", toggleVisible)
  }


  return (
    <>
    <footer className="pt-5">
      <Container>
        <Row>
          <Col md="3" sm="12" className="quick_link mt-3 mt-md-0 ">
            <h4 className="mt-lg-0 mt-sm-3">Company </h4>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <NavLink to="/">About Us</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
              <NavLink to="/">News</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
              <NavLink to="/">Faq</NavLink>
              </ListGroup.Item>
             
            </ListGroup>
          </Col>
          <Col md="3" sm="12" className="quick_link mt-3 mt-md-0 ">
          <h4 className="mt-lg-0 mt-sm-3">Explore </h4>
          <ListGroup variant="flush">
              <ListGroup.Item>
                <NavLink to="/"> Faq</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
              <NavLink to="/">Tour Listings</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
              <NavLink to="/"> Destination</NavLink>
              </ListGroup.Item>
             
            </ListGroup>
          </Col>
          <Col md="3" sm="12" className="quick_link mt-3 mt-md-0 ">
          <h4 className="mt-lg-0 mt-sm-3">Quick Link </h4>
          <ListGroup variant="flush">
              <ListGroup.Item>
                <NavLink to="/"> Home</NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
              <NavLink to="/">About Us </NavLink>
              </ListGroup.Item>
              <ListGroup.Item>
              <NavLink to="/"> Contact Us </NavLink>
              </ListGroup.Item>
             
            </ListGroup>
          </Col>
          <Col md="3" sm="12" className="location mt-3 mt-md-0 ">
          <h4 className="mt-lg-0 mt-sm-3">Contact Info </h4>

          <div className="d-flex align-items-center">
            <p className="pb-2"> Dehradun, Uttarakhand, India</p>
          </div>

          <div className="d-flex align-items-top my-2">
          <i className="bi bi-geo-alt me-3"></i>
          <a target="_blank" href="mailto:rawatcoder@gmail.com" className="d-block" >rawatcoder@gmail.com</a>
          </div>
          <div className="d-flex align-items-top ">
          <i className="bi bi-telephone me-3"></i>
          <a target="_blank" href="tel:9876543210" className="d-block" >9876543210</a>
          </div>
         
          </Col>
        </Row>
        <Row className="py-2 bdr mt-3">
        <Col className="col copyright">
        <p className="text-light">   @ 2024. rawatcoder All rights reserved </p> 
        </Col>
        </Row>

      </Container>
    </footer>

    <div id="back-top"
    onClick={scrollTop}
     className={visible ? "active" : ""}>
    <i className="bi bi-arrow-up"></i>

    </div>
    </>
=======
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
>>>>>>> origin/main
  );
};

export default Footer;
