import React, { useState } from 'react';
import styles from './Easter.module.css';

const Easter = () => {
  const [posicion, setPosicion] = useState({ x: 100, y: 100 });
  const [emoji, setEmoji] = useState('🤪');

  const manejarClicBoton = () => {
    const nuevaX = Math.floor(Math.random() * window.innerWidth);
    const nuevaY = Math.floor(Math.random() * window.innerHeight);
    const emojiAleatorio = obtenerEmojiAleatorio();

    setPosicion({ x: nuevaX, y: nuevaY });
    setEmoji(emojiAleatorio);
  };

  const obtenerEmojiAleatorio = () => {
    const emojis = ['👽', '🤖', '🦄', '🐙'];
    const indiceAleatorio = Math.floor(Math.random() * emojis.length);
    return emojis[indiceAleatorio];
  };

  return (
    <div className={styles['juego-raro']}>
      <button
        style={{ top: posicion.y, left: posicion.x }}
        onClick={manejarClicBoton}
      >
        {emoji}
      </button>
    </div>
  );
};

export default Easter;
