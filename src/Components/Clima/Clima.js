import React from "react";
import styles from "./Clima.module.css";

const Clima = ({ weatherData, error }) => {
  console.log({ weatherData });
  return (
    <div className={styles.Contenedor_General}>
      {error && <p className={styles.error}>{error}</p>}
      {weatherData && (
        <>
          <div className={styles.Info_Hora}>
            <div className={styles.Hora}>
              <h1 className={styles.Titulos}>{weatherData.time}</h1>
            </div>
          </div>
          {/* ---------------------- GEOGRAFIA ---------------------- */}
          <div className={styles.Contenedor2}>
            <div className={styles.Info_Geografica}>
              <div className={styles.Geografia}>
                <h1 className={styles.Titulos}>City:</h1>
                <p className={styles.Contenido}>{weatherData.city}</p>
              </div>
              <div className={styles.Geografia}>
                <h1 className={styles.Titulos}>Country:</h1>
                <p className={styles.Contenido}>{weatherData.country}</p>
              </div>
              <div className={styles.Geografia}>
                <h1 className={styles.Titulos}>Location:</h1>
                <div className={styles.Ubicacion}>
                  <p className={styles.Contenido2}>
                    Latitude: {weatherData.ubicacion.lat}°
                  </p>
                  <p className={styles.Contenido2}>
                    Length:{weatherData?.ubicacion.lon}°
                  </p>
                </div>
              </div>
            </div>
            {/* ---------------------- CLIMA ---------------------- */}
            <div className={styles.Info_Clima}>
              <div className={styles.Clima}>
                <h1 className={styles.Titulos}>Temperature:</h1>
                <p className={styles.Contenido}>{weatherData.temperature}°C</p>
              </div>
              <div className={styles.Clima}>
                <h1 className={styles.Titulos}>Humidity:</h1>
                <p className={styles.Contenido}>{weatherData.humidity}%</p>
              </div>
              <div className={styles.Clima}>
                <h1 className={styles.Titulos}>Wind:</h1>
                <p className={styles.Contenido}>{weatherData.wind_dir}</p>
                <p className={styles.Contenido}>{weatherData.wind_kph} k/h</p>
              </div>
              <div className={styles.Clima}>
                <h1 className={styles.Titulos}>Condition:</h1>
                <p className={styles.Contenido}>{weatherData.condition.text}</p>
                <img
                  src={weatherData.condition.icon}
                  alt={weatherData.condition.text}
                  className={styles.weatherIcon}
                />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Clima;
