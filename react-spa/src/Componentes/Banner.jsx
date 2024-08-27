import React, { useState, useEffect } from 'react';
import logo from '../images/0002.jpg';
import banner2 from '../images/banner2.jpg';
import banner3 from '../images/banner3.jpg';
import '../App.css';

const Banner = () => {
  const [imagenActual, setImagenActual] = useState(0);

  const imagenes = [
    logo,      // Usa las variables importadas en lugar de cadenas de texto
    banner2,
    banner3,
  ];

  useEffect(() => {
    const cambiarImagen = () => {
      setImagenActual((prevImagenActual) => (prevImagenActual + 1) % imagenes.length);
    };

    const intervalId = setInterval(cambiarImagen, 3000); // Cambia la imagen cada 3 segundos

    return () => clearInterval(intervalId); // Limpia el intervalo cuando el componente se desmonte
  }, [imagenes.length]);

  return (
    <div className="banner">
      <img src={imagenes[imagenActual]} alt="Banner" />
    </div>
  );
};

export default Banner;
