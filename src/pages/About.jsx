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
                <span className="highlight">Desarrollador Full Stack</span> con
                más de 3 años de experiencia en la creación de soluciones
                tecnológicas innovadoras.
              </p>
              <p>
                Especializado en{" "}
                <span className="highlight">JavaScript/TypeScript</span>,{" "}
                <span className="highlight">Node.js</span> y{" "}
                <span className="highlight">React</span>, con sólidos
                conocimientos en diseño de bases de datos y arquitectura de
                software.
              </p>
              <p>
                Mi enfoque combina eficiencia técnica con diseño intuitivo,
                siempre buscando implementar las mejores prácticas y tecnologías
                emergentes.
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="stat-value">50+</div>
                  <div className="stat-label">Proyectos completados</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">10+</div>
                  <div className="stat-label">Tecnologías dominadas</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">100%</div>
                  <div className="stat-label">Compromiso</div>
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
