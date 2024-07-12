import { Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";
import { useState } from "react";
import "./styles/Navbar.css";

export default function Menu() {
  const [expanded, setExpanded] = useState(false);

  const navLinks = [
    { to: "/", text: "Inicio" },
    { to: "/login", text: "Login" },
    { to: "/cadastro", text: "Cadastro" },
    { to: "/apadrinhe", text: "Apadrinhe" },
    { to: "/adote", text: "Adote" },
    { to: "/contato", text: "Contato" },
    { to: "/sobre", text: "Sobre" },
  ];

  return (
    <header>
      <Navbar className="Navbar" expand="md" expanded={expanded}>
        <Container fluid>
          <Link to="/" onClick={() => setExpanded(false)}>
            <img src="logo-gatopoles.png" width="120" alt="Logo" />
          </Link>
          <Navbar.Toggle onClick={() => setExpanded(expanded ? false : true)} />
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-auto">
              {navLinks.map((link, index) => (
                <Nav.Link
                  as={Link}
                  to={link.to}
                  key={index}
                  onClick={() => setExpanded(false)}
                  className="nav-links"
                >
                  {link.text}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
