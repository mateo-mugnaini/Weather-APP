/* Imports Generales */

import React from "react";
import { Link } from "react-router-dom";

/* Estilos */
import styles from "./LandingPage.module.css";

/* Codigo */

const LandingPage = () => {
  return (
    <div className={styles.Contenedor_General}>
      <div className={styles.Contenedor_Titulo}>
        <h1 className={styles.Titulo}>WEATHER APP</h1>
        <h3 className={styles.Subtitulo}>By Mateo Mugnaini</h3>
      </div>
      <div className={styles.Contenedor_Btn}>
        <Link className={styles.Link} to="/home">
          <h3 className={styles.Btn}>Start</h3>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
