import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';

const HistorySection = styled(animated.section)`
  background-color: #DCF1F8;
  color: #333;
  padding: 50px 20px;
  margin-top: 5%;
  opacity: 0;
  transform: translateY(50px);

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const HistoryContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
  }
`;

const Title = styled.h2`
  color: #3832D3;
  font-size: 36px;
  margin-bottom: 20px; 
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Text = styled.p`
  font-size: 20px;
  line-height: 1.6;
  font-weight: bold;
  text-align: justify;
  margin-bottom: 15px;
  color: #73C4E2;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const History = () => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  const animation = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? 'translateY(0px)' : 'translateY(50px)',
    config: { tension: 120, friction: 14 },
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1, // Dispara cuando el 10% de la sección es visible
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <HistorySection ref={ref} style={animation}>
      <HistoryContent>
        <Title>Nuestra historia</Title>
        <Text>
          Nos establecimos en 2016 para impulsar activamente programas y herramientas de asistencia
          empresarial. Desde entonces, hemos colaborado con diversas organizaciones, estableciendo
          acuerdos con más de 100 cámaras de la provincia de Córdoba. También cooperamos con ADEC e
          impulsamos la creación de la Red de Cámaras Pyme.
        </Text>
        <Text>
          Al mismo tiempo, trabajamos activamente en la elaboración e implementación de políticas
          gubernamentales para las empresas a nivel nacional, provincial y municipal, y durante la
          pandemia, proporcionamos apoyo para afrontar la difícil situación. Nuestras conexiones y
          trayectoria de gestión nos dio la oportunidad de asociarnos con gobiernos, bancos y entidades
          que impulsan programas y herramientas para las organizaciones.
        </Text>
        <Text>
          Gracias a la permanente recopilación de información específica, y de la suscripción de las pymes
          de distintos sectores, regiones y características a la plataforma, facilitamos el encuentro entre la
          oferta y la demanda de apoyo, promoviendo el intercambio y ofreciendo feedback sobre los
          programas y herramientas publicados en el directorio.
        </Text>
      </HistoryContent>
    </HistorySection>
  );
};

export default History;
