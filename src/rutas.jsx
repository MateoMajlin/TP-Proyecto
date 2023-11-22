import {Routes, Route } from "react-router-dom";
import App from "./App";
import Cuenta from "./Cuenta";
import Easter from "./Easter";
import JuegoMemoria from "./JuegoMemoria"

function Rutas() {

  return (
    <>
    <Routes>
    <Route
        exact
        path="/"
        element={<App />}
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
        exact path= "/Memoria"
        element={<JuegoMemoria />}
          />
    </Routes>
    </>
  );
}

export default Rutas;
