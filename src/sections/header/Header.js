import React, { useState } from 'react';
import './Header.css';
import logoMPM from '../../assets/images/logoMPM.png';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container d-flex justify-content-between align-items-center">
        <img src={logoMPM} alt="Cámara Pyme" className="header-logo" />
        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <a href="#nosotros">Nosotros</a>
          <a href="#socios">Socios</a>
          <a href="#servicios">Servicios</a>
          <a href="#novedades">Novedades</a>
          <a href="#contacto">Contacto</a>
        </nav>
        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </header>
  );
};

export default Header;
