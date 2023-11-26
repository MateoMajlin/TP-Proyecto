import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import styles from './Cuenta.module.css'; // Asegúrate de tener esta importación

function Cuenta(props) {
  const navigate = useNavigate();
  const { setAdmin } = props;
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");
  const [ver, setVer] = useState("password");

  function HandleSubmit(e) {
    e.preventDefault();
    if (pass === "react") {
      setAdmin(true);
      navigate('/');
    } else {
      setAdmin(false);
      setError("Contraseña incorrecta");
    }
  }

  function ViewPass(e) {
    e.preventDefault();
    setVer((prevVer) => (prevVer === "password" ? "text" : "password"));
  }

  return (
    <>
      <header>
        <img src="https://cdn4.iconfinder.com/data/icons/communication-v2/64/number_numero_count_thirty_five-2-512.png" alt="logo" />
        <nav className={styles['nav-menu']}>
          <ul>
            <li>
              <Link to="/">Volver a la pagina principal</Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className={styles['ContenedorGeneral']}>
        {error && <h1 className={styles['admin-error']}>{error}</h1>}
        <form className={styles['admin-form']}>
          <input
            className={styles['admin-input']}
            value={pass}
            type={ver}
            placeholder="Ingresa la contraseña"
            onChange={(e) => setPass(e.target.value)}
          />
          <button className={styles['admin-button']} onClick={ViewPass}>
            {ver === "password" ? "Ver contraseña 🔐" : "Ocultar contraseña"}
          </button>
          <button className={styles['admin-button']} onClick={HandleSubmit}>
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}

export default Cuenta;
