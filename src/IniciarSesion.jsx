import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const IniciarSesion = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setLoggedIn] = useState(false);

  const handleSubmit = () => {
    // Aquí puedes realizar la lógica de autenticación
    // Por simplicidad, asumimos que el usuario y la contraseña son correctos
    // En un entorno real, deberías validar la información en el servidor
    /*handleLogin();*/
    setLoggedIn(true);
  };

  if (isLoggedIn) {
    // Redirige al usuario a la página de inicio después de iniciar sesión
   return(<Link to= "/"><h1>Volver al Home</h1></Link>)
  }

  return (
    <div>
      <h2>Iniciar Sesión</h2>
      <label>
        Nombre de Usuario:
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <label>
        Contraseña:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br />
      <button onClick={handleSubmit}>Iniciar Sesión</button>
      <p>
        ¿No tienes una cuenta? <Link to="/">Regístrate aquí</Link>.
      </p>
    </div>
  );
};

export default IniciarSesion;
