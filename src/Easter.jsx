import React from 'react';
import { Link } from 'react-router-dom';
import easter from "./Easter.module.css";

function Easter() {
  return (
    <div className={easter.fondoeaster}>
      <h2 id={easter.egg}><Link to="/">Inicio</Link></h2>
    </div>
  );
}

export default Easter;

