import React, { useState } from "react";

const LogIn = ({ abierto, CloseLog }) => {  // Recibe las props
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");

  return (
    <div className={`wrapper modal ${abierto ? "is-open" : ""}`}>
      <form action="">
        <h1>Log In</h1>
        <button type="button" className="modal-close" onClick={CloseLog}>  {/* Usa CloseLog para cerrar el modal */}
          &times;
        </button>
        <div className="input-box">
          <input
            type="email"
            placeholder="Correo"
            required
            onChange={(event) => setUsuario(event.target.value)}
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Contraseña"
            required
            onChange={(event) => setContraseña(event.target.value)}
          />
        </div>
        <button type="submit" className="registro">
          Iniciar Sesion
        </button>
        <div className="account-exist">
          <label>¿Olvidaste tu Contraseña?</label>
          <a href="#">Recuerdame</a>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
