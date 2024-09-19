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
<<<<<<< HEAD
=======
// import logo from "../../assets/images/logo.png"; // Đường dẫn logo của bạn
>>>>>>> origin/main
import "../Header/header.css";

const Header = () => {
  const [open, setOpen] = useState(false);
<<<<<<< HEAD
  const [isModalOpen, setModalOpen] = useState(false); // Trạng thái cho modal
=======
  const [isModalOpen, setModalOpen] = useState(false);
>>>>>>> origin/main

  const toggleMenu = () => {
    setOpen(!open);
  };

  const toggleModal = () => {
    setModalOpen(!isModalOpen);
  };

<<<<<<< HEAD
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = () => {
    const header = document.querySelector('.header-section');
    const scrollTop = window.scrollY;
    scrollTop >= 120 ? header.classList.add('is-sticky') :
    header.classList.remove('is-sticky');
  };
=======

>>>>>>> origin/main

  const closeMenu = () => {
    if (window.innerWidth <= 991) {
      setOpen(false);
    }
  };

  return (
    <header className="header-section">
      <Container>
        <Navbar expand="lg" className="p-0">
<<<<<<< HEAD
          {/* Logo Section  */}
          <Navbar.Brand>
            <NavLink to="/"> Weekendmonks</NavLink>
          </Navbar.Brand>
          {/* End Logo Section  */}

=======
          {/* Logo Section */}
          <Navbar.Brand>
            <NavLink to="/">
              <img src="#" alt="Travel Smart" className="logo" />
            </NavLink>
          </Navbar.Brand>
          {/* End Logo Section */}

          {/* Navbar Links */}
>>>>>>> origin/main
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="start"
            show={open}
          >
            <Offcanvas.Header>
              <h1 className="logo">Weekendmonks</h1>
              <span className="navbar-toggler ms-auto" onClick={toggleMenu}>
                <i className="bi bi-x-lg"></i>
              </span>
            </Offcanvas.Header>
            <Offcanvas.Body>
<<<<<<< HEAD
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink className="nav-link" to="/" onClick={closeMenu}>Home</NavLink>
                <NavLink className="nav-link" to="/about-us" onClick={closeMenu}>ABOUT US</NavLink>
                <NavLink className="nav-link" to="/tours" onClick={closeMenu}>TOURS</NavLink>
                <NavDropdown title="DESTINATION" id={`offcanvasNavbarDropdown-expand-lg`}>
                  <NavLink className="nav-link text-dark" to="/destinations" onClick={closeMenu}>SPAIN TOURS</NavLink>
                </NavDropdown>
=======
              <Nav className="justify-content-center flex-grow-1 pe-3">
                <NavLink className="nav-link" to="/" onClick={closeMenu}>Home</NavLink>
                <NavLink className="nav-link" to="/about-us" onClick={closeMenu}>ABOUT US</NavLink>
                <NavLink className="nav-link" to="/tours" onClick={closeMenu}>TOURS</NavLink>
                <NavLink className="nav-link" to="/top-place" onClick={closeMenu}>TOP PLACE</NavLink>
>>>>>>> origin/main
                <NavLink className="nav-link" to="/gallery" onClick={closeMenu}>GALLERY</NavLink>
                <NavLink className="nav-link" to="/contact-us" onClick={closeMenu}>CONTACT</NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
<<<<<<< HEAD

=======
          {/* End Navbar Links */}

          {/* Book Now Button */}
>>>>>>> origin/main
          <div className="ms-md-4 ms-2">
            <NavLink className="primaryBtn d-none d-sm-inline-block" onClick={toggleModal}>
              Book Now
            </NavLink>
<<<<<<< HEAD
            <li className="d-inline-block d-lg-none ms-3 toggle_btn">
              <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
            </li>
          </div>
        </Navbar>
      </Container>
      
=======
          </div>

          {/* Mobile Menu Toggle */}
          <li className="d-inline-block d-lg-none ms-3 toggle_btn">
            <i className={open ? "bi bi-x-lg" : "bi bi-list"} onClick={toggleMenu}></i>
          </li>
        </Navbar>
      </Container>

>>>>>>> origin/main
      {/* Modal Đặt Tour */}
      <BookingModal isOpen={isModalOpen} toggle={toggleModal} />
    </header>
  );
};

export default Header;
