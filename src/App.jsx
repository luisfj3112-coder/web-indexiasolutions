import React, { useEffect } from 'react';
import { Routes, Route, Link, useLocation, useNavigate } from 'react-router-dom';
import Chatbot from './Chatbot';
import ContactForm from './ContactForm';
import PrivacyPolicy from './PrivacyPolicy';
import './App.css';

// --- COMPONENTES EXTRAÍDOS FUERA DE APP PARA EVITAR RE-MONTADO Y PÉRDIDA DE FOCO ---

const Nav = ({ scrollToSection }) => (
  <nav className="navbar glass">
    <div className="container">
      <div className="nav-left">
        <Link to="/" className="logo-link">
          <h1 className="logo-text">Index<span className="text-highlight">IA</span> <span className="logo-sub">solutions</span></h1>
        </Link>
      </div>
      <ul className="nav-links">
        <li><a href="#home" onClick={scrollToSection('home')}>Inicio</a></li>
        <li><a href="#empresas" onClick={scrollToSection('empresas')}>Para Empresas</a></li>
        <li><a href="#servicios" onClick={scrollToSection('servicios')}>Servicios</a></li>
        <li><a href="#casos" onClick={scrollToSection('casos')}>Casos de Uso</a></li>
        <li><a href="#sobre-nosotros" onClick={scrollToSection('sobre-nosotros')}>Sobre Nosotros</a></li>
      </ul>
      <div className="nav-right">
        <button className="nav-cta" onClick={scrollToSection('contact')}>Solicitar Demo</button>
      </div>
    </div>
  </nav>
);

const Footer = ({ scrollToSection }) => (
  <footer className="footer">
    <div className="container footer-grid">
      <div className="footer-col company-info">
        <Link to="/" className="logo-link">
          <h1 className="logo-text">Index<span className="text-highlight">IA</span> <span className="logo-sub">solutions</span></h1>
        </Link>
        <p className="footer-tagline">
          Comienza la automatización de tu empresa o negocio con <strong>IndexIA Solutions</strong> y nuestros servicios de Inteligencia Artificial para mejorar la productividad.
        </p>
      </div>

      <div className="footer-col">
        <div className="col-header">
          <span className="col-icon">🔗</span>
          <h4>Enlaces</h4>
        </div>
        <ul className="footer-list">
          <li><a href="#home" onClick={scrollToSection('home')}>Nosotros</a></li>
          <li><a href="#servicios" onClick={scrollToSection('servicios')}>Servicios</a></li>
          <li><a href="#casos" onClick={scrollToSection('casos')}>Casos de Uso</a></li>
          <li><Link to="/politica-de-privacidad" target="_blank">Política de Privacidad</Link></li>
          <li><a href="#home" onClick={scrollToSection('home')}>Mapa del sitio</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <div className="col-header">
          <span className="col-icon">🔗</span>
          <h4>Servicios</h4>
        </div>
        <ul className="footer-list">
          <li><a href="#servicios" onClick={scrollToSection('servicios')}>Automatizar WhatsApp con IA</a></li>
          <li><a href="#servicios" onClick={scrollToSection('servicios')}>Automatizar Correo con IA</a></li>
          <li><a href="#servicios" onClick={scrollToSection('servicios')}>Captar clientes con IA</a></li>
          <li><a href="#servicios" onClick={scrollToSection('servicios')}>Chatbots y Asistentes Virtuales</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <div className="col-header">
          <span className="col-icon">🔗</span>
          <h4>Servicios</h4>
        </div>
        <ul className="footer-list">
          <li><a href="#servicios" onClick={scrollToSection('servicios')}>Crear facturas con IA</a></li>
          <li><a href="#servicios" onClick={scrollToSection('servicios')}>Crear presupuestos con IA</a></li>
          <li><a href="#servicios" onClick={scrollToSection('servicios')}>Gestión de incidencias con IA</a></li>
          <li><a href="#servicios" onClick={scrollToSection('servicios')}>Optimización de Marketing Digital</a></li>
        </ul>
      </div>

      <div className="footer-col">
        <div className="col-header">
          <span className="col-icon">📞</span>
          <h4>Contacto</h4>
        </div>
        <ul className="footer-list contact-list">
          <li><a href="mailto:relat@indexiasolutions.com">relat@indexiasolutions.com</a></li>
          <li>Barcelona</li>
        </ul>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="container">
        <p>&copy; 2026 IndexIA Solutions. Elevating Business with Agentic AI.</p>
      </div>
    </div>
  </footer>
);

