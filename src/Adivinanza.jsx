import React, { useState } from "react";
import EstilosAdivinanza from "./Adivinanza.module.css";

const Adivinanza = () => {

  const [numeroAleatorio, setNumeroAleatorio] = useState(
    Math.floor(Math.random() * 100) + 1  
  );

  const [adivinanzaUsuario, setAdivinanzaUsuario] = useState("");
   
  const [intentos, setIntentos] = useState(0);

  const [mensaje, setMensaje] = useState("");

  const manejarCambio = (event) => {
    setAdivinanzaUsuario(event.target.value);
  }

  const verificarRespuesta = () => {

    const numeroIngresado = parseInt(adivinanzaUsuario);

    if (isNaN(numeroIngresado)) {
      setMensaje("Debes ingresar un número");    
    } else {
    
      setIntentos(intentos + 1);

      if (numeroIngresado === numeroAleatorio) {
        setMensaje(`¡Adivinaste en ${intentos} intentos!`);
        generaNuevoNumero();
      
      } else if (numeroIngresado < numeroAleatorio) {        
        setMensaje("Demasiado bajo...");
      
      } else {       
        setMensaje("Demasiado alto...");
      }

    }

  }
  
  const generaNuevoNumero = () => {
    const nuevoAleatorio = Math.floor(Math.random() * 100) + 1;  
    setNumeroAleatorio(nuevoAleatorio);
  }

  return (
  <div className="adivinanza">
    <h1>Adivina el Número</h1>

    <p>Tenés {intentos} intento{intentos > 1 && "s"}</p>

    <input
      type="number"
      value={adivinanzaUsuario}
      onChange={manejarCambio}
    />

    <button onClick={verificarRespuesta}>Verificar</button>

    <p>{mensaje}</p>

    {
      numeroAleatorio > 0 && 
      <p>
        Número aleatorio entre 1 y 100: 
        <strong>{numeroAleatorio}</strong>  
      </p>
    }

  </div>
); 

}

export default Adivinanza;
