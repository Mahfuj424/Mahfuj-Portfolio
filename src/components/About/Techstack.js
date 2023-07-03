import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={3} className="tech-icons">
        <DiJavascript1 className="main-name" />
      </Col>
      
      <Col xs={4} md={3} className="tech-icons">
        <DiNodejs className="main-name"  />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiReact className="main-name"  />
      </Col>
      
      <Col xs={4} md={3} className="tech-icons">
        <DiMongodb className="main-name"  />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiNextdotjs className="main-name"  />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <DiGit className="main-name"  />
      </Col>
      <Col xs={4} md={3} className="tech-icons">
        <SiFirebase className="main-name"  />
      </Col>
    </Row>
  );
}

export default Techstack;
