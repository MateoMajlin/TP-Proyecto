import { Routes, Route } from "react-router-dom";
import App from "./App";
import Cuenta from "./Cuenta";
import Easter from "./Easter";
import IniciarSesion from "./IniciarSesion";
import CrearCuenta from "./CrearCuenta";
import Adivinanza from "./Adivinanza";
import JuegoDosJugadores from "./JuegoDosJugadores";
import JuegoPelea from "./JuegoPelea";

function Rutas() {
  return (
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/JuegoPelea" element={<JuegoPelea />} />
      <Route exact path="/Cuenta" element={<Cuenta />} />
      <Route exact path="/Easter" element={<Easter />} />
      <Route exact path="/Cuenta/IniciarSesion" element={<IniciarSesion />} />
      <Route exact path="/Cuenta/CrearCuenta" element={<CrearCuenta />} />
      <Route exact path="/Adivinanza" element={<Adivinanza />} />
      <Route
        exact
        path="/JuegoDosJugadores"
        element={<JuegoDosJugadores />}
      />
    </Routes>
  );
}

export default Rutas;
