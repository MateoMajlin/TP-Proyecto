import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from './JuegoDos.module.css';

const JuegoDosJugadores = () => {

  const [opcionJugador1, setOpcionJugador1] = useState("");
  const [opcionJugador2, setOpcionJugador2] = useState("");
  const [resultado, setResultado] = useState("");
  
  const opcionesValidas = ["piedra", "papel", "tijeras"];

  const jugar = () => {
    if (
      !opcionesValidas.includes(opcionJugador1) ||
      !opcionesValidas.includes(opcionJugador2)
    ) {
      setResultado("Por favor, elige opciones válidas: piedra, papel o tijeras.");
      return;
    }

    if (opcionJugador1 === opcionJugador2) {
      setResultado("¡Empate!");
    } else if (
      (opcionJugador1 === "piedra" && opcionJugador2 === "tijeras") ||
      (opcionJugador1 === "papel" && opcionJugador2 === "piedra") ||
      (opcionJugador1 === "tijeras" && opcionJugador2 === "papel")
    ) {
      setResultado("¡Jugador 1 gana!");
    } else {
      setResultado("¡Jugador 2 gana!");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.top}>
        <Link to="/">🔙</Link>  
      </h2>

      <h1 className={styles.title}>Juego Piedra, Papel o Tijeras</h1>

      <label className={styles.label}>
        Jugador 1: 
        <select
          value={opcionJugador1}
          onChange={(e) => setOpcionJugador1(e.target.value)}
        >
          <option value="">Elige una opción</option>
          {opcionesValidas.map(opcion => (
            <option key={opcion} value={opcion}>{opcion}</option>
          ))}
        </select>
      </label>

      <label className={styles.label}>
        Jugador 2:
        <select
          value={opcionJugador2}
          onChange={(e) => setOpcionJugador2(e.target.value)}  
        >
          <option value="">Elige una opción</option>
          {opcionesValidas.map(opcion => (
            <option key={opcion} value={opcion}>{opcion}</option>
          ))}
        </select>
      </label>

      <button className={styles.button} onClick={jugar}>
        Jugar
      </button>

      <p className={styles.result}>{resultado}</p>

    </div>
  );
};

export default JuegoDosJugadores;
