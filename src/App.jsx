import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="body">
        <div className="superior">
          <h2 className="top">
            <Link to="/">INICIO</Link>
          </h2>
          <h2 className="top">
            <Link to="/Cuenta">CUENTA</Link>
          </h2>
          <h2 className="top">
            <Link to="/Easter">EASTER</Link>
          </h2>
        </div>
        <div>
          <h1>"🕹️ JUEGOS K 🕹️"</h1>
        </div>
        <h2 className="etiqueta">1 JUGADOR</h2>
        <div className="juego">
          <img
            src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg"
            alt="pikapika"
          />
        </div>
        <div className="juego">
          <Link to="./juego/Adivinanza">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-cntOunZDOAQSX-TBH2fstWxbSaclrfSR-Q&usqp=CAU"
              alt="pikapika"
            />
          </Link>
        </div>
         <div className="juego">
          <Link to="./juego/CalculadoraPorcentajes">
            <img
              src="https://img.freepik.com/vector-gratis/calculadora-rosa-sobre-fondo-blanco_1308-74126.jpg"
              alt="pikapika"
            />
          </Link>
        </div>
        <br></br>
         <div className="juego">
          <img
            src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg"
            alt="pikapika"
          />
        </div>
        <div className="juego">
        <img
            src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg"
            alt="pikapika"
          />
        </div>
        <div className="juego">
        <Link to="https://www.friv.com/z/games/savagepursuit/game.html?c">
            <img
              src="https://cn.i.cdn.ti-platform.com/cnemea/content/1185/game/savage-pursuit/za/savagepursuit-b10c-cover-en.jpg "
              alt="pikapika"
            />
          </Link>
        </div>
        <h2 className="etiqueta">2 JUGADORES</h2>
        <br></br>
       <div className="juego">
          <Link to="./juego/JuegoDosJugadores">
            <img
              src="https://media.istockphoto.com/id/1056840214/es/vector/piedra-papel-tijera-ilustraci%C3%B3n-vectorial.jpg?s=612x612&w=0&k=20&c=csejv5CWnlwVtrAlElVS4V5ZDxWYeh9_tP7clemraDY="
              alt="pikapika"
            />
          </Link>
        </div>
       <div className="juego">
          <Link to="./juego/JuegoPelea">
            <img
              src="https://www.shutterstock.com/image-vector/vector-cartoon-stick-figure-drawing-260nw-1603967566.jpg"
              alt="pikapika"
            />
          </Link>
        </div>
         <div className="juego">
          <Link to="./juego/TaTeTi">
            <img
              src="https://as1.ftcdn.net/v2/jpg/02/56/90/96/1000_F_256909648_N6yv1EsJYwdZXwcSv9GJCA01pWsPoWE2.jpg"
              alt="pikapika"
            />
          </Link>
        </div>
        <br></br>
        <div className="juego">
        <Link to="https://dvadi.com/es/juego/football-heads-la-copa-mundial-2022">
            <img
              src="data:image/jpeg;base64,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"
              alt="pikapika"
            />
          </Link>
        </div>
        <div className="juego">
          <img
            src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg"
            alt="pikapika"
          />
        </div>
        <div className="juego">
        <Link to="https://www.txori.com/dbdevolution">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNF-1cfNRlyGgOT_4emHVmZpewEGjSXtXzmIrkE_Uldyawa6VwiC7jGfD7pxtprHCJ0vc&usqp=CAU"
              alt="pikapika"
            />
          </Link>
        </div>
      </div>
    </>
  );
}

export default App;
