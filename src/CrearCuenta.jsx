import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CrearCuenta = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isRegistered, setRegistered] = useState(false);

  const handleRegister = () => {
    // Verifica que la contraseña y la confirmación coincidan
    if (password === confirmPassword) {
      // Aquí puedes realizar la lógica de registro
      // Por simplicidad, solo establecemos el estado de registro en true
      setRegistered(true);
    } else {
      alert('La contraseña y la confirmación de contraseña no coinciden');
    }
  };

  return (
    <div>
      {isRegistered ? (
        <div>
          <h2>Cuenta creada con éxito, {username}!</h2>
          <p>Por favor, inicia sesión con tu nueva cuenta.</p>
        </div>
      ) : (
        <div>
          <h2>Crear Cuenta</h2>
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
            Correo Electrónico:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <label>
            Confirmar Contraseña:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
          <br />
          <button onClick={handleRegister}>Crear Cuenta</button>
        </div>
      )}
      {isRegistered && <Link to="/"><h1>Volver a la pagina de Inicio</h1></Link>}
    </div>
  );
};

export default CrearCuenta;
