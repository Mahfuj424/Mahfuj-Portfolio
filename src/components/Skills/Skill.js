import React from "react";
import { Container } from "react-bootstrap";
import Techstack from "../About/Techstack";
import Github from "../About/Github";
import Toolstack from "../About/Toolstack";

const Skill = () => {
  return (
    <div className="pt-5">
      <Container>
        <h1 className="project-heading pt-5">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </div>
  );
};

export default Skill;
