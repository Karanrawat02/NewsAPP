import React from 'react';
import Container from 'react-bootstrap/Container';
import { Navbar } from 'react-bootstrap';
import { Nav } from 'react-bootstrap';
import News from "../assests/News.png";

function BNavbar() {
  return (
    <Navbar bg="light" variant="light" className='cont'>
    <Container>
      <Navbar.Brand ><img src={News} className="images"/></Navbar.Brand>
    </Container>
  </Navbar>
  );
}

export default BNavbar;