import { Link } from 'react-router-dom';
import cuenta from "./Cuenta.module.css";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function Cuenta() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim() !== '' && password.trim() !== '') {
      setLoggedIn(true);
      setShowSuccessMessage(true);

      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 3000); 
    } else {
      alert('Por favor, ingresa tu correo electrónico y contraseña.');
    }
  };

  return (
    <>
      <div>
        <h2 className="top"><Link to="/">Inicio</Link></h2>
        <h1 className={cuenta.merengue}>Cuenta lul</h1>
        {loggedIn ? (
          <p>Bienvenido, has iniciado sesión exitosamente.</p>
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={handleEmailChange}
              />
              <Form.Text className="text-muted">
               No vamos a compartir tu Email con nadie
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Iniciar Sesión
            </Button>
          </Form>
        )}

        {showSuccessMessage && (
          <p style={{ color: 'green' }}>¡Bienvenido, has iniciado sesión exitosamente!</p>
        )}
      </div>
    </>
  );
}

export default Cuenta;

