import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './FilaDamasB.css'; // Importa el archivo CSS

function FilaDamasB() {
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
    const [productoEditando, setProductoEditando] = useState(null); // Estado para el producto que se está editando
    const [errores, setErrores] = useState({});
    const [mostrarFormulario, setMostrarFormulario] = useState(false);

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

    const handleChange = (event) => {
        const { name, value } = event.target;
        setNuevoProducto({
            ...nuevoProducto,
            [name]: value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                if (productoEditando) {
                    // Si hay un producto editando, realizamos una solicitud PUT en lugar de POST
                    const response = await fetch(`http://localhost:3030/producto/${productoEditando.Id_producto}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(nuevoProducto)
                    });
                    if (!response.ok) {
                        throw new Error('Error al editar el producto');
                    }
                } else {
                    // Si no hay un producto editando, realizamos una solicitud POST para agregar un nuevo producto
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
                }
                setNuevoProducto({
                    PK_fk_Id_marca_producto: 3,
                    Modelo_producto: "",
                    Tipo_producto: "",
                    Color_producto: "",
                    Precio_producto: "",
                    Talla_disponible_producto: "",
                    Cantidad_disponible_producto: ""
                });
                fetchProductos();
                setMostrarFormulario(false);
                setProductoEditando(null); // Reiniciamos el producto editando
            } catch (error) {
                console.error(error);
            }
        }
    };

    const validateForm = () => {
        let errors = {};
        let formIsValid = true;

        // Validación del formulario

        setErrores(errors);
        return formIsValid;
    };

    const toggleFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
        setProductoEditando(null); // Reiniciamos el producto editando al mostrar/ocultar el formulario
    };

    const handleEditar = (producto) => {
        // Establecemos el producto que se va a editar y mostramos sus detalles en el formulario de agregar producto
        setProductoEditando(producto);
        setNuevoProducto(producto);
        setMostrarFormulario(true);
    };

    const calcularTotalCantidadDisponible = () => {
        return productos.reduce((total, producto) => total + parseInt(producto.Cantidad_disponible_producto), 0);
    };

    return (
        <div>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link to="/IndexBodega" className="nav-link active btn btn-dark" aria-current="page">Volver atrás</Link>
                </li>
            </ul>
            <title>Fila Damas</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
            <link rel="stylesheet" href="../css/inventario.css" />
            <link rel="shortcut icon" href="../img/logo.png" />
            <style>{/* Estilos adicionales */}</style>

            <div className="contenedor">
                <h2>Fila Damas</h2>
                <div className="barra__buscador">
                </div>

                <button onClick={toggleFormulario} className="btn btn-primary">{mostrarFormulario ? 'Ocultar Formulario' : 'Agregar Nuevo Producto'}</button>

                {/* Formulario para agregar un nuevo producto */}
                {mostrarFormulario && (
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="modelo" className="form-label">Modelo:</label>
                            <input type="text" className="form-control" id="modelo" name="Modelo_producto" value={nuevoProducto.Modelo_producto} onChange={handleChange} />
                            <div className="text-danger">{errores["Modelo_producto"]}</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="tipo" className="form-label">Tipo:</label>
                            <input type="text" className="form-control" id="tipo" name="Tipo_producto" value={nuevoProducto.Tipo_producto} onChange={handleChange} />
                            <div className="text-danger">{errores["Tipo_producto"]}</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="color" className="form-label">Color:</label>
                            <input type="text" className="form-control" id="color" name="Color_producto" value={nuevoProducto.Color_producto} onChange={handleChange} />
                            <div className="text-danger">{errores["Color_producto"]}</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="precio" className="form-label">Precio:</label>
                            <input type="text" className="form-control" id="precio" name="Precio_producto" value={nuevoProducto.Precio_producto} onChange={handleChange} />
                            <div className="text-danger">{errores["Precio_producto"]}</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="talla" className="form-label">Talla Disponible:</label>
                            <input type="text" className="form-control" id="talla" name="Talla_disponible_producto" value={nuevoProducto.Talla_disponible_producto} onChange={handleChange} />
                            <div className="text-danger">{errores["Talla_disponible_producto"]}</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="cantidad" className="form-label">Cantidad Disponible:</label>
                            <input type="text" className="form-control" id="cantidad" name="Cantidad_disponible_producto" value={nuevoProducto.Cantidad_disponible_producto} onChange={handleChange} />
                            <div className="text-danger">{errores["Cantidad_disponible_producto"]}</div>
                        </div>
                        <button type="submit" className="btn btn-primary">{productoEditando ? 'Editar Producto' : 'Agregar Producto'}</button>
                    </form>
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
                                        <button className="btn btn-primary" onClick={() => handleEditar(producto)}>Editar</button>
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

                <div className="col-md-15 contenedor-tarjetas d-flex align-items-center justify-content-center">
                    <table className="table">
                        {/* Encabezados de la tabla */}
                    </table>
                </div>

                <div className="col-md-15 contenedor-tarjetas d-flex align-items-center justify-content-center">
                    <div className="col-md-10">
                        <div className="fila">
                            <div className="row">
                                {/* Tarjetas de productos */}
                                {/* Tarjeta 1 */}
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src="/img/filadama1.png" className="card-img-top" alt="..." />
                                            <h5>207</h5>
                                            <p className="card-text" />
                                            <a href="../htmldamasbodeguero/filadama1.html" className="btn btn-primary">ver detalles</a>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                {/* Tarjeta 2 */}
                                <br /><br />
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src="/img/filadama2.png" className="card-img-top" alt="..." />
                                            <h5>208</h5>
                                            <p className="card-text" />
                                            <a href="/Filadamas2" className="btn btn-primary">ver detalles</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Tarjeta 3 */}
                                <br />
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src="/img/filadama3.png" className="card-img-top" alt="..." />
                                            <h5>209</h5>
                                            <p className="card-text" />
                                            <a href="../htmldamasbodeguero/filadama3.html" className="btn btn-primary">ver detalles</a>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                {/* Tarjeta 4 */}
                                <br />
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src="/img/filadama4.png" className="card-img-top" alt="..." />
                                            <h5>210</h5>
                                            <p className="card-text" />
                                            <a href="../htmldamasbodeguero/filadama4.html" className="btn btn-primary">ver detalles</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FilaDamasB;
