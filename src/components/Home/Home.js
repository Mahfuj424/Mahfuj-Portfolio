import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Skill from "../Skills/Skill";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col
              md={7}
              className="home-header"
            >
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi there{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> Mahfuj Alam</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col
              md={5}
              style={{ paddingBottom: 20 }}
            >
              <img
                src="https://i.ibb.co/Gpj8wXL/profile5.jpg"
                alt="profile pic"
                className="img-fluid border border-secondary border-5 shadow-lg rounded-circle"
                style={{ maxHeight: "450px",  }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <About />
      <Projects />
      <Skill />
      <Contact />
    </section>
  );
}

export default Home;
