// import './styles/Card.css';

// function Card({ nome, foto, genero, corOlhos, cor, tipoPelagem }) {
//     return (
//         <article className='card'>
//             <img src={foto} alt="Foto do gato" />
//             <h3>{nome}</h3>
//             <p>Gênero: {genero}</p>
//             <p>Cor dos olhos: {corOlhos}</p>
//             <p>Cor: {cor}</p>
//             <p>Tipo de pelagem: {tipoPelagem}</p>

//         </article>
//     );
// }

// export default Card;

import { Card } from "react-bootstrap";
import "./styles/Card.css";

function CardComponent({ nome, foto, genero, corOlhos, cor, tipoPelagem }) {
  return (
    <Card className="my-card">
      <Card.Img variant="top" src={foto} alt="Foto do gato" className="card-img" />
      <Card.Body>
        <Card.Title className="card-titulo">{nome}</Card.Title>
        <Card.Text>Gênero: {genero}</Card.Text>
        <Card.Text>Cor dos olhos: {corOlhos}</Card.Text>
        <Card.Text>Cor: {cor}</Card.Text>
        <Card.Text>Tipo de pelagem: {tipoPelagem}</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardComponent;
