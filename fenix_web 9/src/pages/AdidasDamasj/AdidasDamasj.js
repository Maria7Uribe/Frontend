import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import './AdidasDamasj.css';

function AdidasDamasj() {
    const [productos, setProductos] = useState([]);

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

    const calcularTotalCantidadDisponible = () => {
        return productos.reduce((total, producto) => total + parseInt(producto.Cantidad_disponible_producto), 0);
    };

    return (
        <div>
            <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link to="/IndexJefe" className="nav-link active btn btn-dark" aria-current="page">Volver atrás</Link>
                </li>
                <li className="nav-item custom-margin">
                    <button id="export-button" className="btn btn-dark">Exportar a Excel</button>
                </li>
                <li className="nav-item custom-margin">
                    <button id="export-pdf-button" className="btn btn-dark">Exportar a PDF</button>
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

            {/* Tabla de productos */}
            <div className="col-md-15 contenedor-tarjetas d-flex align-items-center justify-content-center table-responsive">
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
                            </tr>
                        ))}
                        <tr>
                            <td colSpan="6" className="text-end"><strong>Total:</strong></td>
                            <td>{calcularTotalCantidadDisponible()}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default AdidasDamasj;
