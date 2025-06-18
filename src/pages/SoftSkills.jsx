import React, { useState, useEffect } from "react";
import "../styles/SoftSkills.css";

function SoftSkills({ isOpen, onClose }) {
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

  const softSkills = [
    "Trabajo en equipo bajo metodologías ágiles como Scrum",
    "Liderazgo para coordinar proyectos y equipos",
    "Proactividad y adaptabilidad",
    "Creatividad para resolver problemas",
    "Comunicación empática con clientes y colegas",
    "Responsabilidad y compromiso bajo presión",
    "Curiosidad tecnológica y aprendizaje continuo",
  ];

  return (
    <div className={`softskills-container ${isOpen ? "open" : ""}`}>
      <div className="softskills-overlay" onClick={onClose}></div>
      <div className="softskills-window">
        <button className="softskills-close" onClick={onClose}>
          &times;
        </button>
        <div className="softskills-content">
          <h2 className="softskills-title">SOFT SKILLS</h2>

          <div className="softskills-description">
            <p>
              Destaco por mi capacidad de trabajo en equipo bajo metodologías
              ágiles como Scrum, junto con habilidades de liderazgo para
              coordinar proyectos y equipos. Soy proactivo, adaptable y
              creativo, lo que me permite resolver problemas de forma eficiente
              y aportar ideas innovadoras. Manejo bien la comunicación empática
              para interactuar efectivamente con clientes y colegas, y trabajo
              con responsabilidad y compromiso, incluso bajo presión. Además,
              cuento con una fuerte curiosidad tecnológica que me impulsa a
              aprender continuamente nuevas herramientas y tendencias.
            </p>
          </div>

          <div className="skills-grid">
            {softSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <div className="skill-icon">✓</div>
                <span className="skill-text">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SoftSkills;
