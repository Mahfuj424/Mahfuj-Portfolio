import React, { useRef } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_fmjsl1z",
        "template_k3rar2d",
        form.current,
        "vaNZSNbT-5hbgRvXM"
      )
      .then(
        (result) => {
          if (result.text == "OK") {
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Send Successfully',
              showConfirmButton: false,
              timer: 1500
            })
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="pt-5">
      <Container className="py-5">
        <h1 className="main-name">
          Contact <span className="main-name"> Us</span>
        </h1>
        <Row>
          <Col md={6}>
            <div className="text-white text-start mt-5 pt-5">
              <div className="mt-3">
                <h1>
                  Get in <span className="main-name">touch</span>
                </h1>
                <p>Fill in the form to start conversation</p>
              </div>
              <div className="mt-5">
                <p>
                  {" "}
                  <HiOutlineLocationMarker /> Sunamganj, Bangladesh
                </p>
                <p>
                  {" "}
                  <AiOutlineMail /> mahfujahmad424@gmail.com
                </p>
                <p>
                  {" "}
                  <FiPhoneCall /> +880-1581-606-850
                </p>
              </div>
            </div>
          </Col>
          <Col md={6} className="text-white">
            <h2 className="text-white  text-center">
              <span className="main-name">Try</span> It
            </h2>
            <form ref={form} onSubmit={sendEmail}>

            <div>
                <h5 className="main-name text-start">Name</h5>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Name"
                  name='from_name'
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    className="bg-secondary text-white"
                    placeholder="Leave a comment here"
                  />
                </FloatingLabel>
              </div>
              <div>
                <h5 className="main-name text-start">Email</h5>
                <FloatingLabel
                  controlId="floatingTextarea"
                  label="Email"
                  type='email'
                  name='from_email'
                  className="mb-3"
                >
                  <Form.Control
                    as="textarea"
                    className="bg-secondary text-white"
                    placeholder="Leave a comment here"
                  />
                </FloatingLabel>
              </div>
            
            <div>
                <h5 className="main-name text-start">Comments</h5>
                <FloatingLabel controlId="floatingTextarea2" label="Comments" name='message'>
                  <Form.Control
                    as="textarea"
                    className="bg-secondary text-white"
                    placeholder="Leave a comment here"
                    style={{ height: "150px" }}
                  />
                </FloatingLabel>
              </div>
              <input className="btn btn-primary mt-3" type="submit" value="Submit" />
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
