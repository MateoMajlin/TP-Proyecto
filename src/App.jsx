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
          <h1>JUEGOS K</h1>
        </div>
        <h2 className="etiqueta">1 JUGADOR</h2>
        <div className="juego">
          <Link to="https://www.txori.com/dbdevolution">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNF-1cfNRlyGgOT_4emHVmZpewEGjSXtXzmIrkE_Uldyawa6VwiC7jGfD7pxtprHCJ0vc&usqp=CAU"
              alt="pikapika"
            />
          </Link>
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
          <img
            src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg"
            alt="pikapika"
          />
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
          <img
            src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg"
            alt="pikapika"
          />
        </div>
        <h2 className="etiqueta">2 JUGADORES</h2>
        
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
          <img
            src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg"
            alt="pikapika"
          />
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
          <img
            src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg"
            alt="pikapika"
          />
        </div>
      </div>
    </>
  );
}

export default App;
