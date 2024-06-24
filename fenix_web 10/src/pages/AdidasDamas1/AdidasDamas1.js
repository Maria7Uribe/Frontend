import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const AdidasDamas1 = () => {
  const [selectedSize, setSelectedSize] = useState('');

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ marginBottom: '30px', textAlign: 'center', fontSize: '28px' }}>Catálogo de Adidas para Damas</h1>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '50px' }}>
        <div style={{ marginRight: '60px' }}>
          <Link to="/adidasdamasb" style={{ position: 'absolute', top: '20px', left: '20px', textDecoration: 'none', color: 'black', fontSize: '18px' }}>Volver atrás</Link>
          <div style={{ display: 'flex', marginBottom: '40px' }}>
            <img src="../img/damas/adidas/ADIDAS FORUM BLANCA CON ROSADO/atras.jpeg" alt="Imagen 1" style={{ width: '250px', height: '250px', marginRight: '20px' }} />
            <img src="../img/adidascaballero1.png" alt="Imagen 2" style={{ width: '250px', height: '250px' }} />
          </div>
          <div style={{ display: 'flex' }}>
            <img src="../img/adidascaballero3.png" alt="Imagen 3" style={{ width: '250px', height: '250px', marginRight: '20px' }} />
            <img src="../img/adidascaballero4.png" alt="Imagen 4" style={{ width: '250px', height: '250px' }} />
          </div>
        </div>
        <div style={{ marginBottom: '50px', display: 'flex', flexDirection: 'row' }}>
          <div style={{ marginRight: '40px' }}>
            <h2 style={{ fontSize: '24px' }}>Adidas Forum Blanca con Rosado</h2>
            <p style={{ marginBottom: '10px' }}><strong>Tallas disponibles:</strong></p>
            <div style={{ display: 'flex', marginBottom: '20px' }}>
              <button style={{ marginRight: '15px', fontSize: '18px', backgroundColor: selectedSize === '36' ? 'blue' : 'transparent', color: selectedSize === '36' ? 'white' : 'black' }} onClick={() => handleSizeSelect('36')}>36</button>
              <button style={{ marginRight: '15px', fontSize: '18px', backgroundColor: selectedSize === '37' ? 'blue' : 'transparent', color: selectedSize === '37' ? 'white' : 'black' }} onClick={() => handleSizeSelect('37')}>37</button>
              <button style={{ marginRight: '15px', fontSize: '18px', backgroundColor: selectedSize === '38' ? 'blue' : 'transparent', color: selectedSize === '38' ? 'white' : 'black' }} onClick={() => handleSizeSelect('38')}>38</button>
              <button style={{ marginRight: '15px', fontSize: '18px', backgroundColor: selectedSize === '39' ? 'blue' : 'transparent', color: selectedSize === '39' ? 'white' : 'black' }} onClick={() => handleSizeSelect('39')}>39</button>
              <button style={{ fontSize: '18px', backgroundColor: selectedSize === '40' ? 'blue' : 'transparent', color: selectedSize === '40' ? 'white' : 'black' }} onClick={() => handleSizeSelect('40')}>40</button>
            </div>
            <p><strong>Descripción:</strong></p>
            <p>Zapatillas deportivas Adidas Forum de color blanco con detalles en rosa. Ideales para uso casual y deportivo.</p>
            <p><strong>Especificaciones:</strong></p>
            <ul style={{ marginTop: '10px', paddingLeft: '20px' }}>
              <li>Color: Blanco y rosa</li>
              <li>Género: Mujer</li>
              <li>Material exterior: Cuero sintético</li>
              <li>Suela: Caucho</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdidasDamas1;
