// Cuenta.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import cuentaStyles from "./Cuenta.module.css";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useUser } from './UserContext'; // Importa el hook del contexto

function Cuenta() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { user, updateUser } = useUser(); // Usa el hook del contexto

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulamos una autenticación exitosa si todos los campos están completos
    if (email.trim() !== '' && password.trim() !== '' && username.trim() !== '') {
      // Almacenar información del usuario en el contexto
      const userObject = { email, username };
      updateUser(userObject);

      setLoggedIn(true);
      setShowSuccessMessage(true);

      // Resetear showSuccessMessage después de un tiempo para que no se muestre permanentemente
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000); // Mostrar el mensaje durante 3 segundos, ajusta según sea necesario
    } else {
      alert('Por favor, completa todos los campos.');
    }
  };

  return (
    <>
      <div className={cuentaStyles["cuenta-container"]}>
        <h2 className={cuentaStyles["cuenta-top"]}><Link to="/">Inicio</Link></h2>
        {user && (
          <p className={cuentaStyles["cuenta-usuario"]}>¡Hola, {user.username}!</p>
        )}
        <h1 className={cuentaStyles["cuenta-merengue"]}>Cuenta lul</h1>
        {loggedIn ? (
          <p className={cuentaStyles["cuenta-success-message"]}>
            {/* Puedes dejar este espacio en blanco o agregar algún mensaje adicional */}
          </p>
        ) : (
          <Form className={cuentaStyles["cuenta-form"]} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label className={cuentaStyles["cuenta-label"]}>Email address</Form.Label>
              <Form.Control
                className={cuentaStyles["cuenta-control"]}
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Label className={cuentaStyles["cuenta-label"]}>Username</Form.Label>
              <Form.Control
                className={cuentaStyles["cuenta-control"]}
                type="text"
                placeholder="Enter username"
                value={username}
                onChange={handleUsernameChange}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label className={cuentaStyles["cuenta-label"]}>Password</Form.Label>
              <Form.Control
                className={cuentaStyles["cuenta-control"]}
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className={cuentaStyles["cuenta-button"]} variant="primary" type="submit">
              Iniciar Sesión
            </Button>
          </Form>
        )}

        {showSuccessMessage && (
          <p className={cuentaStyles["cuenta-success-message"]}>
            ¡Bienvenido, has iniciado sesión exitosamente!
          </p>
        )}
      </div>
    </>
  );
}

export default Cuenta;
