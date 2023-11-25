import Juego from "./Juego.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const JuegoPelea = () => {
  const [jugador1, setJugador1] = useState({
    nombre: "Jugador 1",
    vida: 100
  });

  const [jugador2, setJugador2] = useState({
    nombre: "Jugador 2",
    vida: 100
  });

  const [mensaje, setMensaje] = useState("");

  const atacar = (atacante, defensor) => {
    const danio = Math.floor(Math.random() * 10) + 1;
    defensor.vida -= danio;

    setMensaje(
      `${atacante.nombre} ataca a ${defensor.nombre} y le causa ${danio} de daño.`
    );

    if (defensor.vida <= 0) {
      setMensaje(
        `${defensor.nombre} ha sido derrotado. ¡${atacante.nombre} es el ganador!`
      );
    }
  };

  const reiniciarJuego = () => {
    setJugador1({
      nombre: "Jugador 1",
      vida: 100
    });

    setJugador2({
      nombre: "Jugador 2",
      vida: 100
    });

    setMensaje("");
  };

  return (
    <div className={Juego.pelea}>
    <h2 className="top">
            <Link to="/">🔙</Link>
          </h2>
      <h1>FIGTH</h1>

      <div className={Juego.jugadores}>
        <div className={Juego.jugador}>
          <p>{jugador1.nombre}</p>
          <p>Vida: {jugador1.vida}</p>
          <button onClick={() => atacar(jugador1, jugador2)}>Atacar</button>
        </div>

        <div className={Juego.jugador}>
          <p>{jugador2.nombre}</p>
          <p>Vida: {jugador2.vida}</p>
          <button onClick={() => atacar(jugador2, jugador1)}>Atacar</button>
        </div>
      </div>

      <p className={Juego.mensaje}>{mensaje}</p>

      <button className={Juego.reiniciar} onClick={reiniciarJuego}>
        Reiniciar Juego
      </button>
    </div>
  );
};

export default JuegoPelea;
