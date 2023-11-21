// Cuenta.jsx
import React, { useState } from 'react';

function Cuenta() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      // Simula la autenticación exitosa y guarda el usuario en localStorage
      const user = { email, password };
      localStorage.setItem('user', JSON.stringify(user));

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
      <div className={cuentaStyles["cuenta-container"]}>
        <h2 className={cuentaStyles["cuenta-top"]}><Link to="/">Inicio</Link></h2>
        <h1 className={cuentaStyles["cuenta-merengue"]}>Cuenta lul</h1>
        {loggedIn ? (
          <p className={cuentaStyles["cuenta-success-message"]}>
            
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
      <div>
        {showSuccessMessage && (
          <p>¡Bienvenido, has iniciado sesión exitosamente!</p>
        )}
      </div>
    </>
  );
}

export default Cuenta;

