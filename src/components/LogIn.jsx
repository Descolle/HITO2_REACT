const LogIn = () => {
  const [usuario, setUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const validarLogin = (e) => 
    e.prevent.Default();
    alert("funca");
  return (
    <div className={`wrapper modal ${openFormulario ? "is-open" : ""}`}>
      <form action="" onSubmit={validarLogin}>
        <h1>Log In</h1>
        <button type="button" className="modal-close">
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
