import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const MyNavbar = () => (
  <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Link to="/" className="navbar-brand">Math Magician</Link>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="me-auto">
          <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
          <NavLink to="/Calculator" className="nav-link" activeClassName="active">Calculator</NavLink>
          <NavLink to="/Quotes" className="nav-link" activeClassName="active">Quotes</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
);

export default MyNavbar;
