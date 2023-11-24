import {Routes, Route } from "react-router-dom";
import App from "./App";
import Cuenta from "./Cuenta";
import Easter from "./Easter";
import CrearCuenta from "./CrearCuenta";
import IniciarSesion from "./IniciarSesion";
import { useState } from "react";

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
        exact
        path="/Cuenta/IniciarSesion"
        element={<IniciarSesion isLoggedIn={isLoggedIn} setLoggedIn={setLoggedIn}/>}
      />
      <Route
        exact
        path="/Cuenta/CrearCuenta"
        element={<CrearCuenta />}
      />
    </Routes>
    </>
  );
}

export default Rutas;