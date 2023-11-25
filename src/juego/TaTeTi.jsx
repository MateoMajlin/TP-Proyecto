import Tateti from "./Tateti.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const TaTeTi = () => {
  const [tablero, setTablero] = useState(Array(9).fill(null));
  const [turno, setTurno] = useState("X");
  const [ganador, setGanador] = useState(null);

  const comprobarGanador = () => {
  const lineasGanadoras = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < lineasGanadoras.length; i++) {
    const [a, b, c] = lineasGanadoras[i];

    if (tablero[a] && tablero[a] === tablero[b] && tablero[a] === tablero[c]) {
      setGanador(tablero[a]);
      return;
    }
  }

  if (!tablero.includes(null) && !ganador) {
    setGanador("Empate");
  }
};


  const manejarClick = (indice) => {
    if (tablero[indice] || ganador) {
      return;
    }

    const nuevoTablero = [...tablero];
    nuevoTablero[indice] = turno;
    setTablero(nuevoTablero);

    comprobarGanador();

    setTurno(turno === "X" ? "O" : "X");
  };

  const reiniciarJuego = () => {
    setTablero(Array(9).fill(null));
    setTurno("X");
    setGanador(null);
  };

  return (
    <>
  <h2>
    <Link to="/">🔙</Link>
  </h2>
  <div className={Tateti["retro-container"]}>
    <h1>TA-TE-TI</h1>
      <div className={Tateti.tablero}>
        {tablero.map((valor, indice) => (
          <div 
            key={indice}
            className={`${Tateti.casilla} ${valor}`}
            onClick={() => manejarClick(indice)}
          >
            {valor}
          </div>
        ))}
      </div>

      {ganador && (
        <div className={Tateti.mensaje}>
          {ganador === "Empate" 
            ? "¡Es un empate!"
            : `${ganador} ha ganado!`}
        </div>
      )}

      <button className={Tateti.reiniciar} onClick={reiniciarJuego}>
        Reiniciar Juego
      </button>
    </div>
  );
};

export default TaTeTi;
