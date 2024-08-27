import React, { useState, useEffect } from 'react';
import '../App.css'

function Tiempo() {
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');

  useEffect(() => {
    const actualizarFechaHora = () => {
      const now = new Date();
      const nuevaFecha = now.toLocaleDateString('es-ES');
      const nuevaHora = now.toLocaleTimeString('es-ES');
      setFecha(nuevaFecha);
      setHora(nuevaHora);
    };

    // Actualizar la fecha y la hora al montar el componente
    actualizarFechaHora();
    
    // Configurar un intervalo para actualizar cada segundo
    const intervalId = setInterval(actualizarFechaHora, 1000);

    // Limpiar el intervalo cuando el componente se desmonte
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="tiempo">
      <p>Fecha: <span>{fecha}</span></p>
      <p>Hora: <span>{hora}</span></p>
    </div>
  );
}

export default Tiempo;
