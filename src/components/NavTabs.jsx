import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import { Link, useLocation } from "react-router-dom";

function OffcanvasExample() {
  const currentPage = useLocation().pathname;

  return (
    <>
      <Navbar expand={false} style={{ backgroundColor: '#f8f9fa' }}>
        <Container fluid>
          <Navbar.Brand href="#"></Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            placement="end"
          >
            <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link 
                  href="/" 
                  className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                  Home
                </Nav.Link>
                <Nav.Link 
                  href="/Portfolio" 
                  className={currentPage === "/Portfolio" ? "nav-link active" : "nav-link"}
                >
                  Portfolio
                </Nav.Link>
                <Nav.Link 
                  href="/About" 
                  className={currentPage === "/About" ? "nav-link active" : "nav-link"}
                >
                  About
                </Nav.Link>
                <Nav.Link 
                  href="/Contact" 
                  className={currentPage === "/Contact" ? "nav-link active" : "nav-link"}
                >
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
