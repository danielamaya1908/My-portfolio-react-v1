import React, { useState, useEffect } from "react";
import "../styles/About.css";
import profileImage from "../assets/profile.png"; // Asegúrate de que la ruta sea correcta

function About({ isOpen, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      // Espera a que termine la animación antes de ocultar
      const timer = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!visible) return null;

  return (
    <div className={`about-container ${isOpen ? "open" : ""}`}>
      <div className="about-overlay" onClick={onClose}></div>
      <div className="about-window">
        <button className="about-close" onClick={onClose}>
          &times;
        </button>
        <div className="about-content">
          <h2 className="about-title">SOBRE MÍ</h2>
          <div className="about-grid">
            <div className="about-profile">
              <div className="profile-image">
                <img src={profileImage} alt="Profile" />
              </div>
              <div className="profile-glow"></div>
            </div>
            <div className="about-text">
              <p>
                Soy un{" "}
                <span className="highlight">Desarrollador Senior Full Stack</span> con
                más de 3 años de experiencia liderando equipos de tecnología y creando soluciones
                empresariales innovadoras.
              </p>
              <p>
                Especializado en <span className="highlight">Node.js</span>,{" "}
                <span className="highlight">NestJS</span>,{" "}
                <span className="highlight">React</span> y{" "}
                <span className="highlight">Next.js</span>, con sólidos
                conocimientos en arquitectura backend, bases de datos (PostgreSQL, MongoDB, MySQL) y DevOps.
              </p>
              <p>
                Experto en infraestructura cloud (AWS, Azure, GCP), Kubernetes, Docker, CI/CD, automatizaciones con n8n y Zapier, además de Web3 y Blockchain.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-value">5+</div>
                  <div className="stat-label">Años de experiencia</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">30+</div>
                  <div className="stat-label">Tecnologías</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">125+</div>
                  <div className="stat-label">Profesionales capacitados</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
