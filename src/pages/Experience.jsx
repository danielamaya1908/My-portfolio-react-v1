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
      company: "DNA-Music",
      location: "Bogotá, Colombia (Remoto)",
      date: "08/2025 - 01/2026",
      title: "Desarrollador Senior - Líder TI",
      achievements: [
        "Lideré el área de tecnología, coordinando equipo y estructurando repositorios con GitHub y GitLab",
        "Diseñé arquitecturas backend en NestJS, Node.js y Laravel, y frontends en Next.js y React",
        "Desarrollé e implementé proyectos clave como Silla Vacía, Algoritmo de Inicio de Ciclo y Plataforma de Agendamiento",
        "Administré infraestructura cloud en AWS, Azure y Google Cloud (GCP)",
        "Implementé y orquesté servicios en Kubernetes (GKE) con pipelines CI/CD",
        "Integré flujos de datos con BigQuery y PowerBI para análisis en tiempo real",
        "Implementé automatizaciones avanzadas con n8n, Zapier, Zoho y Clientify",
        "Administré CRM (Clientify) y LMS (Thinkific) con integraciones complejas",
        "Conecté servicios cloud con infraestructura interna asegurando escalabilidad",
      ],
    },
    {
      company: "Nutrabiotics",
      location: "Bogotá, Colombia (Híbrido)",
      date: "07/2025 - 08/2025",
      title: "Desarrollador Full Stack",
      achievements: [
        "Participé en desarrollo y mantenimiento del ERP Epicor",
        "Desarrollé componentes frontend con React.js y Next.js",
        "Implementé servicios backend con NestJS siguiendo arquitectura modular",
        "Integré Firebase (Firestore, Authentication, Cloud Functions)",
        "Administré bases de datos PostgreSQL con DBeaver",
        "Ejecuté pruebas funcionales e integración para asegurar calidad",
      ],
    },
    {
      company: "Dazlab - Gravitad",
      location: "Madrid, España (Remoto)",
      date: "08/2024 - 07/2025",
      title: "Desarrollador Backend & Team Leader",
      achievements: [
        "Desarrollé servicios backend con Node.js, NestJS, Parse Server y Rust",
        "Diseñé APIs RESTful y WebSocket con Swagger y OpenAPI",
        "Implementé sistemas de chat en tiempo real con Socket.IO y chatbots con IA",
        "Como Team Leader, coordiné equipos multidisciplinarios y establecí estándares",
        "Implementé estrategias DevOps con Docker, Kubernetes, Nginx y CI/CD",
        "Trabajé con soluciones Blockchain, Web3, Metamask y contratos inteligentes",
        "Capacité a 125+ profesionales en IA, automatización y arquitectura de software",
      ],
    },
    {
      company: "Brack Soluciones",
      location: "Valledupar, Colombia (Híbrido)",
      date: "02/2024 - 08/2024",
      title: "Practicante - Análisis y Desarrollo de Sistemas",
      achievements: [
        "Culminé exitosamente la etapa productiva del programa ADSI",
        "Participé en ciclo completo: requerimientos, análisis, diseño, codificación y pruebas",
        "Contribuí a proyectos reales aplicando arquitectura y documentación técnica",
        "Brindé soporte técnico empresarial y mantenimiento de servidores internos",
      ],
    },
    {
      company: "Tienda Personal Computer",
      location: "Valledupar, Colombia (Remoto)",
      date: "01/2024 - 08/2024",
      title: "Desarrollador Full Stack",
      achievements: [
        "Diseñé e implementé plataforma de ventas con backend Node.js + Express y PostgreSQL",
        "Desarrollé interfaces frontend con React.js y Redux integrando pasarelas de pago",
        "Construí panel administrativo avanzado para gestión de productos e inventario",
        "Implementé software de soporte técnico en tiempo real con WebSockets",
        "Ejecuté proyecto completo: análisis, arquitectura, desarrollo, despliegue y mantenimiento",
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
