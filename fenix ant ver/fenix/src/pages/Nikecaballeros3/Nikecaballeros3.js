import React from 'react';
import { Link } from 'react-router-dom';

const Nikecaballeros3 = () => {
  return (
    <div>
      <div style={topButtonContainer}>
        <button style={topButtonStyle}>
          <Link to="/Inventariojefeprincipal">Volver Atrás</Link>
        </button>
      </div>
      <h1>Nike Hombres VAPORWAFFLE SACAI - Sport Fuchsia</h1>
      <div style={centeredText}>
        <p>Nike Hombres VAPORWAFFLE SACAI - Sport Fuchsia</p>
      </div>
      <div style={additionalInfoContainer}>
      </div>
      <div style={imageContainer}>
        <div>
          <img src="../img/caballeros/nike/Nike Hombres VAPORWAFFLE SACAI - Sport Fuchsia/abajo.jpeg" alt="" style={imageStyle} />
          <img src="../img/caballeros/nike/Nike Hombres VAPORWAFFLE SACAI - Sport Fuchsia/hacia atras mostrando parte derecha.jpeg" style={imageStyle} />
          <img src="../img/caballeros/nike/Nike Hombres VAPORWAFFLE SACAI - Sport Fuchsia/lado izquierdo.jpeg" style={imageStyle} />
        </div>
        <div style={textBesideImage}>
          <p>$700.000</p>
          <p>Color</p>
          <p>Escoge una opción</p>
          <p>Talla</p>
          <p>Escoge una opción</p>
          <div>
            <h2>Descripción</h2>
            <p>Rendimiento de Élite: Las Nike VAPORWAFFLE SACAI están diseñadas para ofrecer un rendimiento excepcional, ya sea que las utiliza para correr o simplemente para destacar en la calle.</p>
          </div>
        </div>
      </div>
      <div style={relatedProductsContainer}>
        <h2>Productos Relacionados</h2>
        <div style={horizontalProductsContainer}>
          <div style={product}>
            <img src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1025&q=80" alt="Nike - Roshe Run" style={productImageStyle} />
            <p>Nike - Roshe Run</p>
            <p>Footwear, Sneakers</p>
            <p>$85.00</p>
          </div>
          <div style={product}>
            <img src="https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1131&q=80" style={productImageStyle} />
            <p>Common Projects Achilles</p>
            <p>Footwear, Sneakers</p>
            <p>$255.00</p>
          </div>
          <div style={product}>
            <img src="https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" style={productImageStyle} />
            <p>Adidas - Boston Super OG</p>
            <p>Footwear, Sneakers</p>
            <p>$105.00</p>
          </div>
          <div style={product}>
            <img src="https://images.unsplash.com/photo-1617606002779-51d866bdd1d1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"  style={productImageStyle} />
            <p>Common Projects Achilles</p>
            <p>Footwear, Sneakers</p>
            <p>$250.00</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nikecaballeros3;

const centeredText = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '50vh', // Ajusta la altura según sea necesario
};

const topButtonContainer = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  zIndex: 999,
};

const topButtonStyle = {
  padding: '10px 20px',
  background: '#fff',
  border: '1px solid #000',
};

const additionalInfoContainer = {
  marginTop: '20px', // Ajusta el margen superior según sea necesario
};

const imageContainer = {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px', // Ajusta el margen superior según sea necesario
};

const imageStyle = {
  width: '200px', // Ajusta el tamaño de la imagen según sea necesario
  margin: '0 10px', // Ajusta el margen entre las imágenes según sea necesario
};

const textBesideImage = {
  marginLeft: '20px', // Ajusta el margen izquierdo según sea necesario
};

const relatedProductsContainer = {
  marginTop: '20px',
};

const horizontalProductsContainer = {
  display: 'flex',
  justifyContent: 'center',
};

const product = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '0 10px',
};

const productImageStyle = {
  width: '150px',
  marginBottom: '10px',
};