import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './FilaCaballerosB.css'; // Importa el archivo CSS

function FilaCaballerosB() {
    const [productos, setProductos] = useState([]);
    const [terminoBusqueda, setTerminoBusqueda] = useState("");

    const [nuevoProducto, setNuevoProducto] = useState({
        PK_fk_Id_marca_producto: 3,
        Modelo_producto: "",
        Tipo_producto: "",
        Color_producto: "",
        Precio_producto: "",
        Talla_disponible_producto: "",
        Cantidad_disponible_producto: ""
    });
    const [productoEditando, setProductoEditando] = useState({
        Id_producto: null,
        Modelo_producto: "",
        Tipo_producto: "",
        Color_producto: "",
        Precio_producto: "",
        Talla_disponible_producto: "",
        Cantidad_disponible_producto: ""
    });
    const [errores, setErrores] = useState({});
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [mostrarFormularioEdicion, setMostrarFormularioEdicion] = useState(false);

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
            } catch (error) {
                console.error(error);
            }
        }
    };

    const handleEditarProducto = (producto) => {
        setProductoEditando(producto);
        setMostrarFormularioEdicion(true);
    };

    const handleActualizarProducto = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:3030/producto/${productoEditando.Id_producto}`,{
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(productoEditando)
            });
            if (!response.ok) {
                throw new Error('Error al actualizar el producto');
            }
            setProductoEditando({
                Id_producto: null,
                Modelo_producto: "",
                Tipo_producto: "",
                Color_producto: "",
                Precio_producto: "",
                Talla_disponible_producto: "",
                Cantidad_disponible_producto: ""
            });
            setMostrarFormularioEdicion(false);
            fetchProductos();
        } catch (error) {
            console.error(error);
        }
    };

    const validateForm = () => {
        let errors = {};
        let formIsValid = true;

        if (!nuevoProducto.Modelo_producto) {
            formIsValid = false;
            errors["Modelo_producto"] = "Por favor ingrese el modelo del producto.";
        }

        if (!nuevoProducto.Tipo_producto) {
            formIsValid = false;
            errors["Tipo_producto"] = "Por favor seleccione el tipo del producto.";
        }

        if (!nuevoProducto.Color_producto) {
            formIsValid = false;
            errors["Color_producto"] = "Por favor ingrese el color del producto.";
        }

        if (!nuevoProducto.Precio_producto) {
            formIsValid = false;
            errors["Precio_producto"] = "Por favor ingrese el precio del producto.";
        }

        if (!nuevoProducto.Talla_disponible_producto) {
            formIsValid = false;
            errors["Talla_disponible_producto"] = "Por favor ingrese la talla disponible del producto.";
        }

        if (!nuevoProducto.Cantidad_disponible_producto) {
            formIsValid = false;
            errors["Cantidad_disponible_producto"] = "Por favor ingrese la cantidad disponible del producto.";
        }

        setErrores(errors);
        return formIsValid;
    };

    const toggleFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
    };

    const calcularTotalCantidadDisponible = () => {
        return productos.reduce((total, producto) => total + parseInt(producto.Cantidad_disponible_producto), 0);
    };

    const handleBuscar = (event) => {
        setTerminoBusqueda(event.target.value);
    };

    const productosFiltrados = productos.filter(producto => {
        return (
            producto.Modelo_producto.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
            producto.Tipo_producto.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
            producto.Color_producto.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
            producto.Precio_producto.toString().toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
            producto.Talla_disponible_producto.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
            producto.Cantidad_disponible_producto.toString().toLowerCase().includes(terminoBusqueda.toLowerCase())
        );
    });
    return (
        <div>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link to="/IndexBodega" className="nav-link active btn btn-dark" aria-current="page">Volver atrás</Link>
                </li>
            </ul>

            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />

            <div className="contenedor">
                <h2>Fila Caballeros</h2>

                <div className="mb-3">
                    <label htmlFor="busqueda" className="form-label">Buscar por Modelo o Tipo:</label>
                    <input type="text" className="form-control" id="busqueda" value={terminoBusqueda} onChange={handleBuscar} />
                </div>
                
                <button onClick={toggleFormulario} className="btn btn-primary">{mostrarFormulario ? 'Ocultar Formulario' : 'Agregar Nuevo Producto'}</button>
                {mostrarFormulario && (
                    <div>
                        <form onSubmit={handleSubmit}>
                            <h3>Agregar Nuevo Producto</h3>
                            <div className="mb-3">
                                <label htmlFor="modelo" className="form-label">Modelo:</label>
                                <input type="text" className="form-control" id="modelo" name="Modelo_producto" value={nuevoProducto.Modelo_producto} onChange={handleChange} />
                                <div className="text-danger">{errores["Modelo_producto"]}</div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tipo" className="form-label">Tipo:</label>
                                <select className="form-control" id="tipo" name="Tipo_producto" value={nuevoProducto.Tipo_producto} onChange={handleChange}>
                                    <option value="">Seleccionar tipo</option>
                                    <option value="Deportivas">Deportivas</option>
                                    <option value="Clásicas">Clásicas</option>
                                    <option value="Juveniles">Juveniles</option>
                                </select>
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
                            <button type="submit" className="btn btn-primary">Agregar Producto</button>
                            <button type="button" className="btn btn-secondary ms-2" onClick={toggleFormulario}>Cancelar</button>
                        </form>
                    </div>
                )}
                {mostrarFormularioEdicion && (
                    <div>
                        <form onSubmit={handleActualizarProducto}>
                            <h3>Editar Producto</h3>
                            <div className="mb-3">
                                <label htmlFor="modelo" className="form-label">Modelo:</label>
                                <input type="text" className="form-control" id="modelo" name="Modelo_producto" value={productoEditando.Modelo_producto} onChange={(e) => setProductoEditando({ ...productoEditando, Modelo_producto: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tipo" className="form-label">Tipo:</label>
                                <select className="form-control" id="tipo" name="Tipo_producto" value={productoEditando.Tipo_producto} onChange={(e) => setProductoEditando({ ...productoEditando, Tipo_producto: e.target.value })}>
                                    <option value="">Seleccionar tipo</option>
                                    <option value="Deportivas">Deportivas</option>
                                    <option value="Clásicas">Clásicas</option>
                                    <option value="Juveniles">Juveniles</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="color" className="form-label">Color:</label>
                                <input type="text" className="form-control" id="color" name="Color_producto" value={productoEditando.Color_producto} onChange={(e) => setProductoEditando({ ...productoEditando, Color_producto: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="precio" className="form-label">Precio:</label>
                                <input type="text" className="form-control" id="precio" name="Precio_producto" value={productoEditando.Precio_producto} onChange={(e) => setProductoEditando({ ...productoEditando, Precio_producto: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="talla" className="form-label">Talla Disponible:</label>
                                <input type="text" className="form-control" id="talla" name="Talla_disponible_producto" value={productoEditando.Talla_disponible_producto} onChange={(e) => setProductoEditando({ ...productoEditando, Talla_disponible_producto: e.target.value })} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="cantidad" className="form-label">Cantidad Disponible:</label>
                                <input type="text" className="form-control" id="cantidad" name="Cantidad_disponible_producto" value={productoEditando.Cantidad_disponible_producto} onChange={(e) => setProductoEditando({ ...productoEditando, Cantidad_disponible_producto: e.target.value })} />
                            </div>
                            <button type="submit" className="btn btn-primary">Actualizar Producto</button>
                            <button type="button" className="btn btn-secondary ms-2" onClick={() => setMostrarFormularioEdicion(false)}>Cancelar</button>
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
                            {productosFiltrados.map(producto => (
                                <tr key={producto.Id_producto}>
                                    <td>{producto.Id_producto}</td>
                                    <td>{producto.Modelo_producto}</td>
                                    <td>{producto.Tipo_producto}</td>
                                    <td>{producto.Color_producto}</td>
                                    <td>{producto.Precio_producto}</td>
                                    <td>{producto.Talla_disponible_producto}</td>
                                    <td>{producto.Cantidad_disponible_producto}</td>
                                    <td>
                                        <button className="btn btn-primary" onClick={() => handleEditarProducto(producto)}>Editar</button>
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
                  <img src="../img/caballeros/Fila/Tarjeta 1/lado 1.png" className="card-img-top" alt="..." />
                  <h5>Tenis Naster Bla-gri</h5>
                  <a href="/filacaballeros1"  className="btn btn-primary">ver detalles</a>
                </div>
              </div>
            </div>
            <br />
            {/* Tarjeta 2 */}
            <br /><br />
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <img src="../img/caballeros/Fila/Tarjeta 2/lado 1.png" className="card-img-top" alt="..." />
                  <h5>TENIS ROVERD FILA</h5>
                  <a href="/filacaballeros2"  className="btn btn-primary">ver detalles</a>
                </div>
              </div>
            </div>
            {/* Tarjeta 3 */}
            <br />
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <img src="../img/caballeros/Fila/Tarjeta 3/lado 1.png" className="card-img-top" alt="..." />
                  <h5>Tenis Danmon </h5>
                  <a href="/filacaballeros3"  className="btn btn-primary">ver detalles</a>
                </div>
              </div>
            </div>
            <br />
            {/* Tarjeta 4 */}
            <br />
            <div className="col-sm-6 mb-3 mb-sm-0">
              <div className="card">
                <div className="card-body">
                  <img src="../img/caballeros/Fila/Tarjeta 4/lado 1.png" className="card-img-top" alt="..." />
                  <h5>110</h5>
                  <a href="/filacaballeros4" className="btn btn-primary">ver detalles</a>
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

export default FilaCaballerosB;