import React from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import bannerImage from '../../assets/images/banner_image.jpg';
import './Banner.css';

const BannerSection = styled.section`
  position: relative;
  color: #fff;
  padding: 100px 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url(${bannerImage});
    background-size: cover;
    background-position: center;
    z-index: -2;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 50px 20px;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  text-align: center;
`;

const StatRow = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StatCol = styled.div`
  flex: 1;
  margin: 20px;
  min-width: 250px;
  background-color: rgba(115, 197, 227, 0.6);
  padding: 20px;
  border-radius: 10px;

  h3 {
    font-size: 24px;

    @media (max-width: 768px) {
      font-size: 20px;
    }
  }

  .icon {
    font-size: 48px;
    margin-bottom: 10px;
    color: #fff;
  }
`;

const Banner = () => {
  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { tension: 120, friction: 14 },
  });

  return (
    <BannerSection>
      <Container>
        <animated.h1 style={fadeIn}>La relevancia de las <strong className="miPymes-title">MiPyMEs</strong> en Argentina</animated.h1>
        <StatRow>
          <StatCol>
            <i className="bi bi-building icon"></i>
            <animated.h3 style={fadeIn}>En Argentina hay <strong>609.394</strong> empresas.</animated.h3>
          </StatCol>
          
          <StatCol>
            <i className="bi bi-people icon"></i>
            <animated.h3 style={fadeIn}>El <strong>99,24%</strong> son Micro, Pequeñas o Medianas.</animated.h3>
          </StatCol>
          <StatCol>
            <i className="bi bi-person-check icon"></i>
            <animated.h3 style={fadeIn}>El <strong>64,7%</strong> de la población ocupada trabaja en MiPyMEs.</animated.h3>
          </StatCol>
        </StatRow>
      </Container>
    </BannerSection>
  );
};

export default Banner;
