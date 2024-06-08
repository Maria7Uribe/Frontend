import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import './Editar.css';

function Editar() {
    const [usuarios, setUsuarios] = useState([]);
    const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);

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

    const handleEditarUsuario = (usuarioId) => {
        const usuario = usuarios.find(usuario => usuario.Id_usuario === usuarioId);
        setUsuarioSeleccionado(usuario);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuarioSeleccionado({
            ...usuarioSeleccionado,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(`http://localhost:3030/usuario/${usuarioSeleccionado.Id_usuario}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(usuarioSeleccionado)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al actualizar el usuario');
            }
            setUsuarios(prevUsuarios => prevUsuarios.map(usuario => usuario.Id_usuario === usuarioSeleccionado.Id_usuario ? usuarioSeleccionado : usuario));
            alert('Usuario actualizado exitosamente');
            setUsuarioSeleccionado(null);
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al actualizar el usuario');
        });
    };

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
                            <span className="material-icons-sharp">receipt_long</span>  
                            <h3>Agregar nuevo usuario</h3>
                        </a>
                        <a href="#">
                             <span className="material-icons-sharp">insights</span>  
                             <h3>Editar infomacion del Usuario</h3>
                         </a>
                        {/* Otros enlaces de la barra lateral */}
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
                                <th>Acciones</th>
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
                                    <td>
                                        <button onClick={() => handleEditarUsuario(usuario.Id_usuario)}>Editar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Formulario de edición */}
                {usuarioSeleccionado && (
                   <div className="editar-form">
                   <h2>Editar Usuario</h2>
                   <form onSubmit={handleSubmit}>
                            <label htmlFor="PK_fk_Id_tdoc">Tipo de Documento:</label>
                            <input type="text" name="PK_fk_Id_tdoc" value={usuarioSeleccionado.PK_fk_Id_tdoc} onChange={handleChange} /><br />

                            <label htmlFor="Numero_documento">Número de Documento:</label>
                            <input type="text" name="Numero_documento" value={usuarioSeleccionado.Numero_documento} onChange={handleChange} /><br />

                            <label htmlFor="Primer_nombre">Primer Nombre:</label>
                            <input type="text" name="Primer_nombre" value={usuarioSeleccionado.Primer_nombre} onChange={handleChange} /><br />

                            <label htmlFor="Segundo_nombre">Segundo Nombre:</label>
                            <input type="text" name="Segundo_nombre" value={usuarioSeleccionado.Segundo_nombre} onChange={handleChange} /><br />

                            <label htmlFor="Primer_apellido">Primer Apellido:</label>
                            <input type="text" name="Primer_apellido" value={usuarioSeleccionado.Primer_apellido} onChange={handleChange} /><br />

                            <label htmlFor="Segundo_apellido">Segundo Apellido:</label>
                            <input type="text" name="Segundo_apellido" value={usuarioSeleccionado.Segundo_apellido} onChange={handleChange} /><br />

                            <label htmlFor="Telefono_contacto">Teléfono de Contacto:</label>
                            <input type="text" name="Telefono_contacto" value={usuarioSeleccionado.Telefono_contacto} onChange={handleChange} /><br />

                            <label htmlFor="Email">Email:</label>
                            <input type="email" name="Email" value={usuarioSeleccionado.Email} onChange={handleChange} /><br />

                            <label htmlFor="Pk_fk_Id_Cod_rol">Rol:</label>
                            <input type="text" name="Pk_fk_Id_Cod_rol" value={usuarioSeleccionado.Pk_fk_Id_Cod_rol} onChange={handleChange} /><br />

                            <label htmlFor="Clave">Clave:</label>
                            <input type="password" name="Clave" value={usuarioSeleccionado.Clave} onChange={handleChange} /><br />

                            <label htmlFor="Estado_usuario">Estado de Usuario:</label>
                            <input type="text" name="Estado_usuario" value={usuarioSeleccionado.Estado_usuario} onChange={handleChange} /><br />

                            <button type="submit">Guardar Cambios</button>
                        </form>
                    </div>
                )}
            </main>
        </div>
        </div>
    );
}

export default Editar;
