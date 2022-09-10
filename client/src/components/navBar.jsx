import { React } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../ss4.png";
import text from "../logo1.png";

export function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="50"
            height="50"
            href="/"
            className="d-inline-block align-top"
          />
          <img
            alt=""
            src={text}
            width="100"
            height="55"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link
              style={{ paddingLeft: 30, fontSize: 20, fontWeight: 500 }}
              href="/main"
            >
              Scraper
            </Nav.Link>
            <Nav.Link
              style={{ paddingLeft: 30, fontSize: 20, fontWeight: 500 }}
              href="/about"
            >
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link eventKey={2} href="/profile">
              <i style={{ color: "gray" }} class="fa-solid fa-user"></i>
              <> </> Sign In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
