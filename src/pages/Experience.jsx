import React, { useState, useEffect } from "react";
import "../styles/Experience.css";

function Experience({ isOpen, onClose }) {
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

  const experienceData = [
    {
      company: "Dazlab - Gravitad",
      location: "Madrid, España",
      date: "08/2024 - 05/2025",
      title: "Desarrollador Backend",
      achievements: [
        "Lideré el diseño, estructuración y optimización de colecciones en bases de datos NoSQL como MongoDB",
        "Desarrollé y gestioné múltiples servicios backend utilizando Node.js, Parse Server y Rust",
        "Implementé CRUDs complejos y flujos de automatización mediante comandos personalizados",
        "Diseñé API RESTful documentadas y testeadas con Swagger",
        "Participé en el desarrollo de chatbots con inteligencia artificial y sistemas de chat en tiempo real",
        "Contribuí al desarrollo de una plataforma de videoconferencias",
        "Asumí el rol de Project Manager coordinando equipos de trabajo",
        "Fomenté la adopción de tecnologías emergentes capacitando a más de 125 personas",
      ],
    },
    {
      company: "Tienda Personal Computer",
      location: "Valledupar, Colombia",
      date: "01/2024 - 07/2024",
      title: "Desarrollador Full Stack",
      achievements: [
        "Diseñé e implementé una plataforma unificada con backend centralizado",
        "Desarrollé dos interfaces frontend con React.js y Redux",
        "Implementé un sistema de monitoreo en tiempo real para el servicio técnico",
        "Configuré entornos y servidores para alta disponibilidad",
        "Desarrollé el proyecto de manera individual desde concepción hasta entrega",
      ],
    },
  ];

  return (
    <div className={`experience-container ${isOpen ? "open" : ""}`}>
      <div className="experience-overlay" onClick={onClose}></div>
      <div className="experience-window">
        <button className="experience-close" onClick={onClose}>
          &times;
        </button>
        <div className="experience-content">
          <h2 className="experience-title">EXPERIENCIA PROFESIONAL</h2>

          {experienceData.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="exp-header">
                <h3 className="exp-company">{exp.company}</h3>
                <div className="exp-location">{exp.location}</div>
              </div>
              <div className="exp-meta">
                <span className="exp-date">{exp.date}</span>
                <span className="exp-title">{exp.title}</span>
              </div>
              <ul className="exp-achievements">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="achievement-item">
                    <div className="achievement-bullet"></div>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
