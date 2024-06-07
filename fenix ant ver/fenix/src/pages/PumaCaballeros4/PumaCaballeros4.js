import React from 'react';
import { Link } from 'react-router-dom';

const PumaCaballeros4 = () => {
  return (
    <div>
      <div style={topButtonContainer}>
        <button style={topButtonStyle}>
          <Link to="/Inventariojefeprincipal">Volver Atrás</Link>
        </button>
      </div>
      <h1>puma wild rider rollin jr</h1>
      <div style={centeredText}>
        <p>puma wild rider rollin jr</p>
      </div>
      <div style={additionalInfoContainer}>
      </div>
      <div style={imageContainer}>
        <div>
          <img src="../img/caballeros/puma/puma wild rider rollin jr/hacia atras.jpeg" alt="" style={imageStyle} />
          <img src="../img/caballeros/puma/puma wild rider rollin jr/lado frontal.jpeg" style={imageStyle} />
          <img src="../img/caballeros/puma/puma wild rider rollin jr/lado izquierdo.jpeg" style={imageStyle} />
        </div>
        <div style={textBesideImage}>
          <p>$300.000</p>
          <p>Color</p>
          <p>Escoge una opción</p>
          <p>Talla</p>
          <p>Escoge una opción</p>
          <div>
            <h2>Descripción</h2>
            <p>Las zapatillas Puma Wild Rider Rollin Jr son una combinación perfecta de estilo urbano y comodidad sin igual. Diseñadas para los jóvenes aventureros, estas zapatillas presentan un diseño dinámico y moderno que refleja una energía vibrante. La parte superior está confeccionada con materiales de alta calidad que ofrecen durabilidad y transpirabilidad, manteniendo los pies frescos y cómodos durante todo el día. La entresuela suave y acolchada proporciona una amortiguación excepcional, mientras que la suela de caucho ofrece tracción confiable en diversas superficies. Ya sea para actividades diarias o para aventuras urbanas, las Puma Wild Rider Rollin Jr son la elección perfecta para aquellos que buscan un calzado que combine estilo y rendimiento en cada paso que dan</p>
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

export default PumaCaballeros4;

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