import CardComponent from "./Card";
import { Container, Row, Col } from "react-bootstrap";
import "./styles/Galeria.css";

const gatosAdocao = [
  {
    cod: 1,
    nome: "Alex",
    genero: "macho",
    corOlhos: "Verdes",
    cor: "Branco",
    tipoPelagem: "Pelagem Curta",
    foto: "gatoalex.jpg",
  },
  {
    cod: 2,
    nome: "Líder",
    genero: "macho",
    corOlhos: "Verdes",
    cor: "Tigrado e branco",
    tipoPelagem: "Pelagem Curta",
    foto: "gatolider.jpg",
  },
  {
    cod: 3,
    nome: "Cuscuz",
    genero: "macho",
    corOlhos: "Verdes",
    cor: "Branco",
    tipoPelagem: "Pelagem Longa",
    foto: "gatocuscuz.webp",
  },

  {
    cod: 4,
    nome: "Branquinho",
    genero: "macho",
    corOlhos: "Verdes",
    cor: "Branco",
    tipoPelagem: "Pelagem Curta",
    foto: "gatobranquinho.webp",
  },
];

function Galeria() {
  const cardsGatos = gatosAdocao.map((gato) => {
    return (
      <Col xs={12} sm={6} md={4} key={gato.cod}>
        <CardComponent
          nome={gato.nome}
          foto={gato.foto}
          genero={gato.genero}
          corOlhos={gato.corOlhos}
          cor={gato.cor}
          tipoPelagem={gato.tipoPelagem}
        />
      </Col>
    );
  });

  return (
    <Container>
      <Row className="cardsGatos">{cardsGatos}</Row>
    </Container>
  );
}

export default Galeria;
