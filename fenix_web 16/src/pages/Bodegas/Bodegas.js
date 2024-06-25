import React, { useState, useEffect } from 'react';
import './Bodegas.css';

function Bodegas() {
  const [bodegas, setBodegas] = useState([]);
  const [locales, setLocales] = useState([]);
  const [marcasProducto, setMarcasProducto] = useState([]);
  const [showDamasDropdown, setShowDamasDropdown] = useState(false);
  const [showCaballeroDropdown, setShowCaballeroDropdown] = useState(false);
  const [editingBodega, setEditingBodega] = useState(null);
  const [editingLocal, setEditingLocal] = useState(null);
  const [editingMarcaProducto, setEditingMarcaProducto] = useState(null);
  const [currentSection, setCurrentSection] = useState('bodegas');
  const [newBodega, setNewBodega] = useState({ PK_fk_Id_marca_producto: '', Ubicacion_bodega: '', PK_fk_Id_usuariobodeguero: '' });
  const [newLocal, setNewLocal] = useState({ Num_local: '', Centro_comercial: '', PK_fk_Id_usuariovendedor: '' });
  const [newMarcaProducto, setNewMarcaProducto] = useState({ Nom_marca_producto: '', Estado_marca_producto: false });

  useEffect(() => {
    fetch('http://localhost:3030/bodega')
      .then(response => response.json())
      .then(data => setBodegas(data))
      .catch(error => console.error('Error al obtener datos de la API:', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3030/local')
      .then(response => response.json())
      .then(data => setLocales(data))
      .catch(error => console.error('Error al obtener datos de la API:', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:3030/marcaproducto')
      .then(response => response.json())
      .then(data => setMarcasProducto(data))
      .catch(error => console.error('Error al obtener datos de la API:', error));
  }, []);

  const handleLogout = () => {
    console.log("Cerrando sesión...");
    localStorage.removeItem('userToken');
    window.location.href = '/';
  };

  const handleEditChange = (e, setEditingItem) => {
    const { name, value, type, checked } = e.target;
    setEditingItem(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleEditSubmitBodega = (item) => {
    fetch(`http://localhost:3030/bodega/${item.Id_bodega}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(data => {
        setBodegas(prevItems => prevItems.map(i => (i.Id_bodega === item.Id_bodega ? data : i)));
        setEditingBodega(null);
      })
      .catch(error => console.error('Error al actualizar la bodega:', error));
  };

  const handleEditSubmitLocal = (item) => {
    fetch(`http://localhost:3030/local/${item.Num_local}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(data => {
        setLocales(prevItems => prevItems.map(i => (i.Num_local === item.Num_local ? data : i)));
        setEditingLocal(null);
      })
      .catch(error => console.error('Error al actualizar el local:', error));
  };

  const handleEditSubmitMarcaProducto = (item) => {
    fetch(`http://localhost:3030/marcaproducto/${item.Id_marca_producto}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(item)
    })
      .then(response => response.json())
      .then(data => {
        setMarcasProducto(prevItems => prevItems.map(i => (i.Id_marca_producto === item.Id_marca_producto ? data : i)));
        setEditingMarcaProducto(null);
      })
      .catch(error => console.error('Error al actualizar la marca de producto:', error));
  };

  const handleAddBodega = () => {
    fetch('http://localhost:3030/bodega', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newBodega)
    })
      .then(response => response.json())
      .then(data => {
        setBodegas([...bodegas, data]);
        setNewBodega({ PK_fk_Id_marca_producto: '', Ubicacion_bodega: '', PK_fk_Id_usuariobodeguero: '' });
      })
      .catch(error => console.error('Error al agregar la bodega:', error));
  };

  const handleAddLocal = () => {
    fetch('http://localhost:3030/local', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newLocal)
    })
      .then(response => response.json())
      .then(data => {
        setLocales([...locales, data]);
        setNewLocal({ Num_local: '', Centro_comercial: '', PK_fk_Id_usuariovendedor: '' });
      })
      .catch(error => console.error('Error al agregar el local:', error));
  };

  const handleAddMarcaProducto = () => {
    fetch('http://localhost:3030/marcaproducto', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMarcaProducto)
    })
      .then(response => response.json())
      .then(data => {
        setMarcasProducto([...marcasProducto, data]);
        setNewMarcaProducto({ Nom_marca_producto: '', Estado_marca_producto: false });
      })
      .catch(error => console.error('Error al agregar la marca de producto:', error));
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

      <div className="sub-navbar">
        <button onClick={() => setCurrentSection('bodegas')}>Lista de Bodegas</button>
        <button onClick={() => setCurrentSection('locales')}>Lista de Locales</button>
        <button onClick={() => setCurrentSection('marcasProducto')}>Lista de Marcas de Productos</button>
        <button onClick={() => setCurrentSection('entradasSalidas')}>Entradas y Salidas</button>
      </div>

      <div className="section-container">
        {currentSection === 'bodegas' && (
          <div className="card-container">
            <h3>Lista de Bodegas</h3>
            {bodegas.map(bodega => (
              <div key={bodega.Id_bodega} className="card">
                {editingBodega && editingBodega.Id_bodega === bodega.Id_bodega ? (
                  <div>
                    <p><strong>Número de Bodega:</strong> <input type="text" name="Id_bodega" value={editingBodega.Id_bodega} onChange={(e) => handleEditChange(e, setEditingBodega)} /></p>
                    <p><strong>Marca Producto:</strong> <input type="text" name="PK_fk_Id_marca_producto" value={editingBodega.PK_fk_Id_marca_producto} onChange={(e) => handleEditChange(e, setEditingBodega)} /></p>
                    <p><strong>Ubicación Bodega:</strong> <input type="text" name="Ubicacion_bodega" value={editingBodega.Ubicacion_bodega} onChange={(e) => handleEditChange(e, setEditingBodega)} /></p>
                    <button onClick={() => handleEditSubmitBodega(editingBodega)} className="save-button">Guardar</button>
                    <button onClick={() => setEditingBodega(null)} className="cancel-button">Cancelar</button>
                  </div>
                ) : (
                  <div>
                    <p><strong>Número de Bodega:</strong> {bodega.Id_bodega}</p>
                    <p><strong>Marca Producto:</strong> {bodega.PK_fk_Id_marca_producto}</p>
                    <p><strong>Ubicación Bodega:</strong> {bodega.Ubicacion_bodega}</p>
                    <button onClick={() => setEditingBodega(bodega)} className="edit-button">Editar</button>
                  </div>
                )}
              </div>
            ))}
            <div className="card">
              <h4>Agregar Nueva Bodega</h4>
              <p><strong>Marca Producto:</strong> <input type="text" name="PK_fk_Id_marca_producto" value={newBodega.PK_fk_Id_marca_producto} onChange={(e) => handleEditChange(e, setNewBodega)} /></p>
              <p><strong>Ubicación Bodega:</strong> <input type="text" name="Ubicacion_bodega" value={newBodega.Ubicacion_bodega} onChange={(e) => handleEditChange(e, setNewBodega)} /></p>
              <p><strong>Usuario Bodeguero:</strong> <input type="text" name="PK_fk_Id_usuariobodeguero" value={newBodega.PK_fk_Id_usuariobodeguero} onChange={(e) => handleEditChange(e, setNewBodega)} /></p>
              <button onClick={handleAddBodega} className="add-button">Agregar</button>
            </div>
          </div>
        )}

        {currentSection === 'locales' && (
          <div className="card-container">
            <h3>Lista de Locales</h3>
            {locales.map(local => (
              <div key={local.Num_local} className="card">
                {editingLocal && editingLocal.Num_local === local.Num_local ? (
                  <div>
                    <p><strong>Número de Local:</strong> <input type="text" name="Num_local" value={editingLocal.Num_local} onChange={(e) => handleEditChange(e, setEditingLocal)} /></p>
                    <p><strong>Centro Comercial:</strong> <input type="text" name="Centro_comercial" value={editingLocal.Centro_comercial} onChange={(e) => handleEditChange(e, setEditingLocal)} /></p>
                    <button onClick={() => handleEditSubmitLocal(editingLocal)} className="save-button">Guardar</button>
                    <button onClick={() => setEditingLocal(null)} className="cancel-button">Cancelar</button>
                  </div>
                ) : (
                  <div>
                    <p><strong>Número de Local:</strong> {local.Num_local}</p>
                    <p><strong>Centro Comercial:</strong> {local.Centro_comercial}</p>
                    <button onClick={() => setEditingLocal(local)} className="edit-button">Editar</button>
                  </div>
                )}
              </div>
            ))}
            <div className="card">
              <h4>Agregar Nuevo Local</h4>
              <p><strong>Número de Local:</strong> <input type="text" name="Num_local" value={newLocal.Num_local} onChange={(e) => handleEditChange(e, setNewLocal)} /></p>
              <p><strong>Centro Comercial:</strong> <input type="text" name="Centro_comercial" value={newLocal.Centro_comercial} onChange={(e) => handleEditChange(e, setNewLocal)} /></p>
              <p><strong>Usuario Vendedor:</strong> <input type="text" name="PK_fk_Id_usuariovendedor" value={newLocal.PK_fk_Id_usuariovendedor} onChange={(e) => handleEditChange(e, setNewLocal)} /></p>
              <button onClick={handleAddLocal} className="add-button">Agregar</button>
            </div>
          </div>
        )}

        {currentSection === 'marcasProducto' && (
          <div className="card-container">
            <h3>Lista de Marcas de Productos</h3>
            {Array.isArray(marcasProducto) && marcasProducto.map(marca => (
              <div key={marca.Id_marca_producto} className="card">
                {editingMarcaProducto && editingMarcaProducto.Id_marca_producto === marca.Id_marca_producto ? (
                  <div>
                    <p><strong>Numero de Marca Producto:</strong> <input type="text" name="Id_marca_producto" value={editingMarcaProducto.Id_marca_producto} onChange={(e) => handleEditChange(e, setEditingMarcaProducto)} /></p>
                    <p><strong>Nombre Marca Producto:</strong> <input type="text" name="Nom_marca_producto" value={editingMarcaProducto.Nom_marca_producto} onChange={(e) => handleEditChange(e, setEditingMarcaProducto)} /></p>
                    <p><strong>Estado Marca Producto:</strong> <input type="checkbox" name="Estado_marca_producto" checked={editingMarcaProducto.Estado_marca_producto} onChange={(e) => handleEditChange(e, setEditingMarcaProducto)} /></p>
                    <button onClick={() => handleEditSubmitMarcaProducto(editingMarcaProducto)} className="save-button">Guardar</button>
                    <button onClick={() => setEditingMarcaProducto(null)} className="cancel-button">Cancelar</button>
                  </div>
                ) : (
                  <div>
                    <p><strong>Numero de Marca Producto:</strong> {marca.Id_marca_producto}</p>
                    <p><strong>Nombre Marca Producto:</strong> {marca.Nom_marca_producto}</p>
                    <p><strong>Estado Marca Producto:</strong> {marca.Estado_marca_producto ? 'Activo' : 'Inactivo'}</p>
                    <button onClick={() => setEditingMarcaProducto(marca)} className="edit-button">Editar</button>
                  </div>
                )}
              </div>
            ))}
            <div className="card">
              <h4>Agregar Nueva Marca de Producto</h4>
              <p><strong>Nombre Marca Producto:</strong> <input type="text" name="Nom_marca_producto" value={newMarcaProducto.Nom_marca_producto} onChange={(e) => handleEditChange(e, setNewMarcaProducto)} /></p>
              <p><strong>Estado Marca Producto:</strong> <input type="checkbox" name="Estado_marca_producto" checked={newMarcaProducto.Estado_marca_producto} onChange={(e) => handleEditChange(e, setNewMarcaProducto)} /></p>
              <button onClick={handleAddMarcaProducto} className="add-button">Agregar</button>
            </div>
          </div>
        )}

        {currentSection === 'entradasSalidas' && (
          <div className="card-container">
            <h3>Entradas y Salidas</h3>
            {/* Aquí puedes añadir el contenido específico para la sección de Entradas y Salidas */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Bodegas;
