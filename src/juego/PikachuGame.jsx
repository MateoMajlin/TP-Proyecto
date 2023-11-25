import React, { useState, useEffect } from 'react';
import Pikachu from './Pikachu';
import './PikachuGame.module.css';

const PikachuGame = () => {
  const [score, setScore] = useState(0);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleClick = () => {
    setScore(score + 1);
    setPosition({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
    });
  };

  useEffect(() => {
    document.title = `Score: ${score}`;
  }, [score]);

  return (
    <div className="pikachu-game">
      <h1>Pikachu Clicker</h1>
      <p>Score: {score}</p>
      <Pikachu position={position} onClick={handleClick} />
    </div>
  );
};

export default PikachuGame;
