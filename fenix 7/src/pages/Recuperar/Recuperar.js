import React, { useState } from 'react';
import './Recuperar.css';
import { Link } from 'react-router-dom';

function Recuperar() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [nuevaContrasena, setNuevaContrasena] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/recuperar-contrasena', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nombre, email, nuevaContrasena }),
      });
      if (response.ok) {
        setMensaje('Se ha enviado un código a su correo electrónico.');
      } else {
        throw new Error('No se pudo enviar el código. Inténtelo de nuevo más tarde.');
      }
    } catch (error) {
      setMensaje(error.message);
    }
  };

  return (
    <div className="wrapper">
      <form onSubmit={handleSubmit}>
        <h1>Recuperar Contraseña</h1>
        <p>{mensaje}</p>
        <div className="input-box">
          <input
            type="text"
            placeholder="Nombre Completo"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Nueva Contraseña"
            value={nuevaContrasena}
            onChange={(e) => setNuevaContrasena(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn">Enviar código</button>
        <Link to="/" className="return-link">REGRESAR</Link>
      </form>
    </div>
  );
}

export default Recuperar;
