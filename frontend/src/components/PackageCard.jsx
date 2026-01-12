import React from 'react';
import { Clock, Star } from 'lucide-react';

const PackageCard = ({ paquete }) => {

  const incluye = paquete.caracteristicas || [];

  return (
    <div className="col-md-4 mb-4">
      <div 
        className="card h-100 border-0 shadow" 
        style={{ borderRadius: '15px', overflow: 'hidden', transition: 'transform 0.3s' }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
      >
        <div style={{ height: '250px', overflow: 'hidden' }}>
          <img 
            src={paquete.imagen} 
            className="card-img-top" 
            alt={paquete.titulo}
            style={{ height: '100%', objectFit: 'cover' }}
          />
        </div>

        <div className="card-body p-4">

          <div className="d-flex justify-content-between align-items-start mb-2">
            <h5 className="card-title fw-bold" style={{ color: '#dc2626' }}>
              {paquete.titulo}
            </h5>

            <span className="badge bg-warning text-dark">
              <Star size={14} className="me-1" fill="currentColor" />
              4.8
            </span>
          </div>

          <p className="card-text text-muted mb-3">
            {paquete.descripcion}
          </p>

          <div className="d-flex align-items-center mb-3 text-muted">
            <Clock size={16} className="me-2" />
            <small>{paquete.duracion}</small>
          </div>

          <div className="mb-3">
            <p className="mb-2 fw-semibold small">Incluye:</p>

            <div className="d-flex flex-wrap gap-1">
              {incluye.map((item, index) => (
                <span key={index} className="badge bg-light text-dark border">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div>
              <small className="text-muted d-block">Desde</small>
              <h4 className="fw-bold mb-0" style={{ color: '#dc2626' }}>
                {paquete.precio}
              </h4>
            </div>

            <button 
              className="btn text-white fw-bold px-4"
              style={{
                background: 'linear-gradient(135deg, #dc2626 0%, #ea580c 100%)',
                border: 'none'
              }}
            >
              Ver Más
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PackageCard;
