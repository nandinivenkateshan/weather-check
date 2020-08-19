import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Main from "./Components/Main";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  const [country, setCountry] = useState("");
  const handleCountry = (name) => setCountry(name);

  return (
    <Container fluid="true">
      <Row>
        <Header />
      </Row>
      <Row>
        <Col
          xs={4}
          md={2}
          className="bg-dark"
          style={{ position: "fixed", top: "65px" }}
        >
          <SideBar onCountry={(name) => handleCountry(name)} />
        </Col>

        <Col
          xs={8}
          md={10}
          style={{ postion: "relative", top: "80px", left: "250px" }}
        >
          <Main country={country} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
