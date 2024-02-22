import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useLocation } from 'react-router-dom';


function NavTabs({ setCurrentTab, currentTab }) {
  const handleTabChange = (tab) => {
    setCurrentTab(tab);
  };

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
            <Offcanvas.Body className="justify-content-end flex-grow-1 pe-3">
              <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>Home</Link>
              <Link to="/Portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
              <Link to="/About" className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}>About</Link>
              <Link to="/Contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default NavTabs;