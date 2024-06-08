import React from 'react';
import { Link } from 'react-router-dom'; 
import './Home.css';


const Home = () => {
    return (
        <div>
            <header>
                <a href="#" className="logo">Sportling</a>
                <ul className="navlist">
                    <li><Link to="/login"><i className="ri-user-line"></i>Iniciar sesión</Link></li>
                </ul>

                <div className="icons">
                    <div className="bx bx-menu" id="menu-icon"></div>
                </div>
            </header>
            <section className="secciones">
                <div className="secciones-text">
                    <h1>Inventario</h1>
                    <p>A continuación encontrará todo el inventario a su disposición </p>
                    <Link to="/login" className="btn">Acceder</Link>
                    
                    </div>
        <div className="secciones-img">
          <img src="../img/zapatillas_index.png" alt />
        </div>
      </section>
  {/*Sección feature desing*/}
  <section className="feature">
    <div className="middle-text ">
      <h2> <span>Algunos de nuestros produtos...</span></h2>
    </div>
    <div className="feature-content">
      <div className="row">
        <div className="main-row">
          <div className="row-text">
            <h6>Explorar nuevo producto</h6>
            <h3>Adidas <br />CAMPUS</h3>
            <a href="#" className="row-btn">Ver</a>
          </div>
          <div className="row-img">
            <img src="../img/snakerstoreAdidas_Campus_00s_Footwear_White_Core_Black-H03470-0.webp" alt />
          </div>
        </div>
      </div>
      <div className="row row2">
        <div className="main-row">
          <div className="row-text">
            <h6>Explorar nuevo producto</h6>
            <h3>Adidas <br />z500</h3>
            <a href="#" className="row-btn">Ver</a>
          </div>
          <div className="row-img">
            <img src="../img/825-8259555_adidas-zx-500-dragon-ball-z-son-goku-removebg-preview.png" alt />
          </div>
        </div>
      </div>
      <div className="row row3">
        <div className="main-row">
          <div className="row-text">
            <h6>Explorar nuevo producto</h6>
            <h3>Adidas <br />STARLIFE</h3>
            <a href="#" className="row-btn">Ver</a>
          </div>
          <div className="row-img">
            <img src="../img/IMG_5288-removebg-preview.png" alt />
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*Sección productos desing*/}
  <section className="product">
    <div className="middle-text">
      <h2> Lo más nuevo de Septiembre</h2>
    </div>
    <div className="product-content">
      <div className="box">
        <div className="box-img">
          <img src="../img/descarga.jpeg" alt />
        </div>
        <h3>Jordan retro 5 black/blue</h3>
        <h4>Nuevo articulo 2023</h4>
        <div className="inbox">
          <div>
            <a href className="price">$150.000</a>
          </div>
          <div className="rating">
            <a href><i className="ri-star-fill" /></a>
            <a href><i className="ri-star-fill" /></a>
            <a href><i className="ri-star-fill" /></a>
            <a href><i className="ri-star-fill" /></a>
            <a href><i className="ri-star-fill" /></a>
          </div>
        </div>
        <div className="heart">
          <i className="ri-heart-fill" />
        </div>
      </div>
      <div className="box">
        <div className="box-img">
          <img src="../img/descarga (1).jpeg" alt />
        </div>
        <h3>Air Jordan 1 Low Travis Scott</h3>
        <h4>Nuevo articulo 2023</h4>
        <div className="inbox">
          <div>
            <a href className="price">$160.000</a>
          </div>
          <div className="rating">
            <a href><i className="ri-star-fill" /></a>
            <a href><i className="ri-star-fill" /></a>
            <a href><i className="ri-star-fill" /></a>
            <a href><i className="ri-star-fill" /></a>
            <a href><i className="ri-star-fill" /></a>
          </div>
        </div>
        <div className="heart">
          <i className="ri-heart-fill" />
        </div>
      </div>
      <div className="box">
        <div className="box-img">
          <img src="../img/descarga-removebg-preview.png" alt />
        </div>
        <h3>Air Jordan 4 Black Cat</h3>
        <h4>Nuevo articulo 2023</h4>
        <div className="inbox">
          <div>
            <a href className="price">$140.000</a>
          </div>
          <div className="rating">
            <a href><i className="ri-star-fill" /></a>
            <a href><i className="ri-star-fill" /></a>
            <a href><i className="ri-star-fill" /></a>
            <a href><i className="ri-star-fill" /></a>
            <a href><i className="ri-star-fill" /></a>
          </div>
        </div>
        <div className="heart">
          <i className="ri-heart-fill" />
        </div>
      </div>
      <div className="box">
        <div className="box-img">
          <img src="../img/https___hypebeast.com_image_2020_09_fragment-design-air-jordan-3-retro-sp-official-look-release-info-da3595-100-1.png" alt width="10px" />
        </div>
        <h3>Jordan retro 3 fragmet</h3>
        <h4>Nuevo articulo 2023</h4>
        <div className="inbox">
          <div>
            <a href className="price">$150.000</a>
          </div>
          <div className="rating">
            <a href><i className="ri-star-fill" /></a>
            <a href><i className="ri-star-fill" /></a>
            <a href><i className="ri-star-fill" /></a>
            <a href><i className="ri-star-fill" /></a>
            <a href><i className="ri-star-fill" /></a>
          </div>
        </div>
        <div className="heart">
          <i className="ri-heart-fill" />
        </div>
      </div>
    </div>
  </section>
  {/*cta sección design*/}
  <section className="cta-content">
    <div className="cta">
      <div className="cta-text">
        <a href className="logo"><img src="../img/logo.png" alt /></a>
        <h3>Especialistas en Estilo a Tus Pies</h3>
        <p>Flow Violento en Cada Paso, Calidad en Cada Huella</p>
        <a href className="row-btn">Descubrir más</a>
      </div>
    </div>
  </section>
  {/* sección contactos design*/}
  <section className="contact">
    <div className="main-contact">
      <div className="contact-content">
        <h5>Contactanos</h5>
        <li><a href>Whatsapp</a></li>
        <li><a href>Facebook</a></li>
        <li><a href>Instagram</a></li>
      </div>
      <div className="contact-content">
        <h5>Explorar</h5>
        <li><a href>Inventario</a></li>
        <li><a href>Estadisticas</a></li>
        <li><a href>Informes</a></li>
        <li><a href>Seguridad</a></li>
      </div>
      <div className="contact-content">
        <h5>Recursos</h5>
        <li><a href>Mejores prácticas</a></li>
        <li><a href>Soporte</a></li>
        <li><a href>Desarrolladores</a></li>
        <li><a href>Aprender diseño</a></li>
      </div>
      <div className="contact-content">
        <h5>Comunidad</h5>
        <li><a href>Foro de discusion</a></li>
        <li><a href>Código de conducta</a></li>
        <li><a href>Contribuyendo</a></li>
        <li><a href>Referencias API</a></li>
      </div>
    </div>
  </section>
  <div className="end-text">
    <p> © 2023 Todos los derechos reservados por Fenix ​​Technology</p>
  </div>
  <div className="scroll-down-container">
    <div className="scroll-down">
      <a href="#"><i className="ri-arrow-up-s-fill" /></a>
    </div>
  </div>
  {/*scrollreveal effect*/}
  {/* custom Js link*/}
</div>


  );
};

export default Home;
