import React from 'react';
import styles from './Cartas.module.css';

const Card = ({ card, flipped, onClick }) => (
  <div className={`${styles.card} ${flipped ? styles.flipped : ''}`} onClick={onClick}>
    {flipped ? card.symbol : '❓'}
  </div>
);

export default Card;
