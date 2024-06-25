import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import './AdidasCaballeros2.css';

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


const AdidasCaballeros2 = () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(100);
  const [price, setPrice] = useState(150.000); // Precio inicial
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isSpecificationsExpanded, setIsSpecificationsExpanded] = useState(false);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    // Aquí podrías agregar lógica para cambiar el precio según la talla seleccionada
    // Por simplicidad, aquí solo establezco un precio fijo
    setPrice(150.000);
  };

  const handleDescriptionToggle = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const handleSpecificationsToggle = () => {
    setIsSpecificationsExpanded(!isSpecificationsExpanded);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '30px', textAlign: 'center', fontSize: '28px' }}>Adidas Caballeros</h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
        <div style={{ marginRight: '60px', width: '800px' }}>
          <Link to="/adidascaballerosb" style={{ position: 'absolute', top: '20px', left: '20px', textDecoration: 'none', color: 'black', fontSize: '18px', border: '1px solid #ccc', padding: '5px 10px', borderRadius: '5px' }}>Volver atrás</Link>
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
              <img src="../img/caballeros/adidas/Tarjeta 2/lado 1 .png"  alt="Imagen 1" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div>
              <img src="../img/caballeros/adidas/Tarjeta 2/lado 2 .png" alt="Imagen 2" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div>
              <img src="../img/caballeros/adidas/Tarjeta 2/lado 3.png" alt="Imagen 3" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div>
              <img src="../img/caballeros/adidas/Tarjeta 2/lado 4.png"alt="Imagen 4" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </Carousel>
        </div>
        <div className="details">
          <h2 className="product-title">TENIS FORUM LOW</h2>
          <p><strong>Precio:</strong> ${price.toFixed(2)}</p>
          <div className="size-buttons">
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
          <div style={{ marginTop: '20px', cursor: 'pointer' }} onClick={handleDescriptionToggle}>
            <h3 style={{ textDecoration: 'underline', marginBottom: '5px' }}>Descripción</h3>
            {isDescriptionExpanded && (
              <p> Los adidas Forum llegaron a la escena en el 84 y ganaron seguidores en la cancha y en el mundo de la música. Este par de tenis clásicos trae de vuelta la actitud de los 80, la energía explosiva del baloncesto y el icónico diseño de tobillo en X, </p>
            )}
          </div>
          <div style={{ marginTop: '20px', cursor: 'pointer' }} onClick={handleSpecificationsToggle}>
            <h3 style={{ textDecoration: 'underline', marginBottom: '5px' }}>Especificaciones</h3>
            {isSpecificationsExpanded && (
              <ul>
           
                <li> <strong>Sistema de amarre de cordones con tira ajustable</strong></li>
                <li> <strong>Material exterior:</strong>  En cuero</li>
                <li> <strong>Material de la suela:</strong> Caucho</li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdidasCaballeros2;

