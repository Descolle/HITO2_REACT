import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import lockopen from "../assets/img/lockOpen.png";
import lock from "../assets/img/lock.png";
import SignUp from "./SignUp";
import { useSign } from "./hooks/useSign";  // Importa el hook que maneja el estado del modal

function NavBar() {
  const token = false;
  const [openFormulario, register, closeRegister] = useSign(false);  // Controla el estado del modal

  return (
    <Navbar bg="dark" data-bs-theme="dark" className="d-flex">
      <Container>
        <Navbar.Brand>Pizzeria Mamma Mia!</Navbar.Brand>
        <Nav className="me-auto">
          <Button variant="outline-light" className="text-white">
            🍕Home
          </Button>
          <Button variant="outline-light" className="text-white" onClick={register}>
            <img src={token ? lockopen : lock} alt="lock status" />
            {token ? "Profile" : "Register"}
          </Button>
          <Button variant="outline-light" className="text-white">
            <img src={token ? lockopen : lock} alt="lock status" />
            {token ? "LogOut" : "Login"}
          </Button>
        </Nav>
      </Container>
      <SignUp openFormulario={openFormulario} closeRegister={closeRegister} />
    </Navbar>
  );
}

export default NavBar;
