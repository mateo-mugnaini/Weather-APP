import React, { useState } from "react";
import axios from "axios";

import Navbar from "../NavBar/Navbar";
import Clima from "../Clima/Clima";

import styles from "./Home.module.css";

const Home = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (city === "") {
        setError("⛔ You have not entered any city ⛔");
        setWeatherData(null);
        return;
      }

      const apiKey = "f9e981c26a804b45aa5222931230507"; // Reemplaza con tu API Key de WeatherAPI
      const url = `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&days=1&aqi=no&alerts=no`;

      const response = await axios.get(url);

      if (response.status === 200) {
        const { location, current, forecast } = response.data;

        const ubicacionGeneral = response.data.location;

        const lastUpdated = current.last_updated;

        const [fecha, hora] = lastUpdated.split(" ");

        const [ano, mes, dia] = fecha.split("-");
        const [horas, minutos] = hora.split(":");

        // Formatear la hora y la fecha según tu preferencia
        const fechaFormateada = `${dia}/${mes}/${ano}`;
        const horaFormateada = `${horas}:${minutos}`;

        // Combinar la fecha y la hora formateadas
        const horaDesarmada = `${fechaFormateada} - ${horaFormateada}`;
        setWeatherData({
          city: location.name,
          country: location.country,
          temperature: current.temp_c,
          humidity: current.humidity,
          time: horaDesarmada,
          condition: current.condition,
          ubicacion: ubicacionGeneral,
          wind_dir: current.wind_dir,
          wind_kph: current.wind_kph,
          extendido: forecast.forecastday,
        });
        setError("");
      } else {
        setWeatherData(null);
        setError("⛔ No data found for the specified city ⛔");
      }
    } catch (error) {
      console.error("Error:", error);
      setWeatherData(null);
      setError("⛔ There is a typo. Please correct it and search again. ⛔");
    }
  };

  return (
    <div className={styles.Contenedor_General}>
      <div className={styles.Contenedor_Navbar}>
        <Navbar
          handleSubmit={handleSubmit}
          handleInputChange={handleInputChange}
          city={city}
        />
      </div>
      <div className={styles.Contenedor_Clima}>
        <Clima weatherData={weatherData} error={error} />
      </div>
    </div>
  );
};

export default Home;
