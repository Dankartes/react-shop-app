import { Nav, Navbar, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';

const NavigationBar = () => {
  return (
    <Navbar style={{ marginBottom: '15px' }} bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Shop</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link href="/1">Products</Nav.Link>
          <Nav.Link href="/add-product">Add product</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;