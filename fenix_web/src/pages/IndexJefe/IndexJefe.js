import React, { useState } from 'react';
import './IndexJefe.css'; // Importa el archivo CSS externo

// Componente principal
function IndexJefe() {
  // Estado para controlar la visibilidad del menú desplegable de productos
  const [showProductos, setShowProductos] = useState(false);

  // Función para alternar la visibilidad del menú desplegable de productos
  const toggleProductos = () => {
    setShowProductos(!showProductos);
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
            <a href="/productosjefe">
              <span className="material-icons-sharp">inventory</span>  
              <h3>Productos</h3>
            </a>
            <a href="/">
              <span className="material-icons-sharp">logout</span>
              <h3>Cerrar sesión</h3>
            </a>
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
