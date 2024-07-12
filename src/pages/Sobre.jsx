import { Accordion, Card, Container, Alert } from "react-bootstrap";
import { FaCat } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Gatopoles() {
  return (
    <main className="mt-4">
      <Container className="my-5 py-5 px-5">
        <h1>Gatópoles</h1>
        <hr />
        <Accordion alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <FaCat className="mx-3" /> Nossa Missão
            </Accordion.Header>
            <Accordion.Body>
              <Card.Text>
                • Resgatar gatos abandonados e em risco nas ruas de São Paulo;
                <br />
                • Preparar os resgatados para adoção responsável, com todos os
                cuidados veterinários;
                <br />• Encontrar lares seguros e amorosos para uma vida digna e
                saudável.
              </Card.Text>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <FaCat className="mx-3" /> Nossa Visão
            </Accordion.Header>
            <Accordion.Body>
              <Card.Text>
                • Ser uma ONG reconhecida pelo tratamento digno aos gatos;
                <br />• Contribuir para um mundo com menos abandono e maus
                tratos.
              </Card.Text>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <FaCat className="mx-3" /> Nossos Valores
            </Accordion.Header>
            <Accordion.Body>
              <Card.Text>
                • Transparência, responsabilidade e respeito;
                <br />
                • Amor e carinho aos animais;
                <br />• Repúdio à violência e crueldade.
              </Card.Text>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <Alert variant="info" className="mt-5">
          <Alert.Heading>Quer ajudar?</Alert.Heading>
          <p>
            Você pode contribuir com doações, apadrinhamento ou adotando um
            gatinho. Entre em contato conosco!
          </p>
        </Alert>

        <Alert variant="success" className="mt-5">
          <Alert.Heading>Parcerias</Alert.Heading>
          <p>
            Se você tem uma empresa e quer ser nosso parceiro, entre em contato
            conosco!
          </p>
          <Alert.Link as={Link} to="/contato">
            Fale conosco
          </Alert.Link>
        </Alert>

        <Alert variant="warning" className="mt-5">
          <Alert.Heading>Eventos</Alert.Heading>
          <p>
            Acompanhe nossas redes sociais para saber sobre eventos, bazares e
            feiras de adoção.
          </p>
        </Alert>

        <Alert variant="danger" className="mt-5">
          <Alert.Heading>Denúncias</Alert.Heading>
          <p>
            Se você presenciar maus tratos ou abandono de animais, denuncie!
          </p>
          <Alert.Link as={Link} to="/contato">
            Fale conosco
          </Alert.Link>
        </Alert>

        <Alert variant="secondary" className="mt-5">
          <Alert.Heading>Voluntariado</Alert.Heading>
          <p>
            Se você quer ser voluntário e ajudar na nossa causa, entre em
            contato conosco!
          </p>
          <Alert.Link as={Link} to="/contato">
            Fale conosco
          </Alert.Link>
        </Alert>

        <Alert variant="primary" className="mt-5">
          <Alert.Heading>Adoção</Alert.Heading>
          <p>
            Se você quer adotar um gatinho, entre em contato conosco e saiba
            como proceder.
          </p>
          <Alert.Link as={Link} to="/adote">
            Adote
          </Alert.Link>

          <Alert.Heading className="mt-5">Apadrinhamento</Alert.Heading>
          <p>
            Se você quer apadrinhar um gatinho, entre em contato conosco e saiba
            como proceder.
          </p>
          <Alert.Link as={Link} to="/apadrinhe">
            Apadrinhe
          </Alert.Link>
        </Alert>
      </Container>
    </main>
  );
}
