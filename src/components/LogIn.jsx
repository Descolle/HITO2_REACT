const LogIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");

    return (
      <div className={`wrapper modal ${openFormulario ? "is-open" : ""}`}>
        <form action="">
          <h1>Log In</h1>
          <button
            type="button"
            className="modal-close"
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
          <button type="submit"  className="registro">
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


export default LogIn