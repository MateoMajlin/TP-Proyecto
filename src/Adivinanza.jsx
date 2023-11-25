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

        setMensaje(`¡Correcto! Adivinaste el número en ${intentos} intentos.`);
      
      } else if (numeroIngresado < numeroAleatorio) {

        setMensaje("El número es demasiado bajo. Intenta de nuevo.");
      
      } else {

        setMensaje("El número es demasiado alto. Intenta de nuevo.");
      
      }

    }

  };

  return (

    <div>
      // resto del componente 
    </div>

  );

};

export default Adivinanza;
