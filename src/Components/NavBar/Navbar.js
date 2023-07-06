import React from "react";
import styles from "./Navbar.module.css";

/* Multimedia */
import LogoColor from "../../Assets/Logos/logo-no-background.png";
import { Link } from "react-router-dom";

const Navbar = ({ handleSubmit, handleInputChange, city }) => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.Contenedor_Btn}>
        <Link className={styles.Link} to="/">
          <h2>Back</h2>
        </Link>
      </div>
      <div className={styles.Contenedor_Logo}>
        <img className={styles.Logo} src={LogoColor} alt="Logo" />
      </div>
      <div className={styles.Contenedor_Buscador}>
        <form className={styles.Buscador} onSubmit={handleSubmit}>
          <input
            type="text"
            value={city}
            onChange={handleInputChange}
            placeholder="Buscar ciudad"
            className={styles.InputBuscador}
          />
          <button type="submit" className={styles.Btn_Buscar}>
            Buscar
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
