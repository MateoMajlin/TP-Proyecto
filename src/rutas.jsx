import {Routes, Route } from "react-router-dom";
import App from "./App";
import Cuenta from "./Cuenta";
import Easter from "./Easter";


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
    </Routes>
    </>
  );
}

export default Rutas;