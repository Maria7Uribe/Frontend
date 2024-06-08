import React, { useState } from 'react';
import './Marcasjefe.css'; // Importa el archivo CSS externo


// Componente principal
function Marcasjefe() {
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
              <div className="welcome-admin">
                <h3>Bienvenido Administrador</h3>
              </div>
            </div>
            <div className="sidebar">
              <a href="/IndexJefe">
                <span className="material-icons-sharp">grid_view</span>  
                <h3>Menu</h3>
              </a>
              {/* Botón de Usuarios */}
              <a href="/Usuarios">
                <span className="material-icons-sharp">person_outline</span>  
                <h3>Usuarios</h3>
              </a>
              {/* Enlace a la página de Productos */}
              <a href="/productos">
                <span className="material-icons-sharp">inventory</span>  
                <h3>Productos</h3>
              </a>
              <a href="/">
                <span className="material-icons-sharp">logout</span>
                <h3>Cerrar sesión</h3>
              </a>
            </div>
          </aside>
          <div className="main-content">
            <div className="images-sidebar-container">
              <h1 className="zapatillas-title">Zapatillas Damas</h1>
              {/* Área vacía fuera de la barra lateral */}
              <div className="empty-area">
                {/* Cuatro imágenes */}
                <div className="horizontal-images">
                  <div className="image-container">
                    <img className="product-image small" src="../img/adidasmujer.jpg" alt="Imagen 1" />
                    <a href="/adidasdamas"><button className="ver-button">Ver Zapatillas</button></a>
                  </div>
                  <div className="image-container">
                    <img className="product-image small" src="../img/nikemujer.png" alt="Imagen 2" />
                    <a href="/nikedamas"><button className="ver-button">Ver Zapatillas</button></a>
                  </div>
                  <div className="image-container">
                    <img className="product-image small" src="../img/filamujer.jpg" alt="Imagen 3" />
                    <a href="/filadamas"><button className="ver-button">Ver Zapatillas</button></a>
                  </div>
                  <div className="image-container">
                    <img className="product-image small" src="../img/pumadama.webp" alt="Imagen 4" />
                    <a href="/pumadamas"><button className="ver-button">Ver Zapatillas</button></a>
                  </div>
                  <div className="image-container">
                    <img className="product-image small" src="../img/jordan.png" alt="Imagen 3" />
                    <a href="/jordandamas"><button className="ver-button">Ver Zapatillas</button></a>
                  </div>

                </div>
              </div>
              <h1 className="zapatillas-title">Zapatillas Caballeros</h1>
              {/* Área vacía fuera de la barra lateral */}
              <div className="empty-area">
                {/* Cuatro imágenes */}
                <div className="horizontal-images">
                  <div className="image-container">
                    <img className="product-image small" src="../img/adidashombre.jpg" alt="Imagen 1" />
                    <a href="/adidascaballeros"><button className="ver-button">Ver Zapatillas</button></a>
                  </div>
                  <div className="image-container">
                    <img className="product-image small" src="../img/nikehombre.png" alt="Imagen 2" />
                    <a href="/nikecaballeros"><button className="ver-button">Ver Zapatillas</button></a>
                  </div>
                  <div className="image-container">
                    <img className="product-image small" src="../img/filahombre.png" alt="Imagen 3" />
                    <a href="/filacaballeros"><button className="ver-button">Ver Zapatillas</button></a>
                  </div>
                  <div className="image-container">
                    <img className="product-image small" src="../img/pumahombre.jpg" alt="Imagen 4" />
                    <a href="/pumacaballeros"><button className="ver-button">Ver Zapatillas</button></a>
                  </div>
                  <div className="image-container">
                    <img className="product-image small" src="../img/jordan.png" alt="Imagen 4" />
                    <a href="/jordancaballeros"><button className="ver-button">Ver Zapatillas</button></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
export default Marcasjefe;
