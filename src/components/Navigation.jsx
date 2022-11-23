import { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import "../style/Navigation.css";

const Navigation = () => {
  const [navbarColor, setnavbarColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 50) {
      setnavbarColor(true);
    } else {
      setnavbarColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div>
      <Navbar
        className={navbarColor ? "transparent NavDark" : "transparent"}
        variant="dark"
        fixed="top"
      >
        <Container className="justify-content-between">
          <Navbar.Brand href="/" className="logo fw-bold fs-3 ps-4">
            ANDROMEDA
          </Navbar.Brand>
          <Nav>
            <Nav.Link
              href="/class"
              className="class text-white fw-semibold pe-4"
            >
              CLASS
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
