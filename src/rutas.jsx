import { Routes, Route } from "react-router-dom";
import App from "./App";
import Cuenta from "./Cuenta";
import Easter from "./Easter";
import Adivinanza from "./juego/Adivinanza";
import JuegoDosJugadores from "./juego/JuegoDosJugadores";
import JuegoPelea from "./juego/JuegoPelea";
import TaTeTi from "./juego/TaTeTi";
import CalculadoraPorcentajes from "./juego/CalculadoraPorcentajes";


function Rutas() {
  return (
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/juego/JuegoPelea" element={<JuegoPelea />} />
       <Route exact path="/juego/TaTeTi" element={<TaTeTi />} />
       <Route exact path="/juego/CalculadoraPorcentajes" element={<CalculadoraPorcentajes />} />
      <Route exact path="/Cuenta" element={<Cuenta />} />
      <Route exact path="/Easter" element={<Easter />} />
      <Route exact path="/juego/Adivinanza" element={<Adivinanza />} />
      <Route
        exact
        path="/juego/JuegoDosJugadores"
        element={<JuegoDosJugadores />}
      />
    </Routes>
  );
}

export default Rutas;
