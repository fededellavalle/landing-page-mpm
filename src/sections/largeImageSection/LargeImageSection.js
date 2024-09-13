import React from 'react';
import styled from 'styled-components';
import LargeImage from '../../assets/images/group-photo.png';

const ImageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const LargeImageSection = () => {
  return (
    <ImageContainer>
      <Image src={LargeImage} alt="Large Section Image" />
    </ImageContainer>
  );
};

export default LargeImageSection;
