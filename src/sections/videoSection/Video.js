import React from 'react';
import styled from 'styled-components';

const VideoSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  background-color: #fff;

  @media (max-width: 768px) {
    padding: 30px 15px;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  padding: 20px;
  background-color: #73C4E2;
  border-radius: 10px;
  overflow: hidden;

  iframe {
    width: 560px;
    height: 315px;
    border: none;
    border-radius: 10px;

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }
`;

const Video = () => {
  return (
    <VideoSection>
      <VideoWrapper>
        <iframe
          src="https://www.youtube.com/embed/sgXmHceIBfY?si=mG8XjZm1WyxlP7o_"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen className="video-yt"
        ></iframe>
      </VideoWrapper>
    </VideoSection>
  );
};

export default Video;
