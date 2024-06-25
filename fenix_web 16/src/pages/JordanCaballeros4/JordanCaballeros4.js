import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './JordanCaballeros4.css';

const SizeButton = ({ size, selectedSize, handleSizeSelect }) => {
  return (
    <button
      className={`size-button ${selectedSize === size ? 'selected' : ''}`}
      onClick={() => handleSizeSelect(size)}
    >
      {size}
    </button>
  );
};


const JordanCaballeros4= () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(100);
  const [price, setPrice] = useState(350.00); // Precio inicial

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    setPrice(59.99);
  };


  return (
    <div className="container">
      <h1 className="title">Jordan Caballeros</h1>
      <div className="content">
        <div className="carousel-container">
          <Link to="/jordancaballerosb" className="back-link">Volver atrás</Link>
          <Carousel 
            showArrows={true} 
            dynamicHeight={true} 
            infiniteLoop={true} 
            useKeyboardArrows={true} 
            autoPlay={true} 
            interval={3000}
            showThumbs={false}
          >
            <div>
              <img src="../img/caballeros/Jordan/Tarjeta 4/lado 1.png"   alt="Imagen 1" className="carousel-image" />
            </div>
            <div>
              <img src="../img/caballeros/Jordan/Tarjeta 4/lado 2.png" alt="Imagen 2" className="carousel-image" />
            </div>
            <div>
              <img src="../img/caballeros/Jordan/Tarjeta 4/lado 3.png" alt="Imagen 3" className="carousel-image" />
            </div>

          </Carousel>
        </div>
        <div className="details">
          <h2 className="product-title">Air Jordan 1 Element</h2>
          <p><strong>Precio:</strong> ${price.toFixed(2)}</p>
          <div className="size-container">
            <p><strong>Tallas disponibles:</strong></p>
            <div className="size-buttons">
              {['36', '37', '38', '39', '40'].map(size => (
                <SizeButton
                  key={size}
                  size={size}
                  selectedSize={selectedSize}
                  handleSizeSelect={handleSizeSelect}
                />
              ))}
            </div>
          </div>
          <div className="quantity-container">
            <label><strong>Cantidad:</strong></label>{quantity}
          </div>
          <div className="description">
            <h3 className="description-title">Descripción</h3>
            <p className="description-content">Cuentan con la gran herencia icónica del básquetbol, mejoran tu estilo con material GORE-TEX y revestimientos suaves de cuero de nobuk. El Swoosh con diseño reflejante brilla a lo largo de los laterales. </p>
          </div>
          <div className="specifications">
            <h3 className="specifications-title">Especificaciones</h3>
            <ul className="specifications-content">
            <li> <strong>Entresuela de espuma</strong></li>
                <li> <strong>Punta perforada</strong> </li>
                <li> <strong>Swoosh con diseño reflejante</strong> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JordanCaballeros4;

