// import './styles/Footer.css';

// function Footer () {
//   return (
//     <footer>
//     <section className="informacoesadicionais">
//       <img src="logo-gatopoles.png" alt="Logo Gatópoles" className='logoFooter'/>
//     <p className="descricao">Sediada em São Paulo (SP), A Gatópoles Adoção de Gatinhos é uma ONG que resgata, trata e encaminha para adoção responsável gatos retirados das mais variádas situações de risco. </p>
//     <div>
//       <nav className='redesSociais'>
//         <a href="#"><img src="facebook-icon.png" alt="Logo Facebook" /></a>
//         <a href="#"><img src="instagram-icon.png" alt="Logo Instagram" /></a>
//       </nav>
//     </div>
//     </section>
//     <p className='copyRight'>Copyright © 2019 - GATÓPOLES - TODOS OS DIREITOS RESERVADOS</p>
//   </footer>
//   )

// }

// export default Footer

import React from "react";
import { Container, Row, Col, Nav, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles/Footer.css";

function Footer() {
  return (
    <footer>
      <Container className="rodape">
        <Row className="align-items-center justify-content-center text-center">
          <Col xs={12} md={4} className="mb-3">
            <Image src="logo-gatopoles.png" alt="Logo Gatópoles" fluid />
          </Col>
          <Col xs={12} md={8} className="mb-1">
            <p className="descricao">
              Sediada em São Paulo (SP), A Gatópoles Adoção de Gatinhos é uma
              ONG que resgata, trata e encaminha para adoção responsável gatos
              retirados das mais variadas situações de risco.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col xs={12} className="mb-3">
            <Nav className="justify-content-center">
              <Nav.Item>
                <Nav.Link href="#">
                  <Image src="facebook-icon.png" alt="Logo Facebook" />
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#">
                  <Image src="instagram-icon.png" alt="Logo Instagram" />
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
        </Row>
        <Row className="justify-content-center text-center">
          <Col xs={12}>
            <p className="copyRight">
              Copyright © 2019 - GATÓPOLES - TODOS OS DIREITOS RESERVADOS
            </p>
          </Col>
        </Row>

        {/* Adicione Link to pagina de politica de privacidade */}

        <Row className="justify-content-center text-center">
          <Col xs={12}>
            <Nav.Link as={Link} to="/Privacidade">
              Política de Privacidade
            </Nav.Link>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
