import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../components/styles/Adote.css";

export default function Adote() {
  return (
    <div className="adote">
      <Row xs={1} md={2} className="g-2">
        <Col>
          <Card className="no-hover" style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>Critérios de Adoção</Card.Title>
              <Card.Text>
                Para adotar um gatinho, é necessário:
                <ul style={{ textAlign: "justify" }}>
                  <li>Ter mais de 21 anos de idade;</li>
                  <li>Ter condições financeiras para a criação do gatinho;</li>
                  <li>Morar na região metropolitana de São Paulo;</li>
                  {/* ... outros critérios ... */}
                  <li>Preencher formulário de adoção online;</li>
                  <li>
                    Concordar com a vistoria da casa no dia da entrega do
                    gatinho;
                  </li>
                  <li>Assinar termo de adoção no dia da entrega;</li>
                  <li>
                    Não permitir de maneira nenhuma que o gatinho tenha acesso à
                    rua;
                  </li>
                  <li>
                    Morar em APARTAMENTO COMPLETAMENTE TELADO, ou seja todas as
                    janelas e sacadas (mesmo as envidraçadas) devem estar com
                    tela de proteção adequada para gatos (não aceitamos telas de
                    mosquiteiro) e as basculantes devem estar com limitador de
                    abertura ou teladas, dependendo do caso;
                  </li>
                  <li>
                    Morar em CASA QUE NÃO OFEREÇA RISCO DE FUGA OU DE QUEDA.
                    Isto é:
                    <ul>
                      <li>
                        Casas térreas com quintal: o quintal deve ser telado por
                        cima como se fosse um teto e os portões sem vãos.
                      </li>
                      <li>
                        Casas térreas sem quintal: todas as janelas devem ser
                        teladas (não aceitamos telas de mosquiteiro).
                      </li>
                      <li>
                        Sobrados: Se tiver quintal, deve ser telado por cima
                        como se fosse um teto, portões sem vãos, janelas
                        superiores e sacadas e/ou lajes teladas (não aceitamos
                        telas de mosquiteiro).
                      </li>
                    </ul>
                  </li>
                </ul>
                <p style={{ textAlign: "justify" }}>
                  Esses critérios de adoção serão avaliados no dia da entrega do
                  gatinho pela voluntária responsável. Caso o adotante não se
                  encaixe no perfil e a casa ou apartamento não estejam seguros,
                  o gatinho volta para nosso abrigo. Isto porque prezamos pela
                  qualidade da adoção e não pela quantidade. Acreditamos que não
                  adianta salvar um gatinho da rua para que ele volte para lá e
                  corra risco de atropelamento, envenenamento, maldade humana,
                  doenças, etc.
                </p>
              </Card.Text>
              <Button variant="primary" as={Link} to="/formAdote">
                Quero Adotar
              </Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="no-hover" style={{ width: "100%" }}>
            <Card.Body>
              <Card.Title>Como Adotar</Card.Title>
              <Card.Text>
                <ul style={{ textAlign: "justify" }}>
                  <li>
                    Escolha o gatinho que mais se encaixa em seu perfil e clique
                    em “QUERO ADOTAR”, abaixo do texto do gatinho.
                  </li>
                  <li>
                    Preencha o formulário de adoção que abrirá quando você
                    clicar em quero adotar.
                  </li>
                  <li>
                    Ao final do formulário, clique em "ENVIAR FORMULÁRIO DE
                    ADOÇÃO" e pronto.
                  </li>
                  <li>
                    Agora é só aguardar a nossa resposta diretamente em seu
                    email.
                  </li>
                  <li>
                    Nosso prazo de resposta é de no máximo dois dias úteis.
                  </li>
                  <li>
                    Lembrando que só doamos gatinhos castrados, vermifugados,
                    com vacinas em dia e testados para Fiv e Felv. Após a
                    adoção, o adotante fica responsável pelas vacinas seguintes.
                  </li>
                </ul>
              </Card.Text>
              <Button variant="primary" as={Link} to="/contato">
                Fale Conosco
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
