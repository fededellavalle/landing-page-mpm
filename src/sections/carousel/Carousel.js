import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import Socio1 from '../../assets/images/socios/socio1.png';
import Socio2 from '../../assets/images/socios/socio2.png';
import Socio3 from '../../assets/images/socios/socio3.png';
import Socio4 from '../../assets/images/socios/socio4.png';
import Socio5 from '../../assets/images/socios/socio5.png';
import Socio6 from '../../assets/images/socios/socio6.png';
import Socio7 from '../../assets/images/socios/socio7.png';
import Socio8 from '../../assets/images/socios/socio8.png';
import Socio9 from '../../assets/images/socios/socio9.png';
import Socio10 from '../../assets/images/socios/socio10.png';
import Socio11 from '../../assets/images/socios/socio11.png';
import Socio12 from '../../assets/images/socios/socio12.png';

const CarouselContainer = styled.div`
  width: 100%;
  padding: 50px 100px;
  background-color: #e0f7fa;
  text-align: center;


  .slick-slide > div {
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    padding: 50px 30px;
  }

  .slick-prev:before,
  .slick-next:before {
    color: #72C5E2;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  color: #3832D3;
  font-weight: bold;
  margin-bottom: 30px;
`;

const Card = styled.div`
  padding: 20px;
  background-color: #BCE3F2;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: -webkit-center;
  height: 300px;
  box-sizing: border-box;
`;

const Logo = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 20px;
  object-fit: contain;
`;

const Description = styled.p`
  font-size: 16px;
  color: #333;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
`;

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 5000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Carousel = () => {
  return (
    <CarouselContainer>
      <Title>SOCIOS</Title>
      <Slider {...settings}>
      <Card>
        <Logo src={Socio1} alt="Socio 1" />
        <Description>Coca-Cola: Líder mundial en la industria de bebidas, reconocida por su icónica bebida gaseosa y su enfoque en la sostenibilidad y la innovación.</Description>
      </Card>
      <Card>
        <Logo src={Socio2} alt="Socio 2" />
        <Description>Coca Company: Compañía global de bebidas con un portafolio diverso que incluye refrescos, jugos, y bebidas energéticas.</Description>
      </Card>
      <Card>
        <Logo src={Socio3} alt="Socio 3" />
        <Description>PepsiCo: Multinacional de alimentos y bebidas, famosa por sus marcas como Pepsi, Lay's, y Gatorade.</Description>
      </Card>
      <Card>
        <Logo src={Socio4} alt="Socio 4" />
        <Description>Nestlé: Empresa líder en alimentos y bebidas, con un enfoque en la nutrición, salud y bienestar.</Description>
      </Card>
      <Card>
        <Logo src={Socio5} alt="Socio 5" />
        <Description>Unilever: Multinacional que produce una amplia gama de productos de consumo, incluyendo alimentos, bebidas, productos de limpieza y cuidado personal.</Description>
      </Card>
      <Card>
        <Logo src={Socio6} alt="Socio 6" />
        <Description>Danone: Empresa global enfocada en productos lácteos, nutrición infantil y aguas embotelladas.</Description>
      </Card>
      <Card>
        <Logo src={Socio7} alt="Socio 7" />
        <Description>Heineken: Una de las cerveceras más grandes del mundo, conocida por su cerveza de calidad y presencia internacional.</Description>
      </Card>
      <Card>
        <Logo src={Socio8} alt="Socio 8" />
        <Description>Ferrero: Famosa por sus chocolates y productos dulces, incluyendo Nutella, Ferrero Rocher y Kinder.</Description>
      </Card>
      <Card>
        <Logo src={Socio9} alt="Socio 9" />
        <Description>Mars: Empresa líder en alimentos y confitería, conocida por marcas como M&M's, Snickers y Pedigree.</Description>
      </Card>
      <Card>
        <Logo src={Socio10} alt="Socio 10" />
        <Description>Kellogg's: Empresa global de alimentos, famosa por sus cereales y snacks saludables.</Description>
      </Card>
      <Card>
        <Logo src={Socio11} alt="Socio 11" />
        <Description>Mondelez International: Líder en snacks, con marcas reconocidas como Oreo, Cadbury, y Milka.</Description>
      </Card>
      <Card>
        <Logo src={Socio12} alt="Socio 12" />
        <Description>Procter & Gamble: Multinacional enfocada en productos de consumo como detergentes, cuidado personal y productos para el hogar.</Description>
      </Card>

      </Slider>
    </CarouselContainer>
  );
};

export default Carousel;
