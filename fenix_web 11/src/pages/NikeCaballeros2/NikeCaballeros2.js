import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './NikeCaballeros2.css';

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

const LocalCard = ({ localName, isSelected, handleLocalSelect }) => {
  return (
    <div className={`local-card ${isSelected ? 'selected' : ''}`} onClick={() => handleLocalSelect(localName)}>
      <p className="local-name">{localName}</p>
    </div>
  );
};

const NikeCaballeros2= () => {
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(120.000); // Precio inicial
  const [selectedLocal, setSelectedLocal] = useState('');
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);
  const [isSpecificationsExpanded, setIsSpecificationsExpanded] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
    // Aquí podrías agregar lógica para cambiar el precio según la talla seleccionada
    // Por simplicidad, aquí solo establezco un precio fijo
    setPrice(59.99);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Por favor selecciona una talla.");
      return;
    }
    if (!selectedLocal) {
      alert("Por favor selecciona un local.");
      return;
    }
    alert(`Agregado al carrito:\nProducto: Adidas Forum Blanca con Rosado\nTalla: ${selectedSize}\nCantidad: ${quantity}\nPrecio: $${price.toFixed(2)}\nLocal: ${selectedLocal}`);
  };

  const handleLocalSelect = (localName) => {
    setSelectedLocal(localName);
  };

  const handleDescriptionToggle = () => {
    setIsDescriptionExpanded(!isDescriptionExpanded);
  };

  const handleSpecificationsToggle = () => {
    setIsSpecificationsExpanded(!isSpecificationsExpanded);
  };

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '30px', textAlign: 'center', fontSize: '28px' }}>Catálogo de Adidas para Damas</h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
        <div style={{ marginRight: '60px', width: '800px' }}>
          <Link to="/adidasdamasb" style={{ position: 'absolute', top: '20px', left: '20px', textDecoration: 'none', color: 'black', fontSize: '18px', border: '1px solid #ccc', padding: '5px 10px', borderRadius: '5px' }}>Volver atrás</Link>
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
              <img src="../img/damas/adidas/ADIDAS FORUM BLANCA CON ROSADO/atras.jpeg" alt="Imagen 1" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div>
              <img src="../img/adidascaballero1.png" alt="Imagen 2" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div>
              <img src="../img/adidascaballero3.png" alt="Imagen 3" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
            <div>
              <img src="../img/adidascaballero4.png" alt="Imagen 4" style={{ maxWidth: '100%', height: 'auto' }} />
            </div>
          </Carousel>
        </div>
        <div className="details">
          <h2 className="product-title">Adidas Forum Blanca con Rosado</h2>
          <p><strong>Precio:</strong> ${price.toFixed(2)}</p>
          <div className="size-buttons">
            <p><strong>Tallas disponibles:</strong></p>
            {['36', '37', '38', '39', '40'].map(size => (
              <SizeButton
                key={size}
                size={size}
                selectedSize={selectedSize}
                handleSizeSelect={handleSizeSelect}
              />
            ))}
          </div>
          <div className="quantity-container">
            <label><strong>Cantidad:</strong></label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={handleQuantityChange}
              className="quantity-input"
            />
          </div>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button onClick={handleAddToCart} className="add-to-cart-button" style={{ marginRight: '10px' }}>
              Agregar al carrito
            </button>
            <button onClick={handleFavoriteToggle} className="favorite-button">
              <FontAwesomeIcon icon={faHeart} style={{ color: isFavorite ? 'red' : 'black', fontSize: '20px' }} />
            </button>
          </div>
          <div style={{ marginTop: '20px', cursor: 'pointer' }} onClick={handleDescriptionToggle}>
            <h3 style={{ textDecoration: 'underline', marginBottom: '5px' }}>Descripción</h3>
            {isDescriptionExpanded && (
              <p>Zapatillas deportivas Adidas Forum de color blanco con detalles en rosa. Ideales para uso casual y deportivo.</p>
            )}
          </div>
          <div style={{ marginTop: '20px', cursor: 'pointer' }} onClick={handleSpecificationsToggle}>
            <h3 style={{ textDecoration: 'underline', marginBottom: '5px' }}>Especificaciones</h3>
            {isSpecificationsExpanded && (
              <ul>
                <li>Color: Blanco y rosa</li>
                <li>Género: Mujer</li>
                <li>Material exterior: Cuero sintético</li>
                <li>Suela: Caucho</li>
              </ul>
            )}
          </div>
          <p><strong>Locales disponibles:</strong></p>
          <div className="local-cards">
            <LocalCard localName="Local 1" isSelected={selectedLocal === 'Local 1'} handleLocalSelect={handleLocalSelect} />
            <LocalCard localName="Local 2" isSelected={selectedLocal === 'Local 2'} handleLocalSelect={handleLocalSelect} />
            <LocalCard localName="Local 3" isSelected={selectedLocal === 'Local 3'} handleLocalSelect={handleLocalSelect} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NikeCaballeros2;

