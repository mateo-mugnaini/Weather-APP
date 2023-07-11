import React from "react";
import styles from "./Navbar.module.css";

/* Multimedia */
import LogoColor from "../../Assets/Logos/logo-no-background.png";
import { Link } from "react-router-dom";

const Navbar = ({ handleSubmit, handleInputChange, city }) => {
  return (
    <nav className={styles.Navbar}>
      <div className={styles.Contenedor_Logo}>
        <Link className={styles.Link} to="/home">
          <img className={styles.Logo} src={LogoColor} alt="Logo" />
        </Link>
      </div>
      <div className={styles.Contenedor_Buscador}>
        <form className={styles.Buscador} onSubmit={handleSubmit}>
          <input
            type="text"
            value={city}
            onChange={handleInputChange}
            placeholder="Search City"
            className={styles.InputBuscador}
          />
          <button type="submit" className={styles.Btn_Buscar}>
            Search
          </button>
        </form>
      </div>
      <div className={styles.Contenedor_Btn}>
        {/* <Link className={styles.Link} to="/comments">
          <h2>Comments</h2>
        </Link> */}
        <Link className={styles.Link} to="/">
          <h2>Back</h2>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
