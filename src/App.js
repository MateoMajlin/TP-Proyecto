import "./App.module.css";
import React from 'react';
import { Link } from 'react-router-dom';
function App() {
   const user = JSON.parse(localStorage.getItem('user'));
   return (
      <>
      <div className="body">
      <div className="superior">
      <h2 className="top"><Link to="/">Inicio</Link></h2><h2 className="top"><Link to="/Cuenta">Cuenta</Link></h2><h2 className="top"><Link to="/Easter">Easter</Link></h2>
      </div>
      <div>
         {user && (
          <p>Bienvenido, {user.email}.</p>
        )}
         <h1>Juegos K</h1>
      </div>
      <h2 className="etiqueta">1 Jugador</h2>
      <div className="juego"><Link to="https://www.txori.com/dbdevolution"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNF-1cfNRlyGgOT_4emHVmZpewEGjSXtXzmIrkE_Uldyawa6VwiC7jGfD7pxtprHCJ0vc&usqp=CAU" alt="pikapika"></img></Link></div></div>
      <br></br>
      <h2 className="etiqueta">2 Jugadores</h2>
      <div className="juego"><Link to="https://poki.com/es/g/last-warriors"><img src="https://img.poki.com/cdn-cgi/image/quality=78,width=204,height=204,fit=cover,f=auto/f3c7261a2d4b643efa146655aee238ad.jfif" alt="pikapika"></img></Link></div>
      <br></br>
      </>
   )
}
export default App;
