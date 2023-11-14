import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const navbarStyle = {
  backgroundColor: '#2F302C',
};

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary" style={navbarStyle}>
      <Container style={navbarStyle}>
        <Navbar.Brand href="#home">Nutrabay</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features" className="white-text">Products</Nav.Link>
            <Nav.Link href="#pricing" className="white-text">Vitamins and More</Nav.Link>
            <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
              {/* Add the class to each NavDropdown.Item as needed */}
              <NavDropdown.Item href="#action/3.1" className="white-text">Health and Food Drinks</NavDropdown.Item>
              {/* ... other items ... */}
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets" className="white-text">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes" className="white-text">
              Log In
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
