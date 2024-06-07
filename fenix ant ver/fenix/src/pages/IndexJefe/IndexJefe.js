  import React from 'react';
  import { Link } from 'react-router-dom';
  import './IndexJefe.css';



  function IndexJefe() {
    return (
  <div>
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Index_jefe</title>
    {/*MATERIAL ICONS*/}
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet" />
    {/*ESTILOS CSS*/}
      
    <div className="container">
      <aside>
        <div className="top">
          <div className="logo">
            <img src="../img/logo.png" alt />
            <h2 className="text-muted">Sport <span className="danger">Line</span></h2>
            <div className="close" id="close-btn">
              <span className="material-icons-sharp">close</span>
            </div>
          </div>
        </div>
        <div className="sidebar">
          <a href="/Usuarios" className="active">
            <span className="material-icons-sharp">person_outline</span>  
            <h3>Usuarios</h3>
          </a>
          <a href="#">
            <span className="material-icons-sharp">receipt_long</span>  
            <h3>Pedidos</h3>
          </a>
          <a href="#">
            <span className="material-icons-sharp">insights</span>  
            <h3>Estadísticas</h3>
          </a>
          <a href="../html/indexjefe.html" id="liveToastBtn">
            <span className="material-icons-sharp">mail_outline</span>  
            <h3 id="liveToastBtn">Mensajes</h3>
            <span className="message-count">100</span>
          </a>
          <a href="../Inventariojefeprincipal">
            <span className="material-icons-sharp">inventory</span>  
            <h3>Productos</h3>
          </a>
          <a href="../Inventariojefebodega">
            <span className="material-icons-sharp">report_gmailerrorred</span>  
            <h3>bodega</h3>
          </a>
          <a href="#">
            <span className="material-icons-sharp">settings</span>  
            <h3>Configuración</h3>
          </a>
          <a href="#">
            <span className="material-icons-sharp">add</span>  
            <h3>Añadir producto</h3>
          </a>
        <Link to="/"><span className="material-icons-sharp">logout</span><h3>Cerrar sesión</h3></Link>
        </div>
      </aside>
      {/* FINALIZA LA SECCIÓN DE ASIDE*/}
      <main>
        <h1>Menu</h1>
        <div className="date">
          <input type="date" />
        </div>
        <div className="insights">
          {/*Inicia SALES*/} 
          <div className="sales">
            <span className="material-icons-sharp"> analytics</span>
            <div className="middle">
              <div className="left">
                <h3>Total Ventas</h3>
                <h1>$1.500.000</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle cx={38} cy={38} r={36} />
                </svg>
                <div className="number">
                  <p> 81%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">Últimas 24 horas</small>
          </div>
          {/* Finaliza SALES*/}
          {/*Inicia EXPENSES*/} 
          <div className="expenses">
            <span className="material-icons-sharp"> bar_chart</span>
            <div className="middle">
              <div className="left">
                <h3>Total Pedidos</h3>
                <h1>$5.900.000</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle cx={30} cy={38} r={36} />
                </svg>
                <div className="number">
                  <p> 62%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">Últimas 24 horas</small>
          </div>
          {/* Finaliza EXPENSES*/}
          {/*Inicia INCOME*/} 
          <div className="income">
            <span className="material-icons-sharp"> stacked_line_chart</span>
            <div className="middle">
              <div className="left">
                <h3>Total Perdidas</h3>
                <h1>$1.000.000</h1>
              </div>
              <div className="progress">
                <svg>
                  <circle cx={30} cy={38} r={36} />
                </svg>
                <div className="number">
                  <p> 44%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">Últimas 24 horas</small>
          </div>
          {/* Finaliza INCOME*/}
        </div>
        {/*Finaliza INSIGHTS*/}
        <div className="recent-orders">
          <h2>Ordenes recientes</h2>
          <table>
            <thead>
              <tr>
                <th>Nombre del producto</th>
                <th>Marca</th>
                <th>Tipo</th>
                <th>Tallas</th>
                <th>Color</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Retro 4</td>
                <td>Jordan</td>
                <td>Unisex</td>
                <td>36-44</td>
                <td>Roja-negro</td>
                <td>$140.000</td>
                <td className="warning">Pendiente</td>
                <td className="primary">Detalles</td>
              </tr>
              <tr>
                <td>Retro 1</td>
                <td>Jordan</td>
                <td>Unisex</td>
                <td>38-42</td>
                <td>Blanca-negro</td>
                <td>$150.000</td>
                <td className="warning">Pendiente</td>
                <td className="primary">Detalles</td>
              </tr>
              <tr>
                <td>Neymar</td>
                <td>Pumar</td>
                <td>Dama</td>
                <td>36-39</td>
                <td>Blanca-Rosada</td>
                <td>$130.000</td>
                <td className="warning">Pendiente</td>
                <td className="primary">Detalles</td>
              </tr>
              <tr>
                <td>Alexander Mcqueen</td>
                <td>Alexander Mcqueen</td>
                <td>Unisex</td>
                <td>36-42</td>
                <td>Blanca-negro</td>
                <td>$160.000</td>
                <td className="warning">Pendiente</td>
                <td className="primary">Detalles</td>
              </tr>
              <tr>
                <td>Adi2000</td>
                <td>Adidas</td>
                <td>Unisex</td>
                <td>36-42</td>
                <td>Blanca-negro</td>
                <td>$150.000</td>
                <td className="warning">Pendiente</td>
                <td className="primary">Detalles</td>
              </tr>
            </tbody>
          </table>
          <a href="#">Mostrar todo</a>
        </div>
      </main>
      {/*FINALIZA MAIN*/}
      <div className="right">
        <div className="top">
          <button id="menu-btn">
            <span className="material-icons-sharp">menu</span>
          </button>
          <div className="theme-toggler">
            <span className="material-icons-sharp active">light_mode</span>
            <span className="material-icons-sharp">dark_mode </span>
          </div>
          <div className="profile">
            <div className="info">
              <p>Hey, <b>Cristian</b></p>
              <small className="text-muted">Admin</small>
            </div>
            <div className="profile-photo">
              <img src="../img/icono_perfil.png" alt />
            </div>
          </div>
        </div>
        {/*-FINALIZA TOP*/}
        <div className="recent-updates">
          <h2>Actualizaciones recientes</h2>
          <div className="updates">
            <div className="update">
              <div className="profile-photo">
                <img src="../img/perfil1.jpg" alt />
              </div>
              <div className="message">
                <p><b>Ferxxo</b> recibió su pedido solicitado el 17/05/2023 a las 11:30 AM</p>
                <small className="text-muted">Hace 1 minutos</small>
              </div>
            </div>
            <div className="update">
              <div className="profile-photo">
                <img src="../img/perfil2.avif" alt />
              </div>
              <div className="message">
                <p><b>Anuel aa</b> recibió su pedido solicitado el 19/05/2023 a las 4:30 PM</p>
                <small className="text-muted">Hace 2 minutos</small>
              </div>
            </div>
            <div className="update">
              <div className="profile-photo">
                <img src="../img/perfil3.jpg" alt />
              </div>
              <div className="message">
                <p><b>Ñengo Flow</b> recibió su pedido solicitado el 01/06/2023 a las 5:30 PM</p>
                <small className="text-muted">Hace 3 minutos</small>
              </div>
            </div>
          </div>
        </div>
        {/* FINALIZA RECENT UPDATES*/}
        <div className="sales-analytics">
          <h2>Análisis de ventas</h2>
          <div className="item online">
            <div className="icon">
              <span className="material-icons-sharp">shopping_cart</span>
            </div>
            <div className="right">
              <div className="info">
                <h3>Local 190</h3>
                <small className="text-muted">Hace 15 minutos</small>
              </div>
              <h5 className="success">+38%</h5>
              <h3>$900.000</h3>
            </div>
          </div>
          <div className="item online">
            <div className="icon">
              <span className="material-icons-sharp">shopping_cart</span>
            </div>
            <div className="right">
              <div className="info">
                <h3>Local 1</h3>
                <small className="text-muted">Hace 10 minutos</small>
              </div>
              <h5 className="success">+80%</h5>
              <h3>$2.000.000</h3>
            </div>
          </div>
          <div className="item online">
            <div className="icon">
              <span className="material-icons-sharp">shopping_cart</span>
            </div>
            <div className="right">
              <div className="info">
                <h3>Local 155</h3>
                <small className="text-muted">Hace 5 minutos</small>
              </div>
              <h5 className="success">+19%</h5>
              <h3>$1.300.000</h3>
            </div>
          </div>
          <div className="item add-product">
            <div>
              <span className="material-icons-sharp">add</span>
              <h3>Añadir producto</h3>    
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

    );
  }

  export default IndexJefe;
