import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useInView } from 'react-intersection-observer';
import MisionImage from '../../assets/images/mission.png';
import VisionImage from '../../assets/images/vision.png';

const slideInFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(100%);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromBottom = keyframes`
  0% {
    opacity: 0;
    transform: translateY(100%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MissionVisionSection = styled.section`
  background-color: #fff;
  padding: 50px 20px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 30px 15px;
  }
`;

const AnimatedImage = styled.img`
  max-width: 150px;
  max-height: 150px;
  opacity: 0;
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  ${props => props.inView && css`
    opacity: 1;
    transform: translateX(0);
  `}

  @media (max-width: 768px) {
    max-width: 100px;
    max-height: 100px;
    transform: translateY(50%);
    
    ${props => props.inView && css`
      transform: translateY(0);
      animation: ${slideInFromBottom} 0.8s ease-out forwards;
    `}
  }
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
`;

const TextBlock = styled.div`
  text-align: center;
  font-size: 20px;
  color: #333;
  flex: 1;
  opacity: 0;
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;

  ${props => props.inView && css`
    opacity: 1;
    transform: translateX(0);
  `}

  h3 {
    color: #3832D3;
    font-weight: bold;
  }
  
  p {
    color: #73C4E2;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    text-align: center;
    font-size: 16px;
    max-width: 100%;
    transform: translateY(50%);
    
    ${props => props.inView && css`
      transform: translateY(0);
      animation: ${slideInFromBottom} 0.8s ease-out forwards;
    `}
  }
`;

const Divider = styled.div`
  height: 100px;
  width: 2px;
  background-color: #73C4E2;

  @media (max-width: 768px) {
    height: 2px;
    width: 80%;
  }
`;

const MissionVision = () => {
  const [refMision, inViewMision] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [refVision, inViewVision] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <MissionVisionSection>
      <AnimatedImage 
        ref={refMision} 
        src={MisionImage} 
        alt="Misión" 
        isLeft 
        inView={inViewMision} 
      />
      <TextContainer>
        <TextBlock ref={refMision} isLeft inView={inViewMision}>
          <h3>MISIÓN</h3>
          <p>
            Ser una institución líder en representación del movimiento MiPyME en Argentina, de carácter apartidaria, multisectorial y federal.
          </p>
        </TextBlock>
        <Divider />
        <TextBlock ref={refVision} inView={inViewVision}>
          <h3>VISIÓN</h3>
          <p>
            Contribuir al desarrollo sostenible, fortaleciendo la competitividad, la sustentabilidad y las políticas públicas para las micro, pequeñas y medianas empresas.
          </p>
        </TextBlock>
      </TextContainer>
      <AnimatedImage 
        ref={refVision} 
        src={VisionImage} 
        alt="Visión" 
        inView={inViewVision} 
      />
    </MissionVisionSection>
  );
};

export default MissionVision;
