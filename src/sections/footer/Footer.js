import React from 'react';
import './Footer.css';
import logoMPM from '../../assets/images/logoMPMWhite.png';

const Footer = () => {
  return (
    <footer className="footer text-white">
      <div className="container d-flex justify-content-between align-items-center flex-column flex-md-row">
        <div className="footer-logo text-center mb-4 mb-md-0">
          <img src={logoMPM} alt="Cámara Pyme" className="img-fluid mb-2" style={{ maxWidth: '150px' }} />
          <p className="mb-0">Cámara Argentina de la Micro, Pequeña y Mediana Empresa</p>
        </div>
        <div className="footer-contact text-center text-md-end">
          <p className="mb-0">Tel: 3517433888</p>
          <p className="mb-0">info@mpmarg.com.ar</p>
          <p className="mb-0">www.camarapyme.org.ar</p>
          <hr className="my-2 mx-auto mx-md-0" style={{ borderTop: '1px solid #ffffff', width: '80%' }} />
          <div className="social-icons d-flex justify-content-center justify-content-md-end">
            <a href="https://www.facebook.com/MPMArg/" className="text-white me-3"><i className="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/camaraargentinampm/" className="text-white me-3"><i className="bi bi-instagram"></i></a>
            <a href="#" className="text-white me-3"><i className="bi bi-twitter-x"></i></a>
            <a href="#" className="text-white me-3"><i className="bi bi-youtube"></i></a>
            <a href="#" className="text-white"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
      <div className="text-center mt-4 div-copy">
        <p className="mb-0">&copy; {new Date().getFullYear()} Cámara Argentina de la Micro, Pequeña y Mediana Empresa. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
