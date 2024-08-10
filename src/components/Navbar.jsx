import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import lockopen from "../assets/img/lockOpen.png";
import lock from "../assets/img/lock.png";
import "./SignUp";
import { useState } from "react";
import SignUp from "./SignUp";

function NavBar() {
  const token = false;
  const total = 25000;
  const [isopen, setIsopen] = useState(false);
  const openSignUp = () => setIsopen(true)
  const closeSignUp = () => setIsopen(false)

  return (
    <Navbar bg="dark" data-bs-theme="dark" className="d-flex">
      <Container>
        <Navbar.Brand>Pizzeria Mamma Mia!</Navbar.Brand>
        <Nav className="me-auto">
          <Button variant="outline-light" className="text-white">
            🍕Home
          </Button>
          <Button variant="outline-light" className="text-white" onClick= {() => setFormulario(true)}>
            <img src={token ? lockopen : lock} alt="lock status" />
            {token ? "Profile" : "Register"}
          </Button>
          <Button variant="outline-light" className="text-white">
            <img src={token ? lockopen : lock} alt="lock status" />
            {token ? "LogOut" : "Login"}
          </Button>
        </Nav>
        <Nav className="ms-auto">
          <Button variant="outline-light" className="text-white">
            🛒Total:
            <a href="#" className="valor">
              ${total.toLocaleString()}
            </a>
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
