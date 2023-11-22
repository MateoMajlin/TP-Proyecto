// App.js
import React from 'react';
import { Link } from 'react-router-dom';
import estilos from "./App.module.css";
import { useUser } from './UserContext'; // Importa el hook del contexto

function MensajeBienvenida({ usuario }) {
  if (usuario) {
    return <p>Bienvenido, {usuario.email}.</p>;
  }
  return null;
}

function App() {
  const { user } = useUser(); // Usa el hook del contexto

  return (
    <>
      <div className={estilos.body}>
        <div className={estilos.superior}>
          <h2 className={estilos.top}><Link to="/">Inicio</Link></h2>
          <h2 className={estilos.top}><Link to="/Cuenta">Cuenta</Link></h2>
          <h2 className={estilos.top}><Link to="/Easter">Easter</Link></h2>
          {user && (
            <p className={estilos.usuarioSuperior}>¡Hola, {user.username}!</p>
          )}
        </div>

        <MensajeBienvenida usuario={user} />

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
          <a href="https://poki.com/es/g/last-warriors">
            <img src="https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f3c7261a2d4b643efa146655aee238ad.jfif" alt="pikapika" />
          </a>
        </div>
        <br />
      </div>
    </>
  );
}

export default App;
