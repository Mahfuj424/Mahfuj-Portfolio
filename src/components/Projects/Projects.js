import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import martial from '../../Assets/Projects/martial.png'
import ramadan from '../../Assets/Projects/ramadankarem.png'
import BestCourse from '../../Assets/Projects/bestCoure.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ramadan}
              isBlog={false}
              title="Ramadan Karem"
              description="
              It seems like you've provided information about a website project related to Ramadan and built with specific technologies such as React.js, Firebase, Daisyui, Tailwind CSS, and deployed on Vercel. The features include the ability for users to favorite iftar recipes, provide reviews, and ask hadith-related questions."
              ghLink="https://github.com/Mahfuj424/chefs-finder"
              demoLink="https://ramadan-karem-1ca1c.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BestCourse}
              isBlog={false}
              title="Best College"
              description="It sounds like you have a project related to colleges, built with a technology stack that includes React.js for the frontend, Express.js for the backend, Firebase for some functionalities, Daisyui for UI components, and Tailwind CSS for styling. The features include client reviews  and the option to choose any available college."
              ghLink="https://github.com/Mahfuj424/aeroplane-toy-client"
              demoLink="https://endearing-medovik-d76f86.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={martial}
              isBlog={false}
              title="Martial Art School"
              description="It looks like you have a project related to martial arts, with a technology stack including React.js for the frontend, Express.js and Node.js for the backend, Firebase for some functionalities, Daisyui for UI components, and Tailwind CSS for styling. Additionally, you've provided admin credentials for managing users and classes."
              ghLink="https://github.com/Mahfuj424/karate-master-client"
              demoLink="https://cozy-gecko-636cfe.netlify.app/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
