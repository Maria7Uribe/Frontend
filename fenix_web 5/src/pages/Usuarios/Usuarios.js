import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './Usuarios.css';

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/usuario')
            .then(response => response.json())
            .then(data => {
                setUsuarios(data);
            })
            .catch(error => {
                console.error('Error al obtener datos del API:', error);
            });
    }, []);

    return (
        <div>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Index_jefe</title>
          {/* MATERIAL ICONS */}
          <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet" />
          {/* ESTILOS CSS */}
          <div className="container">
            <aside>
              <div className="top">
                <div className="logo">
                  <img src="../img/logo.png" alt="" />
                  <h2 className="text-muted">Sport <span className="danger">Line</span></h2>
                  <div className="close" id="close-btn">
                    <span className="material-icons-sharp">close</span>
                  </div>
                </div>
              </div>
              <div className="sidebar">
                <a href="/IndexJefe">
                  <span className="material-icons-sharp">grid_view</span>  
                  <h3>Menu</h3>
                </a>
                <a href="/Usuarios" className="active">
                  <span className="material-icons-sharp">person_outline</span>  
                  <h3>Usuarios</h3>
                </a>
                <a href="/Agregar">
                <span className="material-icons-sharp">add</span>  
                  <h3>Agregar nuevo usuario</h3>
                </a>
                <a href="Editar">
                  <span className="material-icons-sharp">insights</span>  
                  <h3>Editar informacion del usuario</h3>
                </a>
               
                <Link to="/"><span className="material-icons-sharp">logout</span><h3>Cerrar sesión</h3></Link>
              </div>
            </aside>
            {/* Fin de la barra lateral */}
            <main>
              <h1>Usuarios</h1>
              <div className="table-container">
                <table>
                  <thead>
                    <tr>
                      <th>Id Usuario</th>
                      <th>PK_fk_Id_tdoc</th>
                      <th>Número de Documento</th>
                      <th>Primer Nombre</th>
                      <th>Segundo Nombre</th>
                      <th>Primer Apellido</th>
                      <th>Segundo Apellido</th>
                      <th>Teléfono de Contacto</th>
                      <th>Email</th>
                      <th>Pk_fk_Id_Cod_rol</th>
                      <th>Clave</th>
                      <th>Estado de Usuario</th>
                      
                    </tr>
                  </thead>
                  <tbody>
                    {usuarios.map(usuario => (
                      <tr key={usuario.Id_usuario}>
                        <td>{usuario.Id_usuario}</td>
                        <td>{usuario.PK_fk_Id_tdoc}</td>
                        <td>{usuario.Numero_documento}</td>
                        <td>{usuario.Primer_nombre}</td>
                        <td>{usuario.Segundo_nombre}</td>
                        <td>{usuario.Primer_apellido}</td>
                        <td>{usuario.Segundo_apellido}</td>
                        <td>{usuario.Telefono_contacto}</td>
                        <td>{usuario.Email}</td>
                        <td>{usuario.Pk_fk_Id_Cod_rol}</td>
                        <td>{usuario.Clave}</td>
                        <td>{usuario.Estado_usuario}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </main>
          </div>
        </div>
    );
}

export default Usuarios;
