import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import './blog.css';

function CrearCuenta() {
  const navigate = useNavigate();
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [correo, setCorreo] = useState("");
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
    if (nombreUsuario && correo && contrasena) {
      const id = contador;
      const nuevaCuenta = { nombreUsuario, correo, contrasena, id };
      const cuentasActualizadas = [...cuentas, nuevaCuenta];
      setCuentas(cuentasActualizadas);
      localStorage.setItem('cuentas', JSON.stringify(cuentasActualizadas));
      setContador(contador + 1);
      setNombreUsuario("");
      setCorreo("");
      setContrasena("");
      localStorage.setItem('nombreUsuario', nombreUsuario);
      navigate('/');
    }
  }

  return (
    <div className="blog-container">
      <header>
        <img src="https://cdn4.iconfinder.com/data/icons/communication-v2/64/number_numero_count_thirty_five-2-512.png" alt="logo" />
        <nav className="nav-menu">
          <ul>
            <li>
              <Link to="/">Volver a la pagina principal</Link>
            </li>
            <li>
              <Link to="/blog">Publicar tu post</Link>
            </li>
            <li>
              <Link to="https://www.mercadopago.com.ar/">Apoyanos</Link>
            </li>
          </ul>
        </nav>
      </header>
      <form className="formulario" onSubmit={handleSubmit}>
        <h4>Crea tu cuenta</h4>
        <input
          className="datos"
          value={nombreUsuario}
          type="text"
          placeholder='Escribe tu nombre de usuario'
          onChange={e => setNombreUsuario(e.target.value)}
        />
        <input
          className="datos"
          value={correo}
          type="email"
          placeholder='Escribe tu correo electrónico'
          onChange={e => setCorreo(e.target.value)}
        />
        <input
          className="datos"
          value={contrasena}
          type="password"
          placeholder='Escribe tu contraseña'
          onChange={e => setContrasena(e.target.value)}
        />
        <button className="boton">Crear Cuenta</button>
      </form>
    </div>
  );
}

export default CrearCuenta;
