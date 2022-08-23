import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Users from "../pages/Users";
import {
  BubbleSort,
  InsertionSort,
  MergeSort,
  QuickSort,
  SelectionSort,
  Comparison
} from "../pages/algorithms/index";

function Topbar() {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant={"dark"} expand="lg">
          <Container>
            <Navbar.Brand href="/">Sorting Algorithms Visualizer</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={Link} to={"/"}>
                  Home
                </Nav.Link>
                <Nav.Link as={Link} to={"/about"}>
                  About
                </Nav.Link>
                <Nav.Link as={Link} to={"/users"}>
                  Users
                </Nav.Link>

                <NavDropdown title="Algorithms" id="basic-nav-dropdown">
                  <NavDropdown.Item as={Link} to={"/algorithms/mergesort"}>
                    Merge Sort
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/algorithms/insertionsort"}>
                    Insertion Sort
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/algorithms/selectionsort"}>
                    Selection Sort
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/algorithms/quicksort"}>
                    Quick Sort
                  </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to={"/algorithms/bubblesort"}>
                    Bubble Sort
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item as={Link} to={"/algorithms/comparison"}>
                    Comparison
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users" element={<Users />} />
          <Route path="/algorithms/mergesort" element={<MergeSort />} />
          <Route path="/algorithms/insertionsort" element={<InsertionSort />} />
          <Route path="/algorithms/selectionsort" element={<SelectionSort />} />
          <Route path="/algorithms/quicksort" element={<QuickSort />} />
          <Route path="/algorithms/bubblesort" element={<BubbleSort />} />
          <Route path="/algorithms/bubblesort" element={<Comparison />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Topbar;
