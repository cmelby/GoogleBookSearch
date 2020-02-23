import React from 'react';
import { Navbar, Nav, Badge, Image } from 'react-bootstrap';

function Navb() {

return (
  <Navbar bg="light shadow-lg" variant="light" expand="lg">
    <Navbar.Brand href="#" ><strong>Goolge Book Search</strong></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      
      <Nav>
      <Badge pill variant="primary">
        <Nav.Link className="text-white" href="/">Search</Nav.Link>
        </Badge>
        <Badge pill variant="primary ml-1">
        <Nav.Link className="text-white" href="/saved">Save</Nav.Link>
        </Badge>
      </Nav>

    </Navbar.Collapse>
  </Navbar>
)};

export default Navb;