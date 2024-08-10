const SignUp = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Sign up</h1>
        <div className="input-box">
          <input type="text" placeholder="Correo" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Contraseña" required />
        </div>
        <div className="input-box">
          <input type="password" placeholder="Confirmar Contraseña" required />
        </div>
        <button type="submit">Registrarse</button>
        <div className="account-exist"></div>
        <label> ¿Ya tienes cuenta? </label>
        <a href="#">Inicia Sesion</a>
      </form>
    </div>
  );
};

export default SignUp;
