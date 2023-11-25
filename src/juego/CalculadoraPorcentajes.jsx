import React, { useState } from "react";
import styles from "./JuegoRaro.module.css";
import { Link } from "react-router-dom";

const CalculadoraPorcentajes = () => {
  const [cantidad, setCantidad] = useState("");
  const [porcentaje, setPorcentaje] = useState("");
  const [resultado, setResultado] = useState(null);

  const calcularPorcentaje = () => {
    const cantidadFloat = parseFloat(cantidad);
    const porcentajeFloat = parseFloat(porcentaje);

    if (!isNaN(cantidadFloat) && !isNaN(porcentajeFloat)) {
      const resultadoCalculado = (cantidadFloat * porcentajeFloat) / 100;
      setResultado(resultadoCalculado);
    } else {
      setResultado(null);
    }
  };

  return (
    <div className={styles["calculadora-container"]}>
      <h1>Calculadora de Porcentajes del Pibe K</h1>
      <div className={styles["input-container"]}>
        <label>Cantidad:</label>
        <input
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(e.target.value)}
        />
      </div>
      <div className={styles["input-container"]}>
        <label>Porcentaje:</label>
        <input
          type="number"
          value={porcentaje}
          onChange={(e) => setPorcentaje(e.target.value)}
        />
      </div>
      <button onClick={calcularPorcentaje}>Calcular</button>
      {resultado !== null && (
        <div className={styles["resultado"]}>
          <p>
            El {porcentaje}% de {cantidad} es:
          </p>
          <p>{resultado}</p>
        </div>
      )}
    </div>
  );
};

export default CalculadoraPorcentajes;
