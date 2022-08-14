import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function BasicExample() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">Sorting Algorithms Visualizer</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <NavDropdown title="Algorithms" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Merge Sort</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Insertion Sort
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Selection Sort</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Quick Sort</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Bubble Sort</NavDropdown.Item>
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
}

export default BasicExample;