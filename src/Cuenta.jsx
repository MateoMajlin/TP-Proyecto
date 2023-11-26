import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Cuenta.module.css';

function Cuenta() {
  const navigate = useNavigate();
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [cuentas, setCuentas] = useState([]);
  const [contador, setContador] = useState(0);

  useEffect(() => {
    let cuentasGuardadas = JSON.parse(localStorage.getItem('cuentas'));
    if (cuentasGuardadas) {
      setCuentas(cuentasGuardadas);
      const maxId = Math.max(...cuentasGuardadas.map(cuenta => cuenta.id), 0);
      setContador(maxId + 1);
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (nombreUsuario &&  contrasena) {
      const id = contador;
      const nuevaCuenta = { nombreUsuario, contrasena, id };
      const cuentasActualizadas = [...cuentas, nuevaCuenta];
      setCuentas(cuentasActualizadas);
      localStorage.setItem('cuentas', JSON.stringify(cuentasActualizadas));
      setContador(contador + 1);
      setNombreUsuario("");
      setContrasena("");
      localStorage.setItem('nombreUsuario', nombreUsuario);
      navigate('/');
    }
  }

  return (
    <div className="blog-container">
      <header>
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/">VOLVER A LOS INCREIBLES 🎮JUEGOS K🎮 </Link>
            </li>
          </ul>
        </nav>
      </header>
      <form className="formulario" onSubmit={handleSubmit}>
        <img src="https://www.stec.com.ar/wp-content/uploads/2022/08/pc-gamer-640x360.jpeg" alt="gamer"></img>
        <h4>CREA TU CUENTA!!! para una mejor experiencia 😄</h4>
        <input
          className="datos"
          value={nombreUsuario}
          type="text"
          placeholder='Escribe tu nombre de usuario'
          onChange={e => setNombreUsuario(e.target.value)}
        />
        <br />
        <input
          className="datos"
          value={contrasena}
          type="password"
          placeholder='Escribe tu contraseña'
          onChange={e => setContrasena(e.target.value)}
        />
        <br />
        <button className="boton">Crear Cuenta</button>
      </form>
    </div>
  );
}

export default Cuenta;
