import React from "react";
import { useForm } from "react-hook-form";
import { Form, Button, Container, Row, Col } from "react-bootstrap";

function Cadastro() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Container>
      <Row className="justify-content-md-center mb-5 mt-5 me-auto">
        <Col xs={12} md={6}>
          <Form className="form-section" onSubmit={handleSubmit(onSubmit)}>
            <h1 className="text-center">Cadastro</h1>
            <hr />
            <Form.Group controlId="nome">
              <Form.Label>Nome</Form.Label>
              <Form.Control
                type="text"
                placeholder="Digite seu nome"
                {...register("nome", { required: true })}
                isInvalid={!!errors.nome}
              />
              <Form.Control.Feedback type="invalid">
                Nome inválido!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                {...register("email", { required: true })}
                isInvalid={!!errors.email}
              />
              <Form.Control.Feedback type="invalid">
                Email inválido!
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId="senha">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                {...register("senha", { required: true, minLength: 6 })}
                isInvalid={!!errors.senha}
              />
              {errors.senha && errors.senha.type === "required" && (
                <Form.Control.Feedback type="invalid">
                  Senha obrigatória!
                </Form.Control.Feedback>
              )}
              {errors.senha && errors.senha.type === "minLength" && (
                <Form.Control.Feedback type="invalid">
                  A senha deve ter no mínimo 6 caracteres!
                </Form.Control.Feedback>
              )}
            </Form.Group>

            <Button variant="outline-success" className="w-100 mt-3 mb-3" type="submit">
              Cadastrar
            </Button>

            <Button
              variant="outline-danger"
              type="submit"
              className="w-100 mt-3 mb-3"
            >
              Cadastre-se com Google
            </Button>


            {/* Adicione mais campos de formulário aqui conforme necessário */}


          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Cadastro;
