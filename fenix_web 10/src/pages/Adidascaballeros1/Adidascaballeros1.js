import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

const ProductName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const ProductPrice = styled.p`
  font-size: 18px;
`;

const AddToCartButton = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
`;

const Description = styled.p`
  font-size: 16px;
  margin-top: 20px;
`;

const Specifications = styled.ul`
  list-style-type: none;
  margin-top: 20px;
`;

const SpecificationItem = styled.li`
  font-size: 16px;
`;

const CarouselSlide = styled.img`
  max-width: 100%;
`;

const Adidascaballeros1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container>
      <Slider {...settings}>
        <CarouselSlide src="../img/caballeros/adidas/adidas beyaz erkek spr ayakkab/lado izquierdo.jpeg" alt="Product 1" />
        <CarouselSlide src="../img/caballeros/adidas/Adidas Forum Low White Sneakers/lado derecho.png" alt="Product 2" />
        <CarouselSlide src="../img/caballeros/adidas/adidas neo Grand Court '' Grey Three/lado derecho.png" alt="Product 3" />
      </Slider>
      <ProductInfo>
        <ProductName>Nombre del Producto</ProductName>
        <ProductPrice>$99.99</ProductPrice>
        <AddToCartButton>Agregar Zapatilla</AddToCartButton>
        <Description>
          Esta es la descripción del producto. Aquí puedes agregar detalles
          sobre el mismo.
        </Description>
        <Specifications>
          <SpecificationItem>Especificación 1: Valor</SpecificationItem>
          <SpecificationItem>Especificación 2: Valor</SpecificationItem>
          <SpecificationItem>Especificación 3: Valor</SpecificationItem>
        </Specifications>
      </ProductInfo>
    </Container>
  );
};

export default Adidascaballeros1;