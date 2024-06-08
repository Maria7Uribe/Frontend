import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Agregar.css';

function Agregar() {
    const [nuevoUsuario, setNuevoUsuario] = useState({
        PK_fk_Id_tdoc: '',
        Numero_documento: '',
        Primer_nombre: '',
        Segundo_nombre: '',
        Primer_apellido: '',
        Segundo_apellido: '',
        Telefono_contacto: '',
        Email: '',
        Pk_fk_Id_Cod_rol: '',
        Clave: '',
        Estado_usuario: ''
    });
    
    const [isValid, setIsValid] = useState({
        PK_fk_Id_tdoc: false,
        Numero_documento: false,
        Primer_nombre: false,
        Segundo_nombre: false,
        Primer_apellido: false,
        Segundo_apellido: false,
        Telefono_contacto: false,
        Email: false,
        Pk_fk_Id_Cod_rol: false,
        Clave: false,
        Estado_usuario: false
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNuevoUsuario({
            ...nuevoUsuario,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validaciones
        if (nuevoUsuario.PK_fk_Id_tdoc.length !== 2) {
            alert('El tipo de documento debe tener exactamente dos letras.');
            return;
        }
        if (!/^\d+$/.test(nuevoUsuario.Numero_documento) || nuevoUsuario.Numero_documento.length !== 10) {
            alert('El número de documento debe ser un número de 10 dígitos.');
            return;
        }
        if (!/^[a-zA-Z-ñ]+$/.test(nuevoUsuario.Primer_nombre) || !/^[a-zA-Z]+$/.test(nuevoUsuario.Segundo_nombre) || !/^[a-zA-Z]+$/.test(nuevoUsuario.Primer_apellido) || !/^[a-zA-Z]+$/.test(nuevoUsuario.Segundo_apellido)) {
            alert('Los nombres y apellidos solo pueden contener letras.');
            return;
        }
        if (!/^\d{10}$/.test(nuevoUsuario.Telefono_contacto)) {
            alert('El teléfono debe ser un número de 10 dígitos.');
            return;
        }
        if (!/^\d+$/.test(nuevoUsuario.Pk_fk_Id_Cod_rol)) {
            alert('El rol debe ser un número.');
            return;
        }
        if (!/^[01]$/.test(nuevoUsuario.Estado_usuario)) {
            alert('El estado de usuario debe ser 0 o 1.');
            return;
        }
        if (!/^[\w-.-]+@gmail\.com$/.test(nuevoUsuario.Email)) {
            alert('El correo electrónico debe ser una dirección de Gmail válida.');
            return;
        }
        if (nuevoUsuario.Clave.length > 8) {
            alert('La contraseña no puede tener más de 8 caracteres.');
            return;
        }



        fetch('http://localhost:3030/usuario', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(nuevoUsuario)
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Error al crear un nuevo usuario');
            }
            setNuevoUsuario({
                PK_fk_Id_tdoc: '',
                Numero_documento: '',
                Primer_nombre: '',
                Segundo_nombre: '',
                Primer_apellido: '',
                Segundo_apellido: '',
                Telefono_contacto: '',
                Email: '',
                Pk_fk_Id_Cod_rol: '',
                Clave: '',
                Estado_usuario: ''
            });
            alert('Usuario creado exitosamente');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al crear un nuevo usuario');
        });
    };

    const handleValidation = (e) => {
        const { name, value } = e.target;
        // Validar el campo según su nombre
        switch (name) {
            case 'PK_fk_Id_tdoc':
                // Validar el tipo de documento
                setIsValid({ ...isValid, PK_fk_Id_tdoc: value.length === 2 });
                break;
            case 'Numero_documento':
                // Validar el número de documento
                setIsValid({ ...isValid, Numero_documento: /^\d{10}$/.test(value) });
                break;
            case 'Primer_nombre':
                // Validar el primer nombre
                setIsValid({ ...isValid, Primer_nombre: /^[a-zA-Z-ñ]+$/.test(value) });
                break;
            // Agregar más validaciones para los otros campos aquí
            default:
                break;
        }
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
                        <a href="/Editar">
                             <span className="material-icons-sharp">insights</span>  
                             <h3>Editar infomacion del Usuario</h3>
                         </a>
                        {/* Otros enlaces de la barra lateral */}
                        <Link to="/"><span className="material-icons-sharp">logout</span><h3>Cerrar sesión</h3></Link>
                    </div>
                </aside>
                {/* Fin de la barra lateral */}
                <main>
    <form onSubmit={handleSubmit} className="form-container">
        <div className="form-column">
            <label htmlFor="tipoDocumento">Tipo de Documento:</label>
            <input type="text" name="tipoDocumento" value={nuevoUsuario.tipoDocumento} onChange={handleChange} />

            <label htmlFor="primerNombre">Primer Nombre:</label>
            <input type="text" name="primerNombre" value={nuevoUsuario.primerNombre} onChange={handleChange} />

            <label htmlFor="primerApellido">Primer Apellido:</label>
            <input type="text" name="primerApellido" value={nuevoUsuario.primerApellido} onChange={handleChange} />

            <label htmlFor="telefonoContacto">Teléfono de Contacto:</label>
            <input type="text" name="telefonoContacto" value={nuevoUsuario.telefonoContacto} onChange={handleChange} />

            <label htmlFor="estadoUsuario">Estado de Usuario:</label>
            <input type="text" name="estadoUsuario" value={nuevoUsuario.estadoUsuario} onChange={handleChange} />

            <label htmlFor="numeroDocumento">Número de Documento:</label>
            <input type="text" name="numeroDocumento" value={nuevoUsuario.numeroDocumento} onChange={handleChange} />

            <label htmlFor="segundoNombre">Segundo Nombre:</label>
            <input type="text" name="segundoNombre" value={nuevoUsuario.segundoNombre} onChange={handleChange} />

            <label htmlFor="segundoApellido">Segundo Apellido:</label>
            <input type="text" name="segundoApellido" value={nuevoUsuario.segundoApellido} onChange={handleChange} />

            <label htmlFor="email">Email:</label>
            <input type="email" name="email" value={nuevoUsuario.email} onChange={handleChange} />

            <label htmlFor="clave">Clave:</label>
            <input type="password" name="clave" value={nuevoUsuario.clave} onChange={handleChange} />
        </div>

        <button type="submit">Crear Usuario</button>
    </form>
</main>

            </div>
        </div>
    );
}

export default Agregar;
