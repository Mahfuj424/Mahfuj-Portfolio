import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={3} className="tech-icons">
        <SiVisualstudiocode className="main-name"  />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiPostman className="main-name"  />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiVercel className="main-name"  />
      </Col>
    </Row>
  );
}

export default Toolstack;
