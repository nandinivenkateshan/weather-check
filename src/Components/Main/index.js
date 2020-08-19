import React, { useEffect, useState } from "react";
import { Nav, Col, Row } from "react-bootstrap";
import Card from "../card";
import { data } from "../Data";

function Main({ country }) {
  return country ? (
    <Row>
      {data[country].map((item, index) => {
        return (
          <Col md={4} key={item + index}>
            <Card city={item} />
          </Col>
        );
      })}
    </Row>
  ) : null;
}

export default Main;
