import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logoUrl from "../../img/logo-eggo-pagina.png";
import wsap from "../../img//whatsapp.png";

const text = "Me gustaría llamarlos o visitarlos para realizarles una consulta sobre sus productos";
const urlWhatsapp =
  `https://wa.me/5492612506485?text=${text}`;

const NavbarPage = () => {
  
  return (
    <Navbar bg="success" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logoUrl}
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href={urlWhatsapp} target="_blank">
              <img src={wsap} height="30" alt="" />
            </Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarPage;
