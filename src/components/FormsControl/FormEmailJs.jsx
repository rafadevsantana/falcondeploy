import React from "react";
import emailjs from "emailjs-com";
import { Button, Form } from "react-bootstrap";
import "./forms.css";

export default function ContactUs({ history }) {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "orcamento", e.target, "user_R7PQAQGK4c6FQAXkfFOtP")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset()
    window.location.href='http://api.whatsapp.com/send?1=pt_BR&phone=5519989734253';  
  }

  return (
    <form onSubmit={sendEmail}>
      <Form.Group>
        <div class="d-flex p-2 bd-highlight">
          <Form.Control
            className="mr-4 mt-5 ml-4 mb text-center"
            type="email"
            placeholder="Digite seu Email"
            name="email"
          />
        </div>
        <br />
        <div class="d-flex p-2 bd-highlight">
          <Form.Control
            className="mr-4 ml-4 mb text-center"
            type="text"
            placeholder="Telefone"
            name="telefone"
          />
        </div>
        <br />
        <div class="d-flex p-2 bd-highlight">
          <Button className='mr-4 ml-4 bg-info border-0' variant="primary" size="lg" type="submit" block>
            Solicitar Orçamento
          </Button>
        </div>
      </Form.Group>
    </form>
  );
}
