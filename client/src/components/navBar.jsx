import { React } from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import logo from "../ss4.png";
import text from "../ss4text.png";

export function NavBar() {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container className="m-2">
        <img
          alt=""
          src={logo}
          width="55"
          height="55"
          className="d-inline-block align-top"
        />
        <img
          alt=""
          src={text}
          width="65"
          height="45"
          className="d-inline-block align-top"
        />
        <Nav className="me-auto">
          <Nav.Link
            style={{ paddingLeft: 30, fontSize: 20, fontWeight: 500 }}
            href="#home"
          >
            Scraper
          </Nav.Link>
          <Nav.Link
            style={{ paddingLeft: 30, fontSize: 20, fontWeight: 500 }}
            href="#features"
          >
            About
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
