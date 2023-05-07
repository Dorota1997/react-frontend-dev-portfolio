import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Contact = ({ resumeBasicInfo }) => {
  const form = useRef();
  const [emailStatus, setEmailStatus] = useState({
    show: false,
    message: "",
    success: false,
  });

  const [canSend, setCanSend] = useState(true)

  const sendEmail = (e) => {
    e.preventDefault();
    setCanSend(false);
    emailjs
    .sendForm(
      "service_o6thoi9",
      "template_d872hq1",
      form.current,
      "jMd9SS1UyU-JIPmvc"
      )
      .then(
        (result) => {
          console.log(result.text);
          setEmailStatus({
            show: true,
            message: "Email sent successfully!",
            success: true,
          });
          setCanSend(true);
        },
        (error) => {
          console.log(error.text);
          setEmailStatus({
            show: true,
            message: "Failed to send email. Please try again later.",
            success: false,
          });
          setCanSend(true);
        }
      );
      // Reset form after submitting
      form.current.reset();
    };

  let sectionName;
  if (resumeBasicInfo) {
    sectionName = resumeBasicInfo.section_name.contact;
  }

  return (
    <section id="contact" className="pb-5">
      <div className="col-md-12 mx-auto">
        <div className="col-md-12">
          <h1 className="section-title" style={{ color: "black" }}>
            <span className="text-black" style={{ textAlign: "center" }}>
              {sectionName}
            </span>
          </h1>
        </div>
      </div>
      <div className="container col-md-4 mx-auto">
        {emailStatus.show && emailStatus.success && (
          <div class="alert alert-success" role="alert">
            {emailStatus.message}
          </div>
        )}
        {emailStatus.show && !emailStatus.success && (
          <div class="alert alert-danger" role="alert">
            {emailStatus.message}
          </div>
        )}
        <Form ref={form} onSubmit={sendEmail}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="from_name" placeholder="Name" required />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="reply_to"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={3}
              placeholder="Message"
              required
            />
          </Form.Group>
          <Button variant="primary" type="submit" disabled={!canSend}>
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
