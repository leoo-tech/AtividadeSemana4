// import './styles/Banner.css';
// function Banner(){
//     return(
//         <section className="banner-container">
//         <img src="/banner.png" alt="Banner do site: gato laranja deitado" className="imagem-banner"/>
//         <h1 className="banner-text">Seu novo melhor amigo está aqui!</h1>
//         </section>
//     )
// }

// export default Banner;

import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "./styles/Banner.css"; // Certifique-se de que o caminho está correto

function Banner() {
  return (
    <Container fluid className="p-0 banner-container">
      <Row className="align-items-center justify-content-center">
        <Col xs={12} md={12} lg={12} className="text-center">
          <Image
            src="/banner.png"
            alt="Banner do site: gato laranja deitado"
            className="img-fluid imagem-banner"
          />
        </Col>
        <Col xs={12} md={6} className="text-center">
          <h1 className="banner-text">Seu novo melhor amigo está aqui!</h1>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
