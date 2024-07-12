import { Button, Form, Container, Row, Col } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function entrar(data) {
    console.log("Formulário submetido", data);
  }

  return (
    <Container>
      <Row className="justify-content-md-center mb-5 mt-5 me-auto">
        <Col xs={12} md={6}>
          <Form className="form-section" onSubmit={handleSubmit(entrar)}>
            <h1 className="text-center">Login</h1>
            <hr />
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Digite seu email"
                {...register("email", {
                  required: "Email obrigatório",
                  pattern: {
                    value: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+$/,
                    message: "Email inválido",
                  },
                })}
              />
              {errors.email && (
                <p className="text-danger">{errors.email.message}</p>
              )}
            </Form.Group>

            <Form.Group controlId="senha">
              <Form.Label>Senha</Form.Label>
              <Form.Control
                type="password"
                placeholder="Digite sua senha"
                {...register("senha", {
                  required: "Senha obrigatória",
                  minLength: {
                    value: 6,
                    message: "Senha deve ter no mínimo 6 caracteres",
                  },
                })}
              />
              {errors.senha && (
                <p className="text-danger">{errors.senha.message}</p>
              )}
            </Form.Group>

            {/* Adicione mais campos de formulário aqui conforme necessário */}
            <Button
              variant="outline-success"
              type="submit"
              className="w-100 mt-3 mb-3"
            >
              Entrar
            </Button>            
            
            <Button
              variant="outline-danger"
              type="submit"
              className="w-100 mt-3 mb-3"
            >
              Entrar com Google
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
