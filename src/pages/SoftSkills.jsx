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
    "Trabajo en equipo bajo metodologías ágiles (Scrum, Kanban)",
    "Liderazgo técnico y coordinación de proyectos",
    "Comunicación clara con clientes y equipos",
    "Proactividad y resolutividad",
    "Adaptabilidad a nuevas tecnologías y entornos",
    "Alto rendimiento bajo presión",
    "Aprendizaje continuo y curiosidad tecnológica",
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
              Destaco por mi trabajo en equipo con metodologías ágiles como Scrum, Kanban y seguimiento Weekly, asegurando organización, prioridad y cumplimiento de entregas. Tengo habilidades de liderazgo técnico, comunicación clara y enfoque en resultados. Soy proactivo, adaptable y resolutivo, manteniendo alto rendimiento bajo presión. Mi constante aprendizaje me permite incorporar nuevas tecnologías y aportar soluciones innovadoras.
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
