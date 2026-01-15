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
      type: "PROYECTOS PROFESIONALES DESTACADOS",
      items: [
        {
          title: "Silla Vacía",
          description:
            "Plataforma web corporativa desarrollada en React + Node.js con arquitectura escalable. Integración de APIs complejas, gestión de contenidos y optimización SEO. Desplegada en producción en AWS con CI/CD.",
          technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
        },
        {
          title: "Plataforma de Agendamiento de Prácticas",
          description:
            "Sistema integral de agendamiento con backend NestJS, frontend React y autenticación Firebase. Panel administrativo para gestión de horarios, disponibilidad en tiempo real y notificaciones automáticas.",
          technologies: ["NestJS", "React", "Firebase", "PostgreSQL"],
        },
        {
          title: "Web Corporativa DNA-Music",
          description:
            "Sitio corporativo moderno desarrollado en React + Next.js. Integración con n8n para automatizaciones, CRM Clientify, BigQuery para analytics y Power BI dashboards en tiempo real.",
          technologies: ["Next.js", "React", "n8n", "Power BI", "GCP"],
        },
        {
          title: "Tienda Personal Computer - E-commerce",
          description:
            "Plataforma unificada para Tienda PC y Tienda Mac. Backend en Node.js + Express con PostgreSQL, frontends en React.js y Redux. Pasarelas de pago seguras, panel administrativo completo y sistema de soporte técnico en tiempo real con WebSockets.",
          technologies: ["Node.js", "React", "Redux", "PostgreSQL", "WebSockets"],
        },
        {
          title: "Proyecto Alivia (Nutrabiotics)",
          description:
            "Plataforma integral con integración del ERP Epicor. Desarrollo full-stack con NestJS, React y Firebase. Sincronización de datos en tiempo real, funcionalidades complejas y despliegue en AWS.",
          technologies: ["NestJS", "React", "Firebase", "PostgreSQL", "AWS"],
        },
      ],
    },
    {
      type: "SOLUCIONES Y SERVICIOS IMPLEMENTADOS",
      items: [
        {
          title: "Arquitectura de Microservicios",
          description:
            "Diseño e implementación de arquitecturas escalables con NestJS, Node.js y Rust. APIs RESTful y WebSocket documentadas, despliegue en Kubernetes (GKE), CI/CD con GitHub Actions y GitLab Runner.",
          technologies: ["NestJS", "Node.js", "Rust", "Kubernetes", "Docker"],
        },
        {
          title: "Automatización Empresarial",
          description:
            "Flujos automatizados con n8n, Zapier y Zoho. Integración de WhatsApp, email marketing, sincronización de datos, CRM Clientify, LMS Thinkific y chatbots con IA.",
          technologies: ["n8n", "Zapier", "Zoho", "Clientify", "Thinkific"],
        },
        {
          title: "Infraestructura Cloud & DevOps",
          description:
            "Administración de infraestructura en AWS, Azure y GCP. Gestión de IAM, Cloud Storage, despliegues automatizados, monitoreo y scaling. Servidores Linux en VPS autogestionados.",
          technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Linux"],
        },
        {
          title: "Business Intelligence & Análisis",
          description:
            "Integración de datos con BigQuery y DataQuery. Dashboards en tiempo real con Power BI, modelado de datos, pipelines de integración y consolidación analítica.",
          technologies: ["BigQuery", "Power BI", "DataQuery"],
        },
        {
          title: "Soluciones Web3 & Blockchain",
          description:
            "Implementación de autenticación descentralizada con Metamask, contratos inteligentes y transacciones seguras con Web3.js. Integración en plataformas existentes.",
          technologies: ["Web3.js", "Metamask", "Blockchain", "Smart Contracts"],
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
