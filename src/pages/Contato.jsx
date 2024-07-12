import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { Envelope, Person, Pencil } from "react-bootstrap-icons";

function Contato() {
  const [subject, setSubject] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    // Verifica se todos os campos estão preenchidos
    if (!subject || !name || !email || !message) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Verifica o formato do e-mail
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Por favor, insira um endereço de e-mail válido.");
      return;
    }

    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log(subject, name, email, message);
  }

  return (
    <Container>
      <Row className="justify-content-md-center mb-5 mt-5 me-auto">
        <Col xs={12} md={6}>
          <Form className="form-section" onSubmit={handleSubmit}>
            <h1 className="text-center mt-4">Formulário de Contato</h1>
            <hr />
            <Form.Group as={Row} className="mb-3" controlId="formSubject">
              <Form.Label column sm="2">
                Assunto:
              </Form.Label>
              <Col sm="10">
                <InputGroup>
                  <InputGroup.Text>
                    <Pencil />
                  </InputGroup.Text>
                  <FormControl
                    type="text"
                    placeholder="Assunto"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                  />
                </InputGroup>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formName">
              <Form.Label column sm="2">
                Nome:
              </Form.Label>
              <Col sm="10">
                <InputGroup>
                  <InputGroup.Text>
                    <Person />
                  </InputGroup.Text>
                  <FormControl
                    type="text"
                    placeholder="Nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </InputGroup>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formEmail">
              <Form.Label column sm="2">
                E-mail:
              </Form.Label>
              <Col sm="10">
                <InputGroup>
                  <InputGroup.Text>
                    <Envelope />
                  </InputGroup.Text>
                  <FormControl
                    type="email"
                    placeholder="E-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </InputGroup>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3" controlId="formMessage">
              <Form.Label column sm="2">
                Mensagem:
              </Form.Label>
              <Col sm="10">
                <FormControl
                  as="textarea"
                  rows={3}
                  placeholder="Mensagem"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Col>
            </Form.Group>
            <div className="text-center">
              <Button
                variant="primary"
                type="submit"
                className="mt-3 mb-3 text-center text-uppercase p-3 w-50"
              >
                Enviar
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Contato;
