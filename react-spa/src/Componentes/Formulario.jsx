import React, { useState } from "react";
import pizza from '../images/003.jpg';
import '../App.css';

function Formulario() {
  const [nombres, setNombres] = useState('');
  const [correo, setCorreo] = useState('');
  const [pedido, setPedido] = useState('');

  const validarNombres = (nombres) => /^[a-zA-Z\s]+$/.test(nombres);
  const validarCorreo = (correo) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(correo);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validarNombres(nombres)) {
      alert('Por favor, ingrese un nombre válido (solo letras).');
      return;
    }

    if (!validarCorreo(correo)) {
      alert('Por favor, ingrese un correo electrónico válido.');
      return;
    }

    alert(`Datos correctos:\nNombres: ${nombres}\nCorreo: ${correo}\nPedido: ${pedido}`);
  };

  return (
    <section className="centro">
      <div className="img-text">
        <img src={pizza} alt="Pizza Americana" />
        <h2>Pizza Americana</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic numquam quasi temporibus asperiores unde. Nam eaque consequatur doloribus reprehenderit architecto et adipisci excepturi, sequi praesentium! Est modi sapiente quibusdam animi!</p>
      </div>
      <div className="formulary">
        <h2>CONTÁCTANOS PARA PODER LLEVAR UNA DELIPIZZA A TU CASA</h2>
        <section className="borde">
          <form className="formu" onSubmit={handleSubmit}>
            <div>
              <h3>Nombres y Apellidos</h3>
              <input
                type="text"
                placeholder="Nombres y Apellidos"
                value={nombres}
                onChange={(e) => setNombres(e.target.value)}
              />
            </div>
            <div>
              <h3>Correo Electrónico</h3>
              <input
                type="email"
                placeholder="ejemplo@email.com"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
            </div>
            <div>
              <h3>Haz tu pedido y disfruta de la mejor pizza</h3>
              <textarea
                placeholder="Describe tu pedido aquí"
                value={pedido}
                onChange={(e) => setPedido(e.target.value)}
              ></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </section>
      </div>
    </section>
  );
}

export default Formulario;
