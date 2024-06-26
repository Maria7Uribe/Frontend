import React, { useState, useEffect } from 'react';
import './Bodegas.css';

function Bodegas() {
  const [bodegas, setBodegas] = useState([]);
  const [locales, setLocales] = useState([]);
  const [marcasProducto, setMarcasProducto] = useState([]);
  const [showDamasDropdown, setShowDamasDropdown] = useState(false);
  const [showCaballeroDropdown, setShowCaballeroDropdown] = useState(false);

  useEffect(() => {
    fetch('http://localhost:3030/bodega')
      .then(response => response.json())
      .then(data => {
        setBodegas(data);
      })
      .catch(error => console.error('Error al obtener datos de la API:', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3030/local')
      .then(response => response.json())
      .then(data => {
        setLocales(data);
      })
      .catch(error => console.error('Error al obtener datos de la API:', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3030/marcaproducto')
      .then(response => response.json())
      .then(data => {
        setMarcasProducto(data);
      })
      .catch(error => console.error('Error al obtener datos de la API:', error));
  }, []);

  const handleLogout = () => {
    console.log("Cerrando sesión...");
    localStorage.removeItem('userToken');
    window.location.href = '/';
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
          <li><a href="IndexBodega">Menu</a></li>

        </ul>
        <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
      </nav>

      <div className="bodega-card-container">
        <h3>Lista de Bodegas</h3>
        {bodegas.map(bodega => (
          <div key={bodega.Id_bodega} className="bodega-card">
            <p><strong>Número de Bodega:</strong> {bodega.Id_bodega}</p>
            <p><strong>Marca Producto:</strong> {bodega.PK_fk_Id_marca_producto}</p>
            <p><strong>Ubicación Bodega:</strong> {bodega.Ubicacion_bodega}</p>
          </div>
        ))}
      </div>

      <div className="locales-card-container">
        <h3>Lista de Locales</h3>
        {locales.map(local => (
          <div key={local.Num_local} className="locales-card">
            <p><strong>Número de Local:</strong> {local.Num_local}</p>
            <p><strong>Centro Comercial:</strong> {local.Centro_comercial}</p>
          </div>
        ))}
      </div>

      <div className="marcas-producto-card-container">
        <h3>Lista de Marcas de Productos</h3>
        {Array.isArray(marcasProducto) && marcasProducto.map(marca => (
          <div key={marca.Id_marca_producto} className="marcas-producto-card">
            <p><strong>Numero de Marca Producto:</strong> {marca.Id_marca_producto}</p>
            <p><strong>Nombre Marca Producto:</strong> {marca.Nom_marca_producto}</p>
            <p><strong>Estado Marca Producto:</strong> {marca.Estado_marca_producto ? 'Activo' : 'Inactivo'}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Bodegas;
