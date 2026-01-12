import React from 'react';
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-4">
            <h5 className="fw-bold mb-3" style={{ color: '#fbbf24' }}>Norte Perú Tours</h5>
            <p className="text-white-50">Tu mejor opción para descubrir el norte peruano.</p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white"><Facebook size={24} /></a>
              <a href="#" className="text-white"><Instagram size={24} /></a>
              <a href="#" className="text-white"><Twitter size={24} /></a>
            </div>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold mb-3" style={{ color: '#fbbf24' }}>Enlaces</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Destinos</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Paquetes</a></li>
              <li className="mb-2"><a href="#" className="text-white-50 text-decoration-none">Sobre Nosotros</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5 className="fw-bold mb-3" style={{ color: '#fbbf24' }}>Contacto</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><Phone size={18} className="me-2" />+51 999 888 777</li>
              <li className="mb-2"><Mail size={18} className="me-2" />info@norteperutours.com</li>
              <li className="mb-2"><MapPin size={18} className="me-2" />Piura, Perú</li>
            </ul>
          </div>
        </div>
        <hr className="my-4 bg-secondary" />
        <div className="text-center text-white-50">
          <p className="mb-0">© 2025 Norte Perú Tours</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;