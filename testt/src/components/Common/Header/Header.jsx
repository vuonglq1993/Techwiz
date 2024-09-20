import React, { useEffect, useState } from "react";
import {
  Container,
  Navbar,
  Offcanvas,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import BookingModal from "../../Booking Modal/BookingModal";
import logo from "../../../assets/images/logo/Logo.png";
import "../Header/header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };


  const closeMenu = () => {
    if (window.innerWidth <= 991) {
      setOpen(false);
    }
  };

  return (
    <header className="header-section">
        <Navbar expand="lg" className="p-0 d-flex justify-content-between align-items-center">
          {/* Logo Section */}
          <Navbar.Brand>
            <NavLink to="/">
              <img src={logo} alt="Travel Smart" className="logo" />
            </NavLink>
          </Navbar.Brand>
          {/* End Logo Section */}

          {/* Navbar Links */}
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
            show={open}
          >
            <Offcanvas.Header>
              <h1 className="logo">TravelSmart</h1>
              <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                <i className="bi bi-x-lg"></i>
              </span>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <NavLink className="nav-link" to="/" onClick={closeMenu}>Home</NavLink>
                <NavLink className="nav-link" to="/about-us" onClick={closeMenu}>ABOUT US</NavLink>
                <NavLink className="nav-link" to="/tours" onClick={closeMenu}>TOURS</NavLink>
                <NavLink className="nav-link" to="/top-place" onClick={closeMenu}>TOP PLACE</NavLink>
                <NavLink className="nav-link" to="/gallery" onClick={closeMenu}>GALLERY</NavLink>
                <NavLink className="nav-link" to="/contact-us" onClick={closeMenu}>CONTACT</NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
          {/* End Navbar Links */}

          {/* Book Now Button */}
          <div className="ms-md-4 ms-2 book-now-btn">
            <NavLink className="primaryBtn d-none d-sm-inline-block" onClick={toggleModal}>
              Book Now
            </NavLink>
          </div>

          {/* Mobile Menu Toggle */}
          <li className="d-inline-block d-lg-none ms-3 toggle_btn">
            <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
          </li>
        </Navbar>

      {/* Modal Đặt Tour */}
      <BookingModal isOpen={isModalOpen} toggle={toggleModal} />
    </header>
  );
};

export default Header;
