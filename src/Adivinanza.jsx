import React, { useState } from "react";
import "./Adivinanza.css";
const Adivinanza = () => {
  const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
  const [adivinanza, setAdivinanza] = useState("");
  const [intentos, setIntentos] = useState(0);
  const [mensaje, setMensaje] = useState("");

  const manejarAdivinanza = (event) => {
    setAdivinanza(event.target.value);
  };

  const verificarAdivinanza = () => {
    const numeroIngresado = parseInt(adivinanza);

    if (isNaN(numeroIngresado)) {
      setMensaje("Por favor, ingresa un número válido.");
    } else {
      setIntentos(intentos + 1);

      if (numeroIngresado === numeroAleatorio) {
        setMensaje(Correcto, Adivinaste el número en ${intentos} intentos.);
      } else if (numeroIngresado < numeroAleatorio) {
        setMensaje("El número es demasiado bajo. Intenta de nuevo.");
      } else {
        setMensaje("El número es demasiado alto. Intenta de nuevo.");
      }
    }
  };

  return (
    <div>
      <h1>Juego Adivina el Número</h1>
      <p>Intenta adivinar el número entre 1 y 100.</p>

      <input
        type="text"
        value={adivinanza}
        onChange={manejarAdivinanza}
        placeholder="Ingresa tu adivinanza"
      />

      <button onClick={verificarAdivinanza}>Verificar</button>

      <p>{mensaje}</p>
    </div>
  );
};

export default Adivinanza;
