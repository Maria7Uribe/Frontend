import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './AdidasCaballerosB.css'; // Asegúrate de que el archivo CSS está correctamente vinculado


function AdidasCaballerosB() {
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
    const [productoEditando, setProductoEditando] = useState(null);
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

    const handleEdit = (producto) => {
        setProductoEditando(producto);
        setMostrarFormulario(true);
        setNuevoProducto(producto);
    };

    const handleUpdate = async (event) => {
        event.preventDefault();
        if (validateForm()) {
            try {
                const response = await fetch(`http://localhost:3030/producto/${productoEditando.Id_producto}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(nuevoProducto)
                });
                if (!response.ok) {
                    throw new Error('Error al actualizar el producto');
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
                setProductoEditando(null);
            } catch (error) {
                console.error(error);
            }
        }
    };

    const validateForm = () => {
        let errors = {};
        let formIsValid = true;

        // Validación de campos...
        
        setErrores(errors);
        return formIsValid;
    };

    const toggleFormulario = () => {
        setMostrarFormulario(!mostrarFormulario);
        setProductoEditando(null);
    };

    // Función para calcular el total disponible
    const calcularTotalDisponible = () => {
        let total = 0;
        productos.forEach(producto => {
            total += parseInt(producto.Cantidad_disponible_producto);
        });
        return total;
    };

    return (
        <div>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link to="/IndexBodega" className="nav-link active btn btn-dark" aria-current="page">Volver atrás</Link>
                </li>
                <li className="nav-item custom-margin">
                    <button id="export-button" className="btn btn-dark">Exportar a Excel</button>
                </li>
                <li className="nav-item custom-margin">
                    <button id="export-pdf-button" className="btn btn-dark">Exportar a PDF</button>
                </li>
            </ul>
            <title>Adidas Caballeros</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
            <link rel="stylesheet" href="../css/inventario.css" />
            <link rel="shortcut icon" href="../img/logo.png" />
            <style>{/* Estilos adicionales */}</style>

            <div className="contenedor">
                <h2>Adidas Caballeros</h2>
                <div className="barra__buscador">
      
                </div>

                <button onClick={toggleFormulario} className="btn btn-primary">{mostrarFormulario ? 'Ocultar Formulario' : 'Agregar Nuevo Producto'}</button>

              
                {/* Formulario para agregar o editar un producto */}
                {mostrarFormulario && (
                    <form onSubmit={productoEditando ? handleUpdate : handleSubmit}>
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
                        <button type="submit" className="btn btn-primary">{productoEditando ? 'Actualizar Producto' : 'Agregar Producto'}</button>
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
                                <th>Acciones</th> {/* Nuevo campo para las acciones */}
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
                <button onClick={() => handleEdit(producto)} className="btn btn-secondary">Editar</button>
            </td>
        </tr>
    ))}
    <tr>
        <td colSpan="5"></td> {/* Colspan que abarca hasta la columna "Acciones" */}
        <td>Total Disponible:</td>
        <td>{calcularTotalDisponible()}</td>
    </tr>
</tbody>




                    </table>
           
                </div>

                {/* Tarjetas adicionales */}
                <div className="col-md-15 contenedor-tarjetas d-flex align-items-center justify-content-center">
                    <div className="col-md-10">
                        <div className="fila">
                            <div className="row">
                                {/* Tarjeta 1 */}
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src="/img/adidascaballero1.png" className="card-img-top" alt="..." />
                                            <h5>101</h5>
                                            <p className="card-text" />
                                            <a href="../htmlcaballerosbodeguero/adidas1caballeros.html" className="btn btn-primary">ver detalles</a> 
                                        </div>
                                    </div>
                                </div>
                                {/* Tarjeta 2 */}
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src="/img/adidascaballero2.png" className="card-img-top" alt="..." />
                                            <h5>102</h5>
                                            <p className="card-text" />
                                            <a href="../htmlcaballerosbodeguero/adidas2caballeros.html" className="btn btn-primary">ver detalles</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Tarjeta 3 */}
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src="/img/adidascaballero3.png" className="card-img-top" alt="..." />
                                            <h5>103</h5>
                                            <p className="card-text" />
                                            <a href="/Adidascaballeros3" className="btn btn-primary">ver detalles</a>
                                        </div>
                                    </div>
                                </div>
                                {/* Tarjeta 4 */}
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src="/img/adidascaballero4.png" className="card-img-top" alt="..." />
                                            <h5>104</h5>
                                            <p className="card-text" />
                                            <a href="../htmlcaballerosbodeguero/adidas6caballeros.html" className="btn btn-primary">ver detalles</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdidasCaballerosB;
