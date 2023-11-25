import React from "react";
import { Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <div className="header">
        <h1>Juegos K</h1>
        <div className="logo">
          <img
            src="ruta/a/tu/logo.png"
            alt="Logo"
            width="50"
            height="50"
          />
        </div>
      </div>
      <div className="nav">
        <Link to="/">Inicio</Link>
        <Link to="/Cuenta">Cuenta</Link>
        <Link to="/Easter">Easter</Link>
      </div>
      <div className="body">
        <div className="juegos">
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
              src="https://cdn.pixabay.com/photo/2016/03/31/19/58/riddle-1295268_960_720.png"
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
