import React from 'react';
import pikachuImage from './pikachu.png';
import styles from './Pikachu.module.css';

const Pikachu = ({ position, onClick }) => {
  const style = {
    top: position.y,
    left: position.x,
  };

  return (
    <img
      src={pikachuImage}
      alt="Pikachu"
      style={style}
      onClick={onClick}
      className={styles.pikachu}
    />
  );
};

export default Pikachu;
