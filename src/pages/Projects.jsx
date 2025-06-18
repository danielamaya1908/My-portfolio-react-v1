import React, { useState, useEffect } from "react";
import "../styles/Projects.css";

function Projects({ isOpen, onClose }) {
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

  const projectsData = [
    {
      type: "PROYECTOS PROFESIONALES",
      items: [
        {
          title: "Ecommerce (Web)",
          description:
            "Desarrollé una plataforma unificada para Tienda PC y Tienda Mac con backend en Node.js y PostgreSQL, y frontends en React.js y Redux. Implementé pasarelas de pago, panel administrativo responsive, gestión de usuarios y soporte técnico en tiempo real. Desplegada en producción con monitoreo constante.",
          technologies: ["Node.js", "React", "Redux", "PostgreSQL"],
        },
      ],
    },
    {
      type: "PROYECTOS ACADÉMICOS DESTACADOS",
      items: [
        {
          title: "Plataforma Rick and Morty",
          description:
            "Creé una plataforma web para fanáticos, con episodios organizados cronológicamente, perfiles de personajes y resúmenes, usando React y Node.js, optimizando la experiencia de usuario.",
          technologies: ["React", "Node.js"],
        },
        {
          title: "Plataforma Informativa de Videojuegos",
          description:
            "Desarrollé un dashboard interactivo que muestra datos en tiempo real sobre videojuegos mediante APIs externas. Permite gestión administrativa y está basada en React, Redux y PostgreSQL para garantizar rendimiento.",
          technologies: ["React", "Redux", "PostgreSQL"],
        },
      ],
    },
  ];

  return (
    <div className={`projects-container ${isOpen ? "open" : ""}`}>
      <div className="projects-overlay" onClick={onClose}></div>
      <div className="projects-window">
        <button className="projects-close" onClick={onClose}>
          &times;
        </button>
        <div className="projects-content">
          <h2 className="projects-title">MIS PROYECTOS</h2>

          {projectsData.map((section, sectionIndex) => (
            <div key={sectionIndex} className="projects-section">
              <h3 className="section-title">{section.type}</h3>
              <div className="projects-grid">
                {section.items.map((project, projectIndex) => (
                  <div key={projectIndex} className="project-card">
                    <h4 className="project-title">{project.title}</h4>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
