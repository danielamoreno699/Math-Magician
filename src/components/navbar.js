import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';

const MyNavbar = () => (
  <Navbar bg="dark" variant="dark">
    <Container>
      <Link to="/" className="navbar-brand ">Math Magician</Link>
      <Nav className="me-auto">
        <NavLink to="/" className="nav-link" activeClassName="active">Home</NavLink>
        <NavLink to="/Calculator" className="nav-link" activeClassName="active">Calculator</NavLink>
        <NavLink to="/Quotes" className="nav-link" activeClassName="active">Quotes</NavLink>
      </Nav>
    </Container>
  </Navbar>
);

export default MyNavbar;

