import React, { useState, useEffect } from 'react';

const JuegoMemoria = () => {
  const [secuencia, setSecuencia] = useState([]);
  const [inputUsuario, setInputUsuario] = useState([]);
  const [mensaje, setMensaje] = useState('¡Comienza el juego! Observa la secuencia.');

  const colores = ['rojo', 'azul', 'verde', 'amarillo'];

  const generarSecuencia = () => {
    const nuevaSecuencia = [...secuencia, colores[Math.floor(Math.random() * 4)]];
    setSecuencia(nuevaSecuencia);
    setInputUsuario([]);
    setMensaje('¡Tu turno! Repite la secuencia.');
  };

  const manejarClic = (color) => {
    setInputUsuario([...inputUsuario, color]);
  };

  useEffect(() => {
    if (secuencia.length === 0) {
      generarSecuencia();
    }

    if (inputUsuario.length === secuencia.length) {
      if (JSON.stringify(inputUsuario) === JSON.stringify(secuencia)) {
        setMensaje('¡Correcto! Siguiente nivel.');
        setTimeout(() => generarSecuencia(), 1000);
      } else {
        setMensaje(`¡Incorrecto! Has perdido. Tu puntaje fue ${secuencia.length - 1}.`);
        setSecuencia([]);
      }
    }
  }, [inputUsuario, secuencia, generarSecuencia]); // Agregar generarSecuencia al array de dependencias

  return (
    <div>
      <h1>Juego de Memoria</h1>
      <p>{mensaje}</p>
      <div className="tablero">
        {colores.map((color, index) => (
          <div
            key={index}
            className={`celda ${color}`}
            onClick={() => manejarClic(color)}
            disabled={inputUsuario.length === secuencia.length}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default JuegoMemoria;
