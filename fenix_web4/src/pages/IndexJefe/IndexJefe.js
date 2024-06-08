import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'; // Importa Link y useLocation desde react-router-dom
import './IndexJefe.css'; // Importa el archivo CSS externo

// Componente principal
function IndexJefe() {
  const location = useLocation(); // Obtiene la ubicación actual de la página
  
  // Función para determinar si la ruta actual es la página de zapatillas
  const isZapatillasPage = location.pathname === '/zapatillas';

  // Función para determinar la ruta a mostrar cuando el usuario hace clic en el enlace de inicio
  const getHomeLink = () => {
    if (isZapatillasPage) {
      return '/bodega'; // Si está en la página de zapatillas, redirige a la página de bodega
    }
    return '/'; // De lo contrario, redirige a la página de inicio
  };

  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* MATERIAL ICONS */}
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet" />
      <div className="container">
        <aside>
          <div className="top">
            <div className="logo">
              <h2 className="text-muted">Sport <span className="danger">Line</span></h2>
              <div className="close" id="close-btn">
                <span className="material-icons-sharp">close</span>
              </div>
            </div>
          </div>
          <div className="sidebar">
            {/* Botón de Usuarios */}
            <a href="/Usuarios">
              <span className="material-icons-sharp">person_outline</span>  
              <h3>Usuarios</h3>
            </a>
            {/* Enlace a la página de Productos */}
            <Link to="/Marcasjefe">
              <span className="material-icons-sharp">inventory</span>  
              <h3>Marcas jefe</h3>
            </Link>
            {/* Enlace a la página de inicio */}
            <Link to={getHomeLink()}>
              <span className="material-icons-sharp">logout</span>
              <h3>Cerrar sesión</h3>
            </Link>
          </div>
        </aside>
        <div className="welcome-admin">
          <h3>Bienvenido, Administrador</h3>
        </div>
      </div>
    </div>
  );
}

export default IndexJefe;
