import React, { useState, useEffect } from "react";
import "../styles/Education.css";

function Education({ isOpen, onClose }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setVisible(true);
    } else {
      const timer = setTimeout(() => setVisible(false), 500);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!visible) return null;

  const educationData = [
    {
      institution: "Henry Instituto, Argentina",
      degree: "Desarrollador Full Stack",
      status: "Culminado",
    },
    {
      institution: "Sena, Valledupar, Cesar - Colombia",
      degree: "Tecnólogo en Análisis y Desarrollo de Sistemas de Información",
      status: "Culminado",
    },
  ];

  const certificatesData = [
    {
      name: "Lean Six Sigma White Belt - Certiprof",
      date: "(09/2024) - (10/2024)",
    },
    {
      name: "CONSTRUCCION DE BASES DE DATOS CON MySQL - Sena",
      date: "(01/2023) - (06/2023)",
    },
    {
      name: "Ejercicio Derechos Fundamentales en el Trabajo - Sena",
      date: "(07/2022) - (10/2022)",
    },
  ];

  return (
    <div className={`education-container ${isOpen ? "open" : ""}`}>
      <div className="education-overlay" onClick={onClose}></div>
      <div className="education-window">
        <button className="education-close" onClick={onClose}>
          &times;
        </button>
        <div className="education-content">
          <h2 className="education-title">EDUCACIÓN Y CERTIFICADOS</h2>

          <div className="education-section">
            <h3 className="section-title">EDUCACIÓN</h3>
            <div className="education-grid">
              {educationData.map((edu, index) => (
                <div key={index} className="education-card">
                  <h4 className="institution">{edu.institution}</h4>
                  <p className="degree">{edu.degree}</p>
                  <span className="status">{edu.status}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="certificates-section">
            <h3 className="section-title">CERTIFICADOS</h3>
            <div className="certificates-grid">
              {certificatesData.map((cert, index) => (
                <div key={index} className="certificate-card">
                  <h4 className="cert-name">{cert.name}</h4>
                  <span className="cert-date">{cert.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
