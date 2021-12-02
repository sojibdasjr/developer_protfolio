import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <Navbar variant="dark"  expand="lg" bg="dark">
<Container>
<Navbar.Brand as={Link} to="/"> <span style={{color:'rgb(240, 236, 13)'}}>SOJiB</span> DAS</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">

   
    <Nav className="me-auto">
      <Nav.Link style={{color:'rgb(240, 236, 13)', fontWeight:'600'}}  as={Link} to="/">Home</Nav.Link>

      <Nav.Link style={{color:'rgb(240, 236, 13)', fontWeight:'600'}}  as={Link} to="/services">Services</Nav.Link>

      <Nav.Link style={{color:'rgb(240, 236, 13)', fontWeight:'600'}}  as={Link} to="/project">Projects</Nav.Link>

      <Nav.Link style={{color:'rgb(240, 236, 13)', fontWeight:'600'}}  as={Link} to="/blog">Blog</Nav.Link>

      <Nav.Link style={{color:'rgb(240, 236, 13)', fontWeight:'600'}}  as={Link} to="/contact">Contact</Nav.Link>
    </Nav>

</Navbar.Collapse>
</Container>
</Navbar>
    );
};

export default Navigation;