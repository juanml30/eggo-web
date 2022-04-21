import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

const Footer = () => {
  return (
    <Container className="d-flex align-items-center" style={{ height: '80px' }}>
      <div >
        <Nav.Link href="#home">Copyright</Nav.Link>
      </div>
      <div className="ms-auto d-flex">
        <Nav.Link href="#home">wsap</Nav.Link>
        <Nav.Link href="#home">Facebook</Nav.Link>
        <Nav.Link href="#home">Instagram</Nav.Link>
      </div>
    </Container>
  );
};

export default Footer;
