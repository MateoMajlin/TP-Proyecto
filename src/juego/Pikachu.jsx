import React from 'react';
import pikachuImage from './pikachu.png';

const Pikachu = ({ position, onClick }) => {
  const style = {
    position: 'absolute',
    top: position.y,
    left: position.x,
    cursor: 'pointer',
  };

  return (
    <img
      src={pikachuImage}
      alt="Pikachu"
      style={style}
      onClick={onClick}
      className="pikachu"
    />
  );
};

export default Pikachu;
