import React, { useState, useEffect } from 'react';
import './Usuarios.css';

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3030/usuario')
            .then(response => response.json())
            .then(data => {
                const updatedUsers = data.map(user => ({
                    ...user,
                    showPassword: false  // Agregar un nuevo campo para controlar la visibilidad de la contraseña
                }));
                setUsuarios(updatedUsers);
            })
            .catch(error => {
                console.error('Error al obtener datos del API:', error);
            });
    }, []);

    const handleLogout = () => {
        localStorage.removeItem('userToken');
        window.location.href = '/';
    };

    // Función para alternar la visibilidad de la contraseña
    const togglePasswordVisibility = id => {
        const updatedUsers = usuarios.map(user => {
            if (user.Id_usuario === id) {
                return { ...user, showPassword: !user.showPassword };
            }
            return user;
        });
        setUsuarios(updatedUsers);
    };

    return (
        <div>
            <nav className="navbar">
                <div className="brand-logo">
                    Sport<span className="brand-highlight">Line</span>
                </div>
                <ul>
                    <li><a href="/Agregar">Agregar nuevo usuario</a></li>
                    <li><a href="/Editar">Editar información del usuario</a></li>
                    <li><a href="/Indexjefe">Menú</a></li>
                </ul>
                <button onClick={handleLogout} className="logout-button">Cerrar Sesión</button>
            </nav>
            <div className="container">
                <main>
                    <h1>Usuarios</h1>
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Id Usuario</th>
                                    <th>Tipo Documento</th>
                                    <th>Número de Documento</th>
                                    <th>Primer Nombre</th>
                                    <th>Segundo Nombre</th>
                                    <th>Primer Apellido</th>
                                    <th>Segundo Apellido</th>
                                    <th>Teléfono de Contacto</th>
                                    <th>Email</th>
                                    <th>Cod rol</th>
                                    <th>Clave</th>
                                    <th>Estado de Usuario</th>
                                    <th>Acción</th>
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
                                        <td>
                                            {usuario.showPassword ? usuario.Clave : '••••••••'}
                                        </td>
                                        <td>{usuario.Estado_usuario}</td>
                                        <td>
                                            <button onClick={() => togglePasswordVisibility(usuario.Id_usuario)}>
                                                {usuario.showPassword ? 'Ocultar' : 'Mostrar'}
                                            </button>
                                        </td>
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
