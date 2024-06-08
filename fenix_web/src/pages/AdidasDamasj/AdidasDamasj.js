import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './AdidasDamasj.css';

function AdidasDamasj() {
    const [productos, setProductos] = useState([]);
    const [nuevoProducto, setNuevoProducto] = useState({
        PK_fk_Id_marca_producto: 3,
        Modelo_producto: "",
        Tipo_producto: "",
        Color_producto: "",
        Precio_producto: "",
        Talla_disponible_producto: "",
        Cantidad_disponible_producto: ""
    });
    const [productoEditado, setProductoEditado] = useState(null);
    const [errores, setErrores] = useState({});
    const [mostrarFormularioAgregar, setMostrarFormularioAgregar] = useState(false);
    const [mostrarFormularioEditar, setMostrarFormularioEditar] = useState(false);

    useEffect(() => {
        fetchProductos();
    }, []);

    const fetchProductos = async () => {
        try {
            const response = await fetch('http://localhost:3030/producto');
            if (!response.ok) {
                throw new Error('Error al obtener los productos');
            }
            const data = await response.json();
            setProductos(data.productos);
        } catch (error) {
            console.error(error);
        }
    };

    const handleChangeAgregar = (event) => {
        const { name, value } = event.target;
        setNuevoProducto({
            ...nuevoProducto,
            [name]: value
        });
    };

    const handleChangeEditar = (event) => {
        const { name, value } = event.target;
        setProductoEditado({
            ...productoEditado,
            [name]: value
        });
    };

    const handleSubmitAgregar = async (event) => {
        event.preventDefault();
        if (validateForm(nuevoProducto)) {
            try {
                const response = await fetch('http://localhost:3030/producto', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(nuevoProducto)
                });
                if (!response.ok) {
                    throw new Error('Error al agregar el producto');
                }
                
                // Limpiar el formulario después de agregar el producto
                setNuevoProducto({
                    PK_fk_Id_marca_producto: 3,
                    Modelo_producto: "",
                    Tipo_producto: "",
                    Color_producto: "",
                    Precio_producto: "",
                    Talla_disponible_producto: "",
                    Cantidad_disponible_producto: ""
                });
                // Actualizar la lista de productos después de agregar el nuevo producto
                fetchProductos();
                // Ocultar el formulario después de agregar el producto
                setMostrarFormularioAgregar(false);
            } catch (error) {
                console.error(error);
            }
        }
    };

    const handleSubmitEditar = async (event) => {
        event.preventDefault();
        if (validateForm(productoEditado)) {
            try {
                const response = await fetch(`http://localhost:3030/producto/${productoEditado.Id_producto}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(productoEditado)
                });
                if (!response.ok) {
                    throw new Error('Error al editar el producto');
                }
                // Limpiar el formulario después de editar el producto
                setProductoEditado(null);
                // Actualizar la lista de productos después de editar el producto
                fetchProductos();
                // Ocultar el formulario después de editar el producto
                setMostrarFormularioEditar(false);
            } catch (error) {
                console.error(error);
            }
        }
    };

    const handleEdit = (producto) => {
        setProductoEditado(producto);
        setMostrarFormularioEditar(true);
    };
    
    const handleDelete = async (idProducto) => {
        try {
            const response = await fetch(`http://localhost:3030/producto/${idProducto}`, {
                method: 'DELETE'
            });
            if (!response.ok) {
                throw new Error('Error al eliminar el producto');
            }
            // Actualizar la lista de productos después de eliminar el producto
            fetchProductos();
        } catch (error) {
            console.error(error);
        }
    };

    const validateForm = (producto) => {
        let errors = {};
        let formIsValid = true;

        if (!producto.Modelo_producto) {
            formIsValid = false;
            errors["Modelo_producto"] = "Por favor ingrese el modelo del producto.";
        }

        if (!producto.Tipo_producto) {
            formIsValid = false;
            errors["Tipo_producto"] = "Por favor ingrese el tipo del producto.";
        }

        if (!producto.Color_producto) {
            formIsValid = false;
            errors["Color_producto"] = "Por favor ingrese el color del producto.";
        }

        if (!producto.Precio_producto) {
            formIsValid = false;
            errors["Precio_producto"] = "Por favor ingrese el precio del producto.";
        }

        if (!producto.Talla_disponible_producto) {
            formIsValid = false;
            errors["Talla_disponible_producto"] = "Por favor ingrese la talla disponible del producto.";
        }

        if (!producto.Cantidad_disponible_producto) {
            formIsValid = false;
            errors["Cantidad_disponible_producto"] = "Por favor ingrese la cantidad disponible del producto.";
        }

        setErrores(errors);
        return formIsValid;
    };

    const toggleFormularioAgregar = () => {
        setMostrarFormularioAgregar(!mostrarFormularioAgregar);
    };

    const calcularTotalCantidadDisponible = () => {
        return productos.reduce((total, producto) => total + parseInt(producto.Cantidad_disponible_producto), 0);
    };

    return (
        <>
            <div>
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link to="/Marcasjefe" className="nav-link active btn btn-dark" aria-current="page">Volver atrás</Link>
                    </li>
                    <li className="nav-item custom-margin"> 
                       
                    </li>
                    <li className="nav-item custom-margin">
                        
                    </li>
                </ul>

                <title>Adidas Damas</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
                <link rel="stylesheet" href="../css/inventario.css" />
                <link rel="stylesheet" href="../php_productos/csss/estilo.css" />
                <div className="contenedor">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                        </li>
                    </ul>
                    <h2>Adidas Damas</h2>
                    <div className="barra__buscador"></div>
                </div>
                <br /><br />

                <button onClick={toggleFormularioAgregar} className="btn btn-primary">{mostrarFormularioAgregar ? 'Ocultar Formulario de Agregar' : 'Agregar Nuevo Producto'}</button>

                {/* Formulario para agregar un nuevo producto */}
                {mostrarFormularioAgregar && (
                    <form onSubmit={handleSubmitAgregar}>
                        <div className="mb-3">
                            <label htmlFor="modelo" className="form-label">Modelo:</label>
                            <input type="text" className="form-control" id="modelo" name="Modelo_producto" value={nuevoProducto.Modelo_producto} onChange={handleChangeAgregar} />
                            <div className="text-danger">{errores["Modelo_producto"]}</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tipo" className="form-label">Tipo:</label>
                            <input type="text" className="form-control" id="tipo" name="Tipo_producto" value={nuevoProducto.Tipo_producto} onChange={handleChangeAgregar} />
                            <div className="text-danger">{errores["Tipo_producto"]}</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="color" className="form-label">Color:</label>
                            <input type="text" className="form-control" id="color" name="Color_producto" value={nuevoProducto.Color_producto} onChange={handleChangeAgregar} />
                            <div className="text-danger">{errores["Color_producto"]}</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="precio" className="form-label">Precio:</label>
                            <input type="text" className="form-control" id="precio" name="Precio_producto" value={nuevoProducto.Precio_producto} onChange={handleChangeAgregar} />
                            <div className="text-danger">{errores["Precio_producto"]}</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="talla" className="form-label">Talla Disponible:</label>
                            <input type="text" className="form-control" id="talla" name="Talla_disponible_producto" value={nuevoProducto.Talla_disponible_producto} onChange={handleChangeAgregar} />
                            <div className="text-danger">{errores["Talla_disponible_producto"]}</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cantidad" className="form-label">Cantidad Disponible:</label>
                            <input type="text" className="form-control" id="cantidad" name="Cantidad_disponible_producto" value={nuevoProducto.Cantidad_disponible_producto} onChange={handleChangeAgregar} />
                            <div className="text-danger">{errores["Cantidad_disponible_producto"]}</div>
                        </div>
                        <button type="submit" className="btn btn-primary">Agregar Producto</button>
                    </form>
                )}

                {/* Formulario de edición */}
                {productoEditado && mostrarFormularioEditar && (
                    <div className="editar-form">
                        <h2>Editar Producto</h2>
                        <form onSubmit={handleSubmitEditar}>
                            <div className="mb-3">
                                <label htmlFor="modelo" className="form-label">Modelo:</label>
                                <input type="text" className="form-control" id="modelo" name="Modelo_producto" value={productoEditado.Modelo_producto} onChange={handleChangeEditar} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tipo" className="form-label">Tipo:</label>
                                <input type="text" className="form-control" id="tipo" name="Tipo_producto" value={productoEditado.Tipo_producto} onChange={handleChangeEditar} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="color" className="form-label">Color:</label>
                                <input type="text" className="form-control" id="color" name="Color_producto" value={productoEditado.Color_producto} onChange={handleChangeEditar} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="precio" className="form-label">Precio:</label>
                                <input type="text" className="form-control" id="precio" name="Precio_producto" value={productoEditado.Precio_producto} onChange={handleChangeEditar} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="talla" className="form-label">Talla Disponible:</label>
                                <input type="text" className="form-control" id="talla" name="Talla_disponible_producto" value={productoEditado.Talla_disponible_producto} onChange={handleChangeEditar} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cantidad" className="form-label">Cantidad Disponible:</label>
                                <input type="text" className="form-control" id="cantidad" name="Cantidad_disponible_producto" value={productoEditado.Cantidad_disponible_producto} onChange={handleChangeEditar} />
                            </div>
                            <button type="submit" className="btn btn-primary">Guardar Cambios</button>
                        </form>
                    </div>
                )}

                {/* Tabla de productos */}
                <div className="col-md-15 contenedor-tarjetas d-flex align-items-center justify-content-center">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Modelo</th>
                                <th>Tipo</th>
                                <th>Color</th>
                                <th>Precio</th>
                                <th>Talla Disponible</th>
                                <th>Cantidad Disponible</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productos.map(producto => (
                                <tr key={producto.Id_producto}>
                                    <td>{producto.Id_producto}</td>
                                    <td>{producto.Modelo_producto}</td>
                                    <td>{producto.Tipo_producto}</td>
                                    <td>{producto.Color_producto}</td>
                                    <td>{producto.Precio_producto}</td>
                                    <td>{producto.Talla_disponible_producto}</td>
                                    <td>{producto.Cantidad_disponible_producto}</td>
                                    <td>
                                        {/* Botón de Editar */}
                                        <button onClick={() => handleEdit(producto)} className="btn btn-primary">Editar</button>
                                        {/* Botón de Eliminar */}
                                       
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan="6" className="text-end"><strong>Total:</strong></td>
                                <td>{calcularTotalCantidadDisponible()}</td>
                                <td></td> {/* Celda vacía para mantener la estructura de la tabla */}
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Contenido de las zapatillas */}
                <div className="col-md-15 contenedor-tarjetas d-flex align-items-center justify-content-center">
                    {/* Columna de las tarjetas */}
                    <br />
                    <div className="col-md-10">
                        <div className="fila">
                            <div className="row">
                                {/*tarjeta 1*/}
                                <br />
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <div className="card">
                                        <div className="card-body">
                                        <img src="/img/adidasdamas1.png" className="card-img-top" alt="..." />
                                        < h5>201</h5>
                                            <p className="card-text" />
                                            <a href="/adidasdamas1" className="btn btn-primary">Ver detalles</a>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                {/*tarjeta 2*/}
                                <br />
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <div className="card">
                                        <div className="card-body">
                                        <img src="/img/adidasdamas2.png" className="card-img-top" alt="..." />
                                            <h5>202</h5>
                                            <p className="card-text" />
                                            <a href="../htmldamasbodeguero/adidasdama2.html" className="btn btn-primary">Ver detalles</a>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                {/*tarjeta 3*/}
                                <br />
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <div className="card">
                                        <div className="card-body">
                                        <img src="/img/adidasdamas3.png" className="card-img-top" alt="..." />
                                       < h5>203</h5>
                                            <p className="card-text" />
                                            <a href="../htmldamasbodeguero/adidasdama3.html" className="btn btn-primary">Ver detalles</a>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                {/*tarjeta 4*/}
                                <br />
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <div className="card">
                                        <div className="card-body">
                                        <img src="/img/adidasdamas4.png" className="card-img-top" alt="..." />
                                            <h5>204</h5>
                                            <p className="card-text" />
                                            <a href="../htmldamasbodeguero/adidasdama4.html" className="btn btn-primary">Ver detalles</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br />
        </>
    );
}

export default AdidasDamasj;
