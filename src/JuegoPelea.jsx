import "./JuegoRaro.css";
import { useState } from "react";

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
      ${atacante.nombre} ataca a ${defensor.nombre} y le causa ${danio} de daño. 
    );

    if (defensor.vida <= 0) {
      setMensaje(
        ${defensor.nombre} ha sido derrotado. ¡${atacante.nombre} es el ganador!
      );
    }
  };

  const reiniciarJuego = () => {
    setJugador1({
      nombre: "Heroe",
      vida: 100
    });

    setJugador2({
      nombre: "Villano",
      vida: 100
    });

    setMensaje("");
  };

  return (
    <div className="pelea-container">
      <h1>Juego de Pelea</h1>

      <div className="jugadores">
        <div className="jugador">
          <p>{jugador1.nombre}</p>
          <p>Vida: {jugador1.vida}</p>
          <button onClick={() => atacar(jugador1, jugador2)}>
            Atacar
          </button>
        </div>

        <div className="jugador">
          <p>{jugador2.nombre}</p>
          <p>Vida: {jugador2.vida}</p>
          <button onClick={() => atacar(jugador2, jugador1)}>
            Atacar
          </button>
        </div>
      </div>

      <p className="mensaje">{mensaje}</p>

      <button className="reiniciar" onClick={reiniciarJuego}>
        Reiniciar Juego
      </button>
    </div>
  );
};

export default JuegoPelea;
