import React from "react";
import { Link } from 'react-router-dom';
import './AdidasCaballeros.css';

function AdidasCaballeros() {
    return (
        <>
          <header> {/* Utiliza un elemento header en lugar de head */}
            <title>Adidas Caballeros</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
          </header>
    
          <div>
            <br />
            <ul className="nav nav-pills">
              <li className="nav-item">
                <a className="nav-link active btn btn-dark" aria-current="page" href="../html/inventariojefebodega.html">Volver atrás</a>
              </li>
              <li className="nav-item custom-margin">
                <button id="export-button" className="btn btn-dark">Exportar a Excel</button>
              </li>
              <li className="nav-item custom-margin">
                <button id="export-pdf-button" className="btn btn-dark">Exportar a PDF</button>
              </li>
            </ul>
            {/* Botón para abrir el modal de agregar zapatillas*/}
      
            {/* Agrega el estilo directamente en el componente */}
            <style>{`
              .contenedor {
                /* Estilos para el contenedor */
              }
              .barra__buscador {
                /* Estilos para la barra de búsqueda */
              }
              /* Agrega más estilos según sea necesario */
            `}</style>
    
            <div className="contenedor">
              <h2> Adidas Caballeros</h2>
              <div className="barra__buscador">
                <form action="" className="formulario" method="post">
                  <input type="text" name="buscar" placeholder="buscar modelo o tipo" defaultValue="" className="input__text" />
                  <input type="submit" className="btn" name="btn_buscar" defaultValue="Buscar" />
                  <a href="../php_productos/insert.php" className="btn btn__nuevo">Nuevo Producto</a>
                </form>
              </div>
              <table>
                <tbody>
                  <tr className="head">
                    <td>ID</td>
                    <td>Modelo</td>
                    <td>Tipo</td>
                    <td>Color</td>
                    <td>Precio</td>
                    <td>Talla Disponible</td>
                    <td>Cantidad Disponible</td>
                    <td>Acción</td>
                  </tr>
                  {/* Coloca aquí el código PHP necesario */}
                </tbody>
              </table>
            </div>
            {/* Fin del código del CRUD para las zapatillas*/}
            
            {/* Contenedor de las tarjetas de las zapatillas */}
            <br /><br />
            <div className="col-md-15 contenedor-tarjetas d-flex align-items-center justify-content-center">
              <div className="col-md-10">
                <div className="fila">
                  <div className="row">
                    {/* Tarjeta 1 */}
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <div className="card">
                        <div className="card-body">
                          <img src="../img/caballeros/adidas/adidas beyaz erkek spr ayakkab/lado izquierdo.jpeg" className="card-img-top" alt="..." /> 
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
                          <img src="../img/caballeros/adidas/Adidas Forum Low White Sneakers/lado derecho.png" className="card-img-top" alt="..." />
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
                          <img src="../img/caballeros/adidas/adidas neo Grand Court '' Grey Three/lado derecho.png" className="card-img-top" alt="..." />
                          <h5>103</h5>
                          <p className="card-text" />
                          <a href="../htmlcaballerosbodeguero/adidas3caballeros.html" className="btn btn-primary">ver detalles</a>
                        </div>
                      </div>
                    </div>
                    {/* Tarjeta 4 */}
                    <div className="col-sm-6 mb-3 mb-sm-0">
                      <div className="card">
                        <div className="card-body">
                          <img src="../img/caballeros/adidas/BOTAS FORUM MID/lado derecho.png" className="card-img-top" alt="..." />
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
          <br />
          {/* Agrega este bloque en tu script JavaScript */}
        </>
      );
    }

export default AdidasCaballeros;