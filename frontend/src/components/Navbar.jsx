import React from 'react';
import { Sun } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ 
      background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)', 
      boxShadow: '0 2px 20px rgba(0,0,0,0.3)' 
    }}>
      <div className="container-fluid px-4">
        <a className="navbar-brand d-flex align-items-center fw-bold fs-3" href="#" style={{ letterSpacing: '2px' }}>
          <Sun className="me-2" size={32} />
          NORTE PERÚ TOURS
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav gap-4">
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#destinos">Destinos</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#paquetes">Paquetes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#experiencias">Experiencias</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white fw-semibold" href="#contacto">Contacto</a>
            </li>
          </ul>
          <button className="btn btn-light ms-4 px-4 fw-bold">RESERVAR</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;