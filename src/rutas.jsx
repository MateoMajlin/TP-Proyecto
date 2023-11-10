import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";


function Rutas() {

  return (
    <>
    <Routes>
    <Route
        exact
        path="/"
        element={<App />}
      />
    </Routes>
    </>
  );
}

export default Rutas;