const HomePage = ({ scrollToSection, formData, setFormData, handleChange }) => (
  <>
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <span className="sparkle">✦</span> IA Agentic de Nueva Generación
          </div>
          <h2 className="title">
            Sistemas que <span className="text-gradient">piensan, responden y venden por ti</span>
          </h2>
          <p className="subtitle">
            Ahorra tiempo, multiplica resultados y lleva tu negocio al siguiente nivel con inteligencia artificial Agentic
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={scrollToSection('contact')}>
              Solicitar Demo Gratis <span className="arrow">→</span>
            </button>
            <button className="btn-secondary" onClick={scrollToSection('servicios')}>
              Conoce Nuestros Servicios
            </button>
          </div>
        </div>
      </div>
      <div className="network-bg"></div>
    </section>

    {/* SECCIÓN PARA EMPRESAS */}
    <section id="empresas" className="content-section">
      <div className="container">
        <span className="section-eyebrow">Enterprise Solutions</span>
        <h3 className="section-title">Automatización para <span className="text-gradient">Empresas</span></h3>
        <div className="info-grid">
          <div className="info-card glass">
            <h4>Atención Automatizada</h4>
            <p>Agentes que gestionan consultas y dudas de clientes en tiempo real, derivando solo lo esencial a humanos.</p>
          </div>
          <div className="info-card glass">
            <h4>Operaciones 24/7</h4>
            <p>Automatizamos procesos repetitivos de back-office, facturación y reportes sin intervención manual.</p>
          </div>
          <div className="info-card glass">
            <h4>Gestión de Leads</h4>
            <p>Calificación y seguimiento inteligente de prospectos para asegurar que ninguna oportunidad se pierda.</p>
          </div>
        </div>
      </div>
    </section>

    <section id="servicios" className="content-section darker">
      <div className="container">
        <span className="section-eyebrow">Solutions & Services</span>
        <h3 className="section-title">Nuestros <span className="text-gradient">Servicios</span></h3>
        <div className="agents-grid">
          <div className="agent-card glass">
            <div className="agent-icon">⚙️</div>
            <h4>Automatización de Procesos</h4>
            <p>Optimizamos flujos de trabajo empresariales reduciendo tiempos y errores manuales.</p>
          </div>
          <div className="agent-card glass">
            <div className="agent-icon">📱</div>
            <h4>Asistente Inteligente</h4>
            <p>Bots inteligentes conectados con WhatsApp, Instagram y Telegram para atención 24/7.</p>
          </div>
          <div className="agent-card glass">
            <div className="agent-icon">📞</div>
            <h4>Asistentes Telefónicos</h4>
            <p>IA de voz capaz de gestionar llamadas, citas y consultas con lenguaje natural.</p>
          </div>
          <div className="agent-card glass">
            <div className="agent-icon">📊</div>
            <h4>Análisis de Datos</h4>
            <p>Extracción de insights valiosos a partir de tus datos para decisiones estratégicas.</p>
          </div>
          <div className="agent-card glass">
            <div className="agent-icon">🌐</div>
            <h4>Creación de Páginas Web</h4>
            <p>Diseño y desarrollo de sitios web modernos, rápidos y optimizados para conversión.</p>
          </div>
          <div className="agent-card glass">
            <div className="agent-icon">📝</div>
            <h4>Presupuestos Personalizados</h4>
            <p>Generación automática de presupuestos adaptados a las necesidades de cada cliente.</p>
          </div>
        </div>
      </div>
    </section>

    {/* SECCIÓN CASOS DE USO */}
    <section id="casos" className="content-section">
      <div className="container">
        <span className="section-eyebrow">Proven Results</span>
        <h3 className="section-title">Casos de <span className="text-gradient">Uso Real</span></h3>

        <div className="cases-list">
          <div className="case-row">
            <div className="case-image">
              <img src="/case-health.png" alt="Salud AI" className="glass-img" />
            </div>
            <div className="case-info">
              <span className="case-tag">Salud</span>
              <h4>Asistentes de Voz para Clínicas</h4>
              <p>Implementación de agentes de voz que gestionan el 90% de las citas médicas, reduciendo la carga administrativa y mejorando la puntualidad de los pacientes.</p>
              <ul className="case-features">
                <li>✅ Gestión automática de citas</li>
                <li>✅ Recordatorios vía WhatsApp</li>
                <li>✅ Disponibilidad 24/7</li>
              </ul>
            </div>
          </div>

          <div className="case-row">
            <div className="case-image">
              <img src="/case-finance.jpg" alt="Finanzas AI" className="glass-img" />
            </div>
            <div className="case-info">
              <span className="case-tag">Finanzas</span>
              <h4>Optimización de Análisis de Datos</h4>
              <p>Sistemas que analizan grandes volúmenes de transacciones para detectar fugas presupuestarias y optimizar el flujo de caja en tiempo real.</p>
              <ul className="case-features">
                <li>✅ Detección de anomalías</li>
                <li>✅ Dashboards inteligentes</li>
                <li>✅ Ahorro operativo del 25%</li>
              </ul>
            </div>
          </div>

          <div className="case-row">
            <div className="case-image">
              <img src="/case-tech.jpg" alt="Marketing & Tech" className="glass-img" />
            </div>
            <div className="case-info">
              <span className="case-tag">Marketing & Tech</span>
              <h4>Embudos de Venta Automatizados</h4>
              <p>Despliegue de landing pages y chatbots coordinados para calificar leads y cerrar ventas sin intervención humana directa.</p>
              <ul className="case-features">
                <li>✅ Conversión optimizada por IA</li>
                <li>✅ Integración con CRMs</li>
                <li>✅ Escalabilidad inmediata</li>
              </ul>
            </div>
          </div>

          <div className="case-row">
            <div className="case-image">
              <img src="/case-construction.jpg" alt="Construcción AI" className="glass-img" />
            </div>
            <div className="case-info">
              <span className="case-tag">Construcción</span>
              <h4>Presupuestos Técnicos Instantáneos</h4>
              <p>Generación de presupuestos complejos a partir de planos y requerimientos técnicos en menos de 5 minutos utilizando modelos LLM avanzados.</p>
              <ul className="case-features">
                <li>✅ Precisión del 99%</li>
                <li>✅ Estimación de materiales</li>
                <li>✅ Entrega inmediata al cliente</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* SECCIÓN SOBRE NOSOTROS */}
    <section id="sobre-nosotros" className="content-section darker">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-image">
            <img src="/src/assets/sobre-nosotros.png" alt="IndexIA Solutions Office" className="glass-img" />
          </div>
          <div className="about-text">
            <span className="section-eyebrow">Sobre Nosotros</span>
            <h3 className="section-title">Impulsando el Futuro con <span className="text-gradient">IA Agentic</span></h3>
            <p className="about-description">
              En <strong>IndexIA Solutions</strong>, no solo creamos herramientas; desarrollamos compañeros digitales inteligentes. Nuestra misión es transformar la forma en que las empresas operan, permitiéndoles escalar sin límites mediante la automatización de procesos complejos y la implementación de agentes de IA de última generación.
            </p>
            <p className="about-description">
              Nacimos con la visión de democratizar el acceso a la tecnología Agentic, ayudando a negocios de todos los tamaños a ahorrar tiempo crítico y multiplicar sus conversiones. Con un enfoque en la innovación constante, nos aseguramos de que cada solución sea tan única como el cliente al que servimos.
            </p>
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-num">100%</span>
                <span className="stat-label">Enfocados en Resultados</span>
              </div>
              <div className="stat-item">
                <span className="stat-num">24/7</span>
                <span className="stat-label">Soporte Inteligente</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <ContactForm
      formData={formData}
      setFormData={setFormData}
      handleChange={handleChange}
    />
  </>
);

// --- COMPONENTE APP PRINCIPAL ---

const App = () => {
  const [formData, setFormData] = React.useState({
    nombre: '',
    email: '',
    telefono: '',
    consulta: '',
    acceptPrivacy: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (pathname === '/' && hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    } else if (pathname !== '/') {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  const scrollToSection = (id) => (e) => {
    e.preventDefault();
    if (pathname !== '/') {
      navigate('/#' + id);
    } else {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="app">
      <div className="bg-vignette"></div>
      <Nav scrollToSection={scrollToSection} />

      <Routes>
        <Route path="/" element={
          <HomePage
            scrollToSection={scrollToSection}
            formData={formData}
            setFormData={setFormData}
            handleChange={handleChange}
          />
        } />
        <Route path="/politica-de-privacidad" element={<PrivacyPolicy />} />
      </Routes>

      <Footer scrollToSection={scrollToSection} />
      <Chatbot />
    </div>
  );
};

export default App;
