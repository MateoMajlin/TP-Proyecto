<<<<<<< HEAD
import "./App.css";
import { Link } from 'react-router-dom';
function App() {
   return (
      <>
      <div className="body">
      <div className="superior">
      <h2 className="top"><Link to="/">Inicio</Link></h2><h2 className="top"><Link to="/Cuenta">Cuenta</Link></h2><h2 className="top"><Link to="/Easter">Easter</Link></h2>
      </div>
      <div>
         <h1>Juegos K</h1>
      </div>
      <h2 className="etiqueta">1 Jugador</h2>
      <div className="juego"><Link to="https://www.txori.com/dbdevolution"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNF-1cfNRlyGgOT_4emHVmZpewEGjSXtXzmIrkE_Uldyawa6VwiC7jGfD7pxtprHCJ0vc&usqp=CAU" alt="pikapika"></img></Link></div>
      <div className="juego"><img src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg" alt="pikapika"></img></div>
      <div className="juego"><img src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg" alt="pikapika"></img></div>
      <br></br>
      <div className="juego"><img src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg" alt="pikapika"></img></div>
      <div className="juego"><img src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg" alt="pikapika"></img></div>
      <div className="juego"><img src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg" alt="pikapika"></img></div>
      <h2 className="etiqueta">2 Jugadores</h2>
      <div className="juego"><img src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg" alt="pikapika"></img></div>
      <div className="juego"><img src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg" alt="pikapika"></img></div>
      <div className="juego"><img src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg" alt="pikapika"></img></div>
      <br></br>
      <div className="juego"><img src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg" alt="pikapika"></img></div>
      <div className="juego"><img src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg" alt="pikapika"></img></div>
      <div className="juego"><img src="https://i.pinimg.com/originals/dc/ab/b7/dcabb7fbb2f763d680d20a3d228cc6f9.jpg" alt="pikapika"></img></div>
      </div>
      </>
   )
}
export default App;
=======
import React from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import estilos from "./App.module.css"; 
import JuegoMemoria from "./JuegoMemoria";
import JuegoDosJugadores from "./JuegoDosJugadores";

function MensajeBienvenida({ usuario }) {
  if (usuario) {
    return <p>Bienvenido, {usuario.email}.</p>;
  }
  return null;
}

function App() {
  const usuario = JSON.parse(localStorage.getItem('usuario'));

  return (
    <Router>
      <>
        <div className={estilos.body}>
          <div className={estilos.superior}>
            <h2 className={estilos.top}><Link to="/">Inicio</Link></h2>
            <h2 className={estilos.top}><Link to="/Cuenta">Cuenta</Link></h2>
            <h2 className={estilos.top}><Link to="/Easter">Easter</Link></h2>
            <h2 className={estilos.top}><Link to="/JuegoDosJugadores">Juego 2 Jugadores</Link></h2>
          </div>

          <MensajeBienvenida usuario={usuario} />

          <h1>Juegos K</h1>

          <h2 className={estilos.etiqueta}>1 Jugador</h2>
          <div className={estilos.juego}>
            <a href="https://www.txori.com/dbdevolution">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNF-1cfNRlyGgOT_4emHVmZpewEGjSXtXzmIrkE_Uldyawa6VwiC7jGfD7pxtprHCJ0vc&usqp=CAU" alt="pikapika" />
            </a>
          </div>
          <br />

          <h2 className={estilos.etiqueta}>2 Jugadores</h2>
          <div className={estilos.juego}>
            <Link to="/JuegoDosJugadores">
              <img src="https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f3c7261a2d4b643efa146655aee238ad.jfif" alt="pikapika" />
            </Link>
          </div>
          <br />
        </div>

        <Switch>
          <Route path="/JuegoDosJugadores" component={JuegoDosJugadores} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
>>>>>>> 9597b4a4db3549b236bb5aa697bb80bdf2d78dcc
