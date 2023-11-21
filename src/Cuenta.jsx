import { Link } from 'react-router-dom';
import cuentaStyles from "./Cuenta.module.css";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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
      {/* Tu código actual aquí */}
      <div>
        {showSuccessMessage && (
          <p>¡Bienvenido, has iniciado sesión exitosamente!</p>
        )}
      </div>
    </>
  );
}

export default Cuenta;

