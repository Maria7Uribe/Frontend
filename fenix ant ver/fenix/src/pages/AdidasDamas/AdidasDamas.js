import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './AdidasDamas.css';

function AdidasDamas() {
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
                setMostrarFormulario(false);
            } catch (error) {
                console.error(error);
            }
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
            errors["Tipo_producto"] = "Por favor ingrese el tipo del producto.";
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

    const handleEdit = (productId) => {
        // Encontrar el producto con el ID correspondiente
        const productoEdit = productos.find(producto => producto.Id_producto === productId);
        // Establecer el producto a editar en el estado
        setNuevoProducto(productoEdit);
        // Mostrar el formulario de edición
        setMostrarFormulario(true);
    };

    
    return (
        <>
            <div>
                <title>Adidas Damas</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
                <link rel="stylesheet" href="../css/inventario.css" />
                <link rel="stylesheet" href="../php_productos/csss/estilo.css" />
                <div className="contenedor">
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link to="/Inventariojefeprincipal" className="nav-link active btn btn-dark" aria-current="page">Volver atrás</Link>
                        </li>
                    </ul>
                    <h2>Adidas Damas</h2>
                    <div className="barra__buscador"></div>
                </div>
                <br /><br />

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
                        <button type="submit" className="btn btn-primary">Agregar Producto</button>
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
            <button onClick={() => handleEdit(producto.Id_producto)} className="btn btn-primary">Editar</button>
        </td>   
                                </tr>
                            ))}
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
                                            <img src="../img/damas/adidas/ADIDAS FORUM BLANCA CON ROSADO/lado izquierdo.jpeg" className="card-img-top" alt="..." />
                                            <h5>201</h5>
                                            <p className="card-text" />
                                            <a href="/adidasdamas1" className="btn btn-primary">ver detalles</a>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                {/*tarjeta 2*/}
                                <br />
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src="../img/damas/adidas/adidas Forum Zapatos bajos para mujer, color rosa, talla/alfrente.jpeg" className="card-img-top" alt="..." />
                                            <h5>202</h5>
                                            <p className="card-text" />
                                            <a href="../htmldamasbodeguero/adidasdama2.html" className="btn btn-primary">ver detalles</a>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                {/*tarjeta 3*/}
                                <br />
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src="../img/damas/adidas/adidas hzywanshi/lado derecho.jpeg" className="card-img-top" alt="..." />
                                            <h5>203</h5>
                                            <p className="card-text" />
                                            <a href="../htmldamasbodeguero/adidasdama3.html" className="btn btn-primary">ver detalles</a>
                                        </div>
                                    </div>
                                </div>
                                <br />
                                {/*tarjeta 4*/}
                                <br />
                                <div className="col-sm-6 mb-3 mb-sm-0">
                                    <div className="card">
                                        <div className="card-body">
                                            <img src="../img/damas/adidas/Adidas Unisex-Adult Pureboost 22 Running Shoe/lado izquierdo.jpeg" className="card-img-top" alt="..." />
                                            <h5>204</h5>
                                            <p className="card-text" />
                                            <a href="../htmldamasbodeguero/adidasdama4.html" className="btn btn-primary">ver detalles</a>
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

export default AdidasDamas;
