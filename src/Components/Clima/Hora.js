import React, { useEffect, useState } from "react";

const Hora = () => {
  const [horaActual, setHoraActual] = useState("");

  useEffect(() => {
    // Función para obtener la hora actual
    const obtenerHoraActual = () => {
      // Obtener la fecha y hora actual
      const fechaHoraActual = new Date();

      // Obtener las partes de la fecha y hora
      let hora = fechaHoraActual.getHours();
      let minutos = fechaHoraActual.getMinutes();
      let segundos = fechaHoraActual.getSeconds();

      // Formatear la hora para que siempre tenga 2 dígitos
      if (hora < 10) {
        hora = "0" + hora;
      }
      if (minutos < 10) {
        minutos = "0" + minutos;
      }
      if (segundos < 10) {
        segundos = "0" + segundos;
      }

      // Retornar la hora actual en el formato HH:MM:SS
      return hora + ":" + minutos + ":" + segundos;
    };

    // Actualizar la hora actual cada segundo
    const intervalo = setInterval(() => {
      const hora = obtenerHoraActual();
      setHoraActual(hora);
    }, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => {
      clearInterval(intervalo);
    };
  }, []);

  return (
    <div>
      <p>{horaActual}</p>
    </div>
  );
};

export default Hora;
