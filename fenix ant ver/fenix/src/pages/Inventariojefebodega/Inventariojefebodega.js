import React from 'react';
import { Link } from 'react-router-dom';
import './Inventariojefebodega.css';

function Inventariojefebodega() {
  
    return (
        <div>
            <div>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Inventario Jefe Bodega</title>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous" />
                <link rel="shortcut icon" href="../img/logo.png" />
                <br />
                <ul className="nav nav-pills">
                    <li className="nav-item">
                        <Link to="/IndexJefe" className="nav-link active btn btn-dark" aria-current="page">Volver atrás</Link>
                    </li>
                    <li className="nav-item custom-margin">
                        <Link to="/" className="nav-link active btn btn-dark" aria-current="page">Cerrar Sesión</Link>
                    </li>
                </ul>
                <br />
                <br />
                <div id="carouselExampleControls1" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                          
                        <div className="d-flex flex-row">
                            <img src="../img/mujer.jpeg" className="card-img-top img-fluid" alt="Imagen 5" style={{ width: '550px', height: '550px' }} />
                                <div className="col-md-2">
                                    <div className="card">
                                        <img src="../img/adidasmujer.jpg" className="card-img-top" alt="Imagen 1" />
                                        <div className="card-body">
                                            <h5 className="card-title">ADIDAS</h5>
                                            <p className="card-text">"Nada es imposible"</p>
                                            <Link to="/adidasdamas" className="btn btn-primary">Ver zapatillas</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="card">
                                        <img src="../img/nikemujer.png" className="card-img-top" alt="Imagen 2" />
                                        <div className="card-body">
                                            <h5 className="card-title">NIKE</h5>
                                            <p className="card-text">"Solo hazlo"</p>
                                            <Link to="/zapatillas" className="btn btn-primary">Ver zapatillas</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="card">
                                        <img src="../img/filamujer.jpg" className="card-img-top" alt="Imagen 3" />
                                        <div className="card-body">
                                            <h5 className="card-title">FILA</h5>
                                            <p className="card-text">"Una marca de élite, con clase"</p>
                                            <Link to="/zapatillas" className="btn btn-primary">Ver zapatillas</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="card">
                                        <img src="../img/puma.webp" className="card-img-top" alt="Imagen 4" />
                                        <div className="card-body">
                                            <h5 className="card-title">PUMA</h5>
                                            <p className="card-text">"Siempre Más Rápido "</p>
                                            <Link to="/zapatillas" className="btn btn-primary">Ver zapatillas</Link>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    {/* Controles del carrusel 1 */}
                </div>

                <br />

                <div id="carouselExampleControls2" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                        <div className="d-flex flex-row">
                            <img src="../img/hombre.jpeg" className="card-img-top img-fluid" alt="Imagen 5" style={{ width: '550px', height: '550px' }} />
                                <div className="col-md-2">
                                    <div className="card">
                                        <img src="../img/adidashombre.jpg" className="card-img-top" alt="Imagen 7" />
                                        <div className="card-body">
                                            <h5 className="card-title">ADIDAS</h5>
                                            <p className="card-text">"Nada es imposible"</p>
                                            <Link to="/AdidasCaballeros" className="btn btn-primary">Ver zapatillas</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="card">
                                        <img src="../img/nikehombre.png" className="card-img-top" alt="Imagen 8" />
                                        <div className="card-body">
                                            <h5 className="card-title">NIKE</h5>
                                            <p className="card-text">"Solo hazlo"</p>
                                            <Link to="/nikedamas" className="btn btn-primary">Ver zapatillas</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="card">
                                        <img src="../img/filahombre.png" className="card-img-top" alt="Imagen 9" />
                                        <div className="card-body">
                                            <h5 className="card-title">FILA</h5>
                                            <p className="card-text">"Una marca de élite, con clase"</p>
                                            <Link to="/zapatillas" className="btn btn-primary">Ver zapatillas</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="card">
                                        <img src="../img/puma.webp" className="card-img-top" alt="Imagen 10" />
                                        <div className="card-body">
                                            <h5 className="card-title">PUMA</h5>
                                            <p className="card-text">"Siempre Más Rápido "</p>
                                            <Link to="/zapatillas" className="btn btn-primary">Ver zapatillas</Link>
                                        </div>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    {/* Controles del carrusel 2 */}
                </div>
            </div>
        </div>
    );
}

export default Inventariojefebodega;
