import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PackageCard from './components/PackageCard';
import Footer from './components/Footer';

function App() {

  const [paquetes, setPaquetes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/paquetes")
      .then(res => {
        if (!res.ok) {
          throw new Error("Error en la respuesta del servidor");
        }
        return res.json();
      })
      .then(data => {
        setPaquetes(data);
        setLoading(false);   // ← AQUÍ EL ARREGLO
      })
      .catch(err => {
        console.error("Error cargando paquetes:", err);
        setLoading(false);   // ← IMPORTANTE TAMBIÉN
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        <div className="spinner-border text-danger" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <Hero />

      <div className="py-5 bg-white" id="paquetes">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold mb-3" style={{ color: '#dc2626' }}>
              Paquetes Turísticos
            </h2>
            <p className="fs-5 text-muted">Descubre nuestras mejores ofertas</p>
          </div>

          <div className="row">
            {paquetes.map((paquete) => (
              <PackageCard key={paquete.id} paquete={paquete} />
            ))}
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
