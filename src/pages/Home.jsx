import React, { useCallback, useState } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import {
  FaPython,
  FaNodeJs,
  FaReact,
  FaDocker,
  FaGoogle,
  FaDatabase,
  FaGithub,
  FaGitlab,
  FaLinux,
  FaWindows,
  FaTrello,
  FaFileDownload,
  FaLinkedin,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaApple,
  FaServer,
} from "react-icons/fa";
import {
  SiTypescript,
  SiPhp,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiDotnet,
  SiExpress,
  SiLaravel,
  SiTailwindcss,
  SiJira,
  SiClickup,
  SiFigma,
  SiGitea,
  SiPostman,
  SiInsomnia,
  SiRedux,
  SiHoppscotch,
} from "react-icons/si";
import { FaPenNib } from "react-icons/fa";
import { DiMsqlServer, DiTerminal } from "react-icons/di";
import { BsGit } from "react-icons/bs";
import profileImage from "../assets/profile.png";
import CV from "../assets/CV_Daniel_Amaya.pdf";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Education from "./Education";
import SoftSkills from "./SoftSkills";
import "../styles/Home.css";

function Home() {
  const [text] = useTypewriter({
    words: [
      "Desarrollador de Software",
      "Ingeniero de Datos en Formación",
      "Especialista en Bases de Datos",
      "Desarrollador Full Stack",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
  });

  const [aboutOpen, setAboutOpen] = useState(false);
  const [experienceOpen, setExperienceOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const [educationOpen, setEducationOpen] = useState(false);
  const [softSkillsOpen, setSoftSkillsOpen] = useState(false);
  const [language, setLanguage] = useState("es");
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Tecnologías organizadas por categorías
  const habilidades = {
    "Lenguajes y Frameworks": [
      { icon: <SiTypescript />, nombre: "TypeScript" },
      { icon: <FaNodeJs />, nombre: "Node.js" },
      { icon: <FaPython />, nombre: "Python" },
      { icon: <SiDotnet />, nombre: ".NET" },
      { icon: <SiPhp />, nombre: "PHP" },
      { icon: <SiLaravel />, nombre: "Laravel" },
      { icon: <SiExpress />, nombre: "Express" },
      { icon: <FaServer />, nombre: "ParseServer" },
    ],
    Frontend: [
      { icon: <FaReact />, nombre: "React" },
      { icon: <SiRedux />, nombre: "Redux" },
      { icon: <FaHtml5 />, nombre: "HTML5" },
      { icon: <FaCss3Alt />, nombre: "CSS3" },
      { icon: <FaBootstrap />, nombre: "Bootstrap" },
      { icon: <SiTailwindcss />, nombre: "Tailwind CSS" },
    ],
    "Bases de Datos": [
      { icon: <SiPostgresql />, nombre: "PostgreSQL" },
      { icon: <SiMongodb />, nombre: "MongoDB" },
      { icon: <DiMsqlServer />, nombre: "SQL Server" },
      { icon: <SiMysql />, nombre: "MySQL" },
      { icon: <FaDatabase />, nombre: "PL/pgSQL" },
    ],
    "DevOps y Cloud": [
      { icon: <FaGoogle />, nombre: "Google Cloud" },
      { icon: <FaDocker />, nombre: "Docker" },
    ],
    "Control de Versiones": [
      { icon: <FaGithub />, nombre: "GitHub" },
      { icon: <FaGitlab />, nombre: "GitLab" },
      { icon: <SiGitea />, nombre: "Gitea" },
      { icon: <BsGit />, nombre: "GitFlow" },
      { icon: <DiTerminal />, nombre: "GitBash" },
    ],
    "APIs y Testing": [
      { icon: <SiPostman />, nombre: "Postman" },
      { icon: <SiInsomnia />, nombre: "Insomnia" },
      { icon: <SiHoppscotch />, nombre: "Hoppscotch" },
    ],
    "Diseño y Colaboración": [
      { icon: <SiFigma />, nombre: "Figma" },
      { icon: <FaPenNib />, nombre: "Scalidraw" },
    ],
    "Sistemas Operativos": [
      { icon: <FaLinux />, nombre: "Linux" },
      { icon: <FaWindows />, nombre: "Windows" },
      { icon: <FaApple />, nombre: "macOS" },
    ],
    "Gestión de Proyectos": [
      { icon: <SiClickup />, nombre: "ClickUp" },
      { icon: <FaTrello />, nombre: "Trello" },
      { icon: <SiJira />, nombre: "Jira" },
    ],
  };

  return (
    <section className="seccion-portafolio" id="inicio">
      {/* Barra de contacto superior */}
      <div className="barra-contacto">
        <div className="contenedor-contacto">
          <a href="mailto:danijcdm.com@gmail.com" className="item-contacto">
            <FaEnvelope className="icono-contacto" />
            <span>danijcdm.com@gmail.com</span>
          </a>
          <a
            href="https://github.com/danielamaya1908"
            target="_blank"
            rel="noopener noreferrer"
            className="item-contacto"
          >
            <FaGithub className="icono-contacto" />
            <span>GitHub</span>
          </a>
          <a
            href="https://www.linkedin.com/in/daniel-enoc-amaya-amaya/"
            target="_blank"
            rel="noopener noreferrer"
            className="item-contacto"
          >
            <FaLinkedin className="icono-contacto" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://wa.me/573004428098"
            target="_blank"
            rel="noopener noreferrer"
            className="item-contacto"
          >
            <FaWhatsapp className="icono-contacto" />
            <span>WhatsApp</span>
          </a>
          <a href="tel:+573004428098" className="item-contacto">
            <FaPhone className="icono-contacto" />
            <span>+57 300 4428098</span>
          </a>
        </div>
      </div>

      {/* Contenido principal */}
      <Particles
        id="particulas"
        init={particlesInit}
        options={{
          background: { color: { value: "#0f0f1a" } },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
            },
          },
          particles: {
            color: { value: "#00a8cc" },
            links: {
              color: "#00a8cc",
              distance: 150,
              enable: true,
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 2,
            },
            number: { density: { enable: true }, value: 80 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
        }}
      />

      <div className="contenedor-principal">
        <div className="perfil">
          <img
            src={profileImage}
            alt="Daniel Amaya - Desarrollador de Software"
            className="foto-perfil"
          />
          <div className="efecto-luz"></div>
        </div>

        <div className="contenido">
          <h1 className="titulo-principal">Daniel Amaya</h1>
          <h2 className="subtitulo">
            <span>{text}</span>
            <Cursor cursorStyle="|" cursorColor="#00a8cc" />
          </h2>

          <div className="habilidades">
            {Object.entries(habilidades).map(([categoria, tecnologias]) => (
              <div key={categoria} className="categoria">
                <h3 className="titulo-categoria">{categoria}</h3>
                <div className="tecnologias">
                  {tecnologias.map((tech, index) => (
                    <div key={index} className="tecnologia">
                      <div className="icono">{tech.icon}</div>
                      <span className="nombre">{tech.nombre}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="botones-container">
            <div className="botones-columna">
              <a
                href="#sobre-mi"
                className="boton-primario"
                onClick={(e) => {
                  e.preventDefault();
                  setAboutOpen(true);
                }}
              >
                Sobre Mí
              </a>
              <a
                href="#proyectos"
                className="boton-primario"
                onClick={(e) => {
                  e.preventDefault();
                  setProjectsOpen(true);
                }}
              >
                Mis Proyectos
              </a>
            </div>
            <div className="botones-columna">
              <a
                href="#experiencia"
                className="boton-primario"
                onClick={(e) => {
                  e.preventDefault();
                  setExperienceOpen(true);
                }}
              >
                Experiencia
              </a>
              <a
                href="#educacion"
                className="boton-primario"
                onClick={(e) => {
                  e.preventDefault();
                  setEducationOpen(true);
                }}
              >
                Educación
              </a>
            </div>
            <div className="botones-columna">
              <a
                href="#habilidades-blandas"
                className="boton-primario"
                onClick={(e) => {
                  e.preventDefault();
                  setSoftSkillsOpen(true);
                }}
              >
                Habilidades Blandas
              </a>
              <a href={CV} download className="boton-secundario">
                <FaFileDownload className="icono-descarga" />
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Componentes modales */}
      <About isOpen={aboutOpen} onClose={() => setAboutOpen(false)} />
      <Experience
        isOpen={experienceOpen}
        onClose={() => setExperienceOpen(false)}
      />
      <Projects isOpen={projectsOpen} onClose={() => setProjectsOpen(false)} />
      <Education
        isOpen={educationOpen}
        onClose={() => setEducationOpen(false)}
      />
      <SoftSkills
        isOpen={softSkillsOpen}
        onClose={() => setSoftSkillsOpen(false)}
      />
    </section>
  );
}

export default Home;
