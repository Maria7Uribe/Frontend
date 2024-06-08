import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function PumaDamasj() {
    const [productos, setProductos] = useState([]);
    const [totalCantidadDisponible, setTotalCantidadDisponible] = useState(0);

    useEffect(() => {
        fetchProductos();
    }, []);

    useEffect(() => {
        calcularTotalCantidadDisponible();
    }, [productos]);

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
        let total = 0;
        productos.forEach(producto => {
            total += parseInt(producto.Cantidad_disponible_producto);
        });
        setTotalCantidadDisponible(total);
    };

    return (
        <div>
             <ul className="nav nav-pills">
                <li className="nav-item">
                    <Link to="/Marcasjefe" className="nav-link active btn btn-dark" aria-current="page">Volver atrás</Link>
                </li>
                <li className="nav-item custom-margin">
                    <button id="export-button" className="btn btn-dark">Exportar a Excel</button>
                </li>
                <li className="nav-item custom-margin">
                    <button id="export-pdf-button" className="btn btn-dark">Exportar a PDF</button>
                </li>
            </ul> 
            <title>Puma Damas</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" />
            <link rel="stylesheet" href="../css/inventario.css" />
            <link rel="shortcut icon" href="../img/logo.png" />
            <style>{/* Estilos adicionales */}</style>

            <div className="contenedor">
                <h2>Puma Damas</h2>
                <div className="barra__buscador">
                </div>

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
                                </tr>
                            ))}
                            {/* Fila para el total de cantidad disponible */}
                            <tr>
                                <td colSpan="6"></td>
                                <td><strong>Total: {totalCantidadDisponible}</strong></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default PumaDamasj;
