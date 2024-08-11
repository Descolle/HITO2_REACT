import { useState } from "react";
import "./SignUp.css";

const SignUp = ({ children, openFormulario, closeRegister }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const validacion = (event) => {
    event.preventDefault();
    if (email === "" || password === "" || confirmpassword === "") {
      alert("Email y/o Contraseña no fueron colocados");
      return false;
    }
    if (password.length < 6) {
      alert("Contraseña muy corta");
      return;
    }
    if (password !== confirmpassword) {
      alert("Contraseñas no coinciden");
      return;
    }
  };

  return (
    <div className={`wrapper modal ${openFormulario ? "is-open" : ""}`}>
      <form action="">
        <h1>Sign up</h1>
        <button
          type="button"
          className="modal-close"
          onClick={closeRegister}
        >
           &times;
        </button>
        <div className="input-box">
          <input
            type="email"
            placeholder="Correo"
            required
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Contraseña"
            required
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Confirmar Contraseña"
            required
            onChange={(event) => setConfirmPassword(event.target.value)}
          />
        </div>
        <button type="submit" onClick={validacion} className="registro">
          Registrarse
        </button>
        <div className="account-exist">
          <label>¿Ya tienes cuenta?</label>
          <a href="#">Inicia Sesión</a>
        </div>
      </form>
      {children}
    </div>
  );
};

export default SignUp;
