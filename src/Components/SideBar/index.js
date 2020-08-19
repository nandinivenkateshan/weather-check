import React from "react";
import { Nav, Col, Row } from "react-bootstrap";

function SideBar({ onCountry }) {
  return (
    <Nav
      variant="pills"
      className="flex-column"
      onSelect={(key) => onCountry(key)}
    >
      <Nav.Link eventKey="India">India</Nav.Link>
      <Nav.Link eventKey="China">China</Nav.Link>
      <Nav.Link eventKey="USA">USA</Nav.Link>
      <Nav.Link eventKey="Canada">Canada</Nav.Link>
      <Nav.Link eventKey="Russia">Russia</Nav.Link>
    </Nav>
  );
}

export default SideBar;
