import {Routes, Route } from "react-router-dom";
import App from "./App";
import Cuenta from "./Cuenta";
import Easter from "./Easter";
<<<<<<< HEAD
import CrearCuenta from "./CrearCuenta";
import IniciarSesion from "./IniciarSesion";
import { useState } from "react";
=======
import JuegoMemoria from "./JuegoMemoria"
>>>>>>> 9597b4a4db3549b236bb5aa697bb80bdf2d78dcc

function Rutas() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <>
    <Routes>
    <Route
        exact
        path="/"
        element={<App isLoggedIn={isLoggedIn}/>}
      />
      <Route
        exact
        path="/Cuenta"
        element={<Cuenta />}
      />
      <Route
        exact
        path="/Easter"
        element={<Easter />}
      />
      <Route
<<<<<<< HEAD
        exact
        path="/Cuenta/IniciarSesion"
        element={<IniciarSesion isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>}
      />
      <Route
        exact
        path="/Cuenta/CrearCuenta"
        element={<CrearCuenta />}
      />
=======
        exact path= "/JuegoDosJugadores"
        element={<JuegoDosJugadores />}
          />
>>>>>>> 9597b4a4db3549b236bb5aa697bb80bdf2d78dcc
    </Routes>
    </>
  );
}

export default Rutas;
