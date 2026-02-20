import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { 
  BookOpen, 
  Calculator, 
  Languages, 
  FileText, 
  GraduationCap, 
  CheckCircle2,
  Calendar,
  MessageCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import './App.css';

const services = [
  {
    icon: <Languages size={32} />,
    title: "Inglés Comunicativo",
    description: "Dominio del speaking, grammar y desarrollo de confianza para todas las edades."
  },
  {
    icon: <Calculator size={32} />,
    title: "Matemáticas y Cálculo",
    description: "Geometría, álgebra lineal, cálculo integral y diferencial con metodología clara."
  },
  {
    icon: <BookOpen size={32} />,
    title: "Lectoescritura",
    description: "Comprensión crítica, ortografía avanzada y redacción de alto impacto."
  },
  {
    icon: <FileText size={32} />,
    title: "Proyectos y Tesis",
    description: "Asesoría técnica en normas APA e IEEE, maquetas escolares y estructuración."
  },
  {
    icon: <GraduationCap size={32} />,
    title: "Apoyo Universitario",
    description: "Estadística, probabilidad y preparación intensiva para parciales finales."
  },
  {
    icon: <CheckCircle2 size={32} />,
    title: "Acompañamiento Premium",
    description: "Clases personalizadas diseñadas según el ritmo de aprendizaje de cada estudiante."
  }
];

function App() {
  return (
    <HelmetProvider>
      <div className="app-container">
        <Helmet>
          <title>Wendy Sarmiento | Acompañamiento Académico Premium</title>
          <meta name="description" content="Tutorías personalizadas de inglés, matemáticas, cálculo y lectoescritura. Asesoría en tesis y proyectos universitarios." />
        </Helmet>

        {/* Hero Section */}
        <header>
          <div className="floating-bg" style={{ top: '10%', left: '10%' }}></div>
          <div className="floating-bg" style={{ bottom: '20%', right: '5%', width: '200px', height: '200px' }}></div>
          
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">Wendy Sarmiento</h1>
            <p className="hero-subtitle">Acompañamiento Académico Premium para Niños, Jóvenes y Universitarios</p>
            <a href="#contacto" className="cta-button">Empezar Ahora</a>
          </motion.div>
        </header>

        {/* Services Section */}
        <section className="services container">
          <h2 className="section-title">Servicios Especializados</h2>
          <div className="services-grid">
            {services.map((service, index) => (
              <motion.div 
                key={index}
                className="service-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="service-icon">{service.icon}</div>
                <h3>{service.icon.type === Languages ? 'Inglés' : service.title}</h3>
                <p>{service.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Info Section with different colors */}
        <section style={{ background: '#EEF2F7', padding: '80px 0' }}>
          <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
            <div style={{ textAlign: 'center' }}>
              <Calendar size={48} color="#A7C7E7" />
              <h3 style={{ margin: '15px 0' }}>Horarios Flexibles</h3>
              <p>Clases adaptadas a tu disponibilidad, mañana o tarde.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <MessageCircle size={48} color="#A7C7E7" />
              <h3 style={{ margin: '15px 0' }}>Soporte Continuo</h3>
              <p>Resolución de dudas rápidas vía WhatsApp.</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <CheckCircle2 size={48} color="#A7C7E7" />
              <h3 style={{ margin: '15px 0' }}>Resultados</h3>
              <p>Metodología enfocada en mejorar el promedio y la confianza.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contacto" className="cta">
          <div className="container">
            <h2>¿Listo para alcanzar tus objetivos académicos?</h2>
            <p>Contáctame hoy mismo para una sesión de diagnóstico personalizada.</p>
            <a href="https://wa.me/tu-numero-aqui" className="cta-button">Contactar por WhatsApp</a>
          </div>
        </section>

        <footer style={{ padding: '40px 0', textAlign: 'center', background: '#F8F9FB', color: '#5D6D7E' }}>
          <p>© 2026 Wendy Sarmiento - Todos los derechos reservados.</p>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;
