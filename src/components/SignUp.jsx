import { useState } from "react";
import "./SignUp.css";

const SignUp = ({ Children }) => {
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
      alert("contraseña muy corta");
    }
    if (password !== confirmpassword) {
      alert("Contraseñas no coinciden");
    }
  };
  return (
    <div className="wrapper modal is-open">
      <form action="">
        <h1>Sign up</h1>
        <button className="modal-close">x</button>
        <div className="input-box">
          <input
            type="text"
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
        <button type="submit" onClick={(event) => validacion(event)}>
          Registrarse
        </button>
        <div className="account-exist"></div>
        <label> ¿Ya tienes cuenta? </label>
        <a href="#">Inicia Sesion</a>
      </form>
      {Children}
    </div>
  );
};

export default SignUp;
