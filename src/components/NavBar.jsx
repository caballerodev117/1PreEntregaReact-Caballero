import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LogoOrganicos from '../img/LogoOrganicos.jpg';
import CartWidget from './CartWidget';

function Navbarorganicos() {
    return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
        <img
              src={LogoOrganicos}
              width="120px"
              className="d-inline-block align-top"
              alt="Logo Orgánicos del Retiro"
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Frutas">Frutas</Nav.Link>
            <Nav.Link href="#Verduras">Verduras</Nav.Link>
            <Nav.Link href="#Hortalizas">Hortalizas</Nav.Link>
            <Nav.Link href="#Otros">Otros</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar producto"
              className="me-2"
              aria-label="Buscar"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
          <CartWidget/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
  export default Navbarorganicos;
    