import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import { useLocation } from 'react-router-dom';

function NavTabs({ setCurrentTab, currentTab }) {
  const [showOffcanvas, setShowOffcanvas] = useState(false); 

  const handleToggleOffcanvas = () => {
    setShowOffcanvas(!showOffcanvas);
  };

  const currentPage = useLocation().pathname;

  return (
    <>
      <Container fluid>
        <button className="navButton navbar-toggle" aria-controls="offcanvasNavbar" onClick={handleToggleOffcanvas}></button>
        <Offcanvas show={showOffcanvas} onHide={() => setShowOffcanvas(false)} placement="end" id="offcanvasNavbar">
          <Offcanvas.Header closeButton />
          <Offcanvas.Body>
            <Nav className="linkItems pe-3">
              <Nav.Link
                href="/Home"
                className={currentPage === '/Home' ? 'nav-link active' : 'nav-link'}
              >
                Home
              </Nav.Link>
              <Nav.Link
                href="/Portfolio"
                className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
              >
                Portfolio
              </Nav.Link>
              <Nav.Link
                href="/About"
                className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
              >
                About
              </Nav.Link>
              <Nav.Link
                href="/Contact"
                className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
              >
                Contact
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </>
  );
}

export default NavTabs;