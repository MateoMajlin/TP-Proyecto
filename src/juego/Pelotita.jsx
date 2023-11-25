import React, { useState, useEffect } from 'react';
import PelotitaStyles from './Pelotita.module.css'; // Corrige el nombre de la importación

const Pelotita = () => {
  const [jumping, setJumping] = useState(false);
  const [position, setPosition] = useState(0);

  const handleKeyPress = (event) => {
    if (event.code === 'Space' && !jumping) {
      setJumping(true);
    }
  };

  const jump = () => {
    if (jumping) {
      setPosition((prevPosition) => prevPosition - 10);
    }
  };

  useEffect(() => {
    const gravity = setInterval(() => {
      if (jumping) {
        setPosition((prevPosition) => prevPosition + 5);
      }
    }, 20);

    return () => clearInterval(gravity);
  }, [jumping]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [jumping]);

  useEffect(() => {
    const checkBounds = setInterval(() => {
      if (position >= 0) {
        setJumping(false);
      }
    }, 20);

    return () => clearInterval(checkBounds);
  }, [position]);

  return (
    <div className={PelotitaStyles.App} style={{ marginTop: position }}>
      <h1>Presiona la barra espaciadora para hacer saltar la bolita</h1>
    </div>
  );
};

export default Pelotita; // Cambia el nombre de exportación a Pelotita
