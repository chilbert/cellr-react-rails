import React from "react";
import { Navbar, Nav } from 'react-bootstrap'

class NavBar extends React.Component {
  render() {
    return (
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="/">Cellr</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/cellar">Cellar</Nav.Link>
          <Nav.Link href="/wineries">Wineries</Nav.Link>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;