import React from 'react';
import { Award } from 'lucide-react';

const Hero = () => {
  return (
    <div className="position-relative" style={{ marginTop: '76px', height: '100vh', overflow: 'hidden' }}>
      <div className="position-absolute w-100 h-100" style={{ 
        background: 'linear-gradient(135deg, rgba(220,38,38,0.7) 0%, rgba(234,88,12,0.6) 100%)',
        zIndex: 1
      }}></div>
      <img 
        src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600" 
        alt="Norte del Perú" 
        className="position-absolute w-100 h-100"
        style={{ zIndex: 0, objectFit: 'cover' }}
      />
      <div className="position-relative h-100 d-flex align-items-center justify-content-center text-white text-center px-3" style={{ zIndex: 2 }}>
        <div style={{ maxWidth: '900px' }}>
          <h1 className="display-1 fw-bold mb-4" style={{ textShadow: '3px 3px 15px rgba(0,0,0,0.8)' }}>
            Descubre el Norte del Perú
          </h1>
          <p className="fs-3 mb-5" style={{ textShadow: '2px 2px 10px rgba(0,0,0,0.8)' }}>
            Playas paradisíacas, historia milenaria y gastronomía única
          </p>
          <div className="d-inline-block bg-white text-dark px-5 py-3 rounded shadow-lg">
            <Award className="d-inline me-2" size={28} />
            <span className="fw-bold fs-5">Mejor Tour Operador 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;