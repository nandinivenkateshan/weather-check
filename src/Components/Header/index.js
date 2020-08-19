import React from "react";
import Logo from "../../assets/img/logo.jpg";
import { Navbar, Row, Col } from "react-bootstrap";

function Header() {
  return (
    <Col>
      <Navbar
        style={{ backgroundColor: "#EC7063" }}
        className="shadow-lg"
        fixed="top"
      >
        <Navbar.Brand href="#home">
          <img
            src={Logo}
            width="40"
            height="40"
            className="d-inline-block align-top rounded-circle"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Navbar.Brand className="text-white">Weather Check</Navbar.Brand>
      </Navbar>
    </Col>
  );
}

export default Header;
