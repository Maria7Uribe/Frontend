import React, { useState } from 'react';
import './IndexBodega.css';  // Asegúrate de que el archivo CSS está correctamente vinculado

function IndexBodega() {
  const [showDamasDropdown, setShowDamasDropdown] = useState(false);
  const [showCaballeroDropdown, setShowCaballeroDropdown] = useState(false);

  // Simular el cierre de sesión
  const handleLogout = () => {
    // Aquí podrías llamar a una API para cerrar la sesión del lado del servidor
    console.log("Cerrando sesión...");

    // Ejemplo de cómo podrías manejar el cierre de sesión en el frontend
    // Supongamos que guardas el estado de autenticación en el localStorage o similar
    localStorage.removeItem('userToken');  // Suponiendo que usas un token guardado en localStorage
    window.location.href = '/';  // Redirigir al inicio o a la página de login
  };

  return (
    <div>
      <nav className="navbar">
        <div className="brand-logo">
          Sport<span className="brand-highlight">Line</span>
        </div>
        <ul>
          <li onClick={() => setShowDamasDropdown(!showDamasDropdown)}>
            <a href="#dama">Damas</a>
            {showDamasDropdown && (
              <div className="dropdown-content">
                <a href="/AdidasDamasB">Adidas</a>
                <a href="/NikeDamasB">Nike</a>
                <a href="/FilaDamasB">Fila</a>
                <a href="/JordandamasB">Jordan</a>
                <a href="/PumaDamasB">Puma</a>
              </div>
            )}
          </li>
          <li onClick={() => setShowCaballeroDropdown(!showCaballeroDropdown)}>
            <a href="#caballero">Caballero</a>
            {showCaballeroDropdown && (
              <div className="dropdown-content">
                <a href="/AdidasCaballerosB">Adidas</a>
                <a href="/NikeCaballerosB">Nike</a>
                <a href="/FilaCaballerosB">Fila</a>
                <a href="JordanCaballerosB">Jordan</a>
                <a href="/pumacaballerosb">Puma</a>
              </div>
            )}
          </li>
          <li><a href="#bodega">Bodega</a></li>
        </ul>
        <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
      </nav>
      <div className="banner-container">
        <img src="../img/Banner.jpeg" alt="Banner" className="banner"/>
      </div>
    </div>
  );
}

export default IndexBodega;