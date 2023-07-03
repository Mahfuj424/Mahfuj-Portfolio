import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import { motion } from "framer-motion";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <h1 className="main-name">
          <span className="text-white">About</span> Me
        </h1>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Know Who <strong className="purple">I'M</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              md={5}
              style={{ paddingTop: "120px", paddingBottom: "50px" }}
              className="about-img"
            >
              <img src={laptopImg} alt="about" className="img-fluid" />
            </motion.div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
