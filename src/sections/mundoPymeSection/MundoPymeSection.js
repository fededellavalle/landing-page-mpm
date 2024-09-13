import React from 'react';
import './MundoPymeSection.css';
import logoMundoPyme from '../../assets/images/camara-pyme-logo.png';

const MundoPymeSection = () => {
  return (
    <section className="mundo-pyme-section py-5">
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center main-container">
        <div className="mundo-pyme-text p-4">
          <p>
            La plataforma, gratuita y de consulta personalizada, asegura el acceso oportuno y preciso a información sobre programas, beneficios y herramientas de apoyo para las micro, pequeñas y medianas empresas así como emprendedores, facilitando su interacción con entidades públicas y privadas.
          </p>
          <p className="font-weight-bold">
            Fue financiada con recursos propios y del Fondo de Competitividad administrado por la <span className="font-weight-bold">ADEC</span>.
          </p>
        </div>
        <div className="mundo-pyme-logo text-center">
          <img src={logoMundoPyme} alt="Mundo Pyme" className="img-fluid mb-3" style={{ maxWidth: '200px' }} />
          <a href="https://app.camarapyme.org.ar/" className="btn btn-primary">IR A LA PLATAFORMA</a>
        </div>
      </div>
    </section>
  );
};

export default MundoPymeSection;
