import React from 'react';
import Header from './sections/header/Header';
import Banner from './sections/banner/Banner';
import Footer from './sections/footer/Footer';
import History from './sections/historySection/History';
import Video from './sections/videoSection/Video';
import MissionVision from './sections/missionVision/MissionVision';
import LargeImageSection from './sections/largeImageSection/LargeImageSection';
import Carousel from './sections/carousel/Carousel';
import MundoPymeSection from './sections/mundoPymeSection/MundoPymeSection';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


function App() {
  return (
    <div>
      <Header/>
      <Banner/>
      <History/>
      <Video/>
      <MissionVision/>
      <LargeImageSection/>
      <Carousel/>
      <MundoPymeSection/>
      <Footer/>
    </div>
  );
}

export default App;
