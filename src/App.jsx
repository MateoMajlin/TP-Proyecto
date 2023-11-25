import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="body">
        <div className="superior">
          <h2 className="top">
            <Link to="/">Inicio</Link>
          </h2>
          <h2 className="top">
            <Link to="/Cuenta">Cuenta</Link>
          </h2>
          <h2 className="top">
            <Link to="/Easter">Easter</Link>
          </h2>
        </div>
        <div>
          <h1>Juegos K</h1>
        </div>
        <h2 className="etiqueta">1 Jugador</h2>
        <div className="juego">
          <Link to="https://www.txori.com/dbdevolution">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNF-1cfNRlyGgOT_4emHVmZpewEGjSXtXzmIrkE_Uldyawa6VwiC7jGfD7pxtprHCJ0vc&usqp=CAU"
              alt="pikapika"
            />
          </Link>
        </div>
        <div className="juego">
          <Link to="./Adivinanza">
            <img
              src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg"
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
        <h2 className="etiqueta">2 Jugadores</h2>
        
       <div className="juego">
          <Link to="./JuegoDosJugadores">
            <img
              src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg"
              alt="pikapika"
            />
          </Link>
        </div>
       <div className="juego">
          <Link to="./JuegoPelea">
            <img
              src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg"
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
