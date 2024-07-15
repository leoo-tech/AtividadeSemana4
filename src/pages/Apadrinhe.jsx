import { Accordion, Card, Container, Alert, Button } from "react-bootstrap";
import { FaCat } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Apadrinhe() {
  return (
    <div>
      <Alert variant="warning">
        <Alert.Heading>Olá, humano!</Alert.Heading>
        <p>
          Esta página está em manutenção. Pode conter alguns erros de código ;)
          Volte em breve!
        </p>
      </Alert>

      <Button as={Link} to="/" variant="primary" size="lg" className="my-5">
        Voltar para a Home
      </Button>

      <Container className="my-5 py-5 px-5">
        <h1>Apadrinhe</h1>
        <hr />
        <Accordion alwaysOpen>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <FaCat className="mx-3" /> O que é apadrinhar?
            </Accordion.Header>
            <Accordion.Body>
              <Card.Text>
                Apadrinhar é uma forma de contribuir com a causa animal sem
                precisar adotar um pet. Você pode apadrinhar um animalzinho
                ajudando com as despesas de alimentação, cuidados veterinários e
                outros custos.
              </Card.Text>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <FaCat className="mx-3" /> Como apadrinhar?
            </Accordion.Header>
            <Accordion.Body>
              <Card.Text>
                Entre em contato com a ONG ou abrigo de animais de sua região e
                pergunte como você pode apadrinhar um pet. Existem diversas
                formas de apadrinhamento, como:
                <br />
                • Apadrinhamento financeiro;
                <br />• Apadrinhamento afetivo;
                <br />• Apadrinhamento de lar temporário.
              </Card.Text>
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <FaCat className="mx-3" /> Por que apadrinhar?
            </Accordion.Header>
            <Accordion.Body>
              <Card.Text>
                Apadrinhar um pet é uma forma de ajudar animais em situação de
                abandono e maus-tratos. Além disso, você estará contribuindo
                para a manutenção de abrigos e ONGs que resgatam e cuidam de
                animais carentes.
              </Card.Text>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </div>
  );
}
