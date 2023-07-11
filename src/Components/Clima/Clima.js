import React from "react";
import styles from "./Clima.module.css";

// import Hora from "./Hora_Actual";

const Clima = ({ weatherData, error }) => {
  return (
    <div className={styles.Contenedor_General}>
      {error && <p className={styles.error}>{error}</p>}
      {weatherData && (
        <>
          <div className={styles.Contenedor_Hora}>
            {/* <h2>
              <Hora />
            </h2> */}
          </div>
          <div className={styles.Contenedor_Icon_Clima}>
            <img
              src={weatherData.condition.icon}
              alt={weatherData.condition.text}
              className={styles.Icon_Clima}
            />
            <h1 className={styles.Contenido}>{weatherData.condition.text}</h1>
          </div>
          {/* ---------------------- GEOGRAFIA ---------------------- */}
          <div className={styles.Contenedor2}>
            <div className={styles.Contenedor_Contenido}>
              <div className={styles.Contenido}>
                <h1 className={styles.Titulos}>City:</h1>
                <h2 className={styles.SubTitlulo}>{weatherData.city}</h2>
              </div>
              <div className={styles.Contenido}>
                <h1 className={styles.Titulos}>Country:</h1>
                <h2 className={styles.SubTitlulo}>{weatherData.country}</h2>
              </div>
              <div className={styles.Contenido}>
                <h1 className={styles.Titulos}>Location:</h1>
                <div className={styles.Ubicacion}>
                  <h2 className={styles.Contenido2}>
                    Latitude: {weatherData.ubicacion.lat}°
                  </h2>
                  <h2 className={styles.Contenido2}>
                    Length:{weatherData?.ubicacion.lon}°
                  </h2>
                </div>
              </div>
            </div>
            {/* ---------------------- CLIMA ---------------------- */}
            <div className={styles.Contenedor_Contenido}>
              <div className={styles.Contenido}>
                <h1 className={styles.Titulos}>Temperature:</h1>
                <h2 className={styles.SubTitlulo}>
                  {weatherData.temperature}°C
                </h2>
              </div>
              <div className={styles.Contenido}>
                <h1 className={styles.Titulos}>Humidity:</h1>
                <h2 className={styles.SubTitlulo}>{weatherData.humidity}%</h2>
              </div>

              <div className={styles.Contenido}>
                <h1 className={styles.Titulos}>Wind:</h1>
                <div className={styles.Ubicacion}>
                  <h2 className={styles.Contenido2}>
                    {weatherData.wind_kph} k/h
                  </h2>
                  <h2 className={styles.Contenido2}>
                    Dir: {weatherData.wind_dir}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          {/* ---------------------- CLIMA EXTENDIDO ---------------------- */}
          <h1 className={styles.titulo_Extendido}>Extended day forecast</h1>
          <div className={styles.Contenedor_Extendido}>
            {weatherData.extendido[0].hour.map((e) => (
              <div className={styles.extendido}>
                <img
                  className={styles.icon_Extendido}
                  src={e.condition.icon}
                  alt={e.condition.text}
                />
                <h4 className={styles.text_Extendido}>{e.condition.text}</h4>
                <div className={styles.hora_Extendido}>
                  <h3>{e.time[11]}</h3>
                  <h3>{e.time[12]}</h3>
                  <h3>{e.time[13]}</h3>
                  <h3>{e.time[14]}</h3>
                  <h3>{e.time[15]}</h3>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Clima;
