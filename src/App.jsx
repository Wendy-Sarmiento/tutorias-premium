import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { 
  BookOpen, 
  Calculator, 
  Languages, 
  FileText, 
  GraduationCap, 
  Sparkles,
  Award,
  Users,
  Clock,
  ArrowRight
} from 'lucide-react';
import { motion, useScroll, useSpring } from 'framer-motion';
import './App.css';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const fadeUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8, ease: "easeOut" }
  };

  return (
    <HelmetProvider>
      <div className="app-wrapper">
        <Helmet>
          <title>Wendy Sarmiento | Educación Premium Personalizada</title>
          <meta name="description" content="Tutorías de alto nivel en matemáticas, inglés, cálculo y lectoescritura. Acompañamiento universitario y asesoría en tesis." />
        </Helmet>

        {/* Scroll Progress Bar */}
        <motion.div className="progress-bar" style={{ 
          scaleX, 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          right: 0, 
          height: '6px', 
          background: 'var(--primary-blue)', 
          zIndex: 1000,
          transformOrigin: '0%'
        }} />

        <div className="mesh-bg"></div>

        {/* Hero Section */}
        <section className="hero container">
          <motion.div 
            className="hero-glass"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
          >
            <span className="hero-tag">Educación de alto impacto</span>
            <h1 className="hero-title">
              Trasciende tus <br />
              <span style={{ color: '#2C3E50' }}>Límites Académicos</span>
            </h1>
            <p className="hero-description">
              Wendy Sarmiento ofrece acompañamiento premium personalizado para transformar tu potencial en resultados extraordinarios.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="#servicios" className="btn-primary">Ver Servicios</a>
              <a href="https://wa.me/tu-numero-aqui" className="btn-primary" style={{ background: 'white', color: 'var(--deep-blue)', border: '1px solid #e2e8f0' }}>Contáctame</a>
            </div>
          </motion.div>
        </section>

        {/* Bento Services Section */}
        <section id="servicios" className="services container">
          <motion.div className="section-header" {...fadeUp}>
            <h2>Especialidades Premium</h2>
            <p style={{ color: 'var(--text-muted)' }}>Soluciones académicas integrales para cada etapa de tu formación.</p>
          </motion.div>

          <div className="bento-grid">
            {/* Matemáticas - Large Item */}
            <motion.div className="bento-item large" {...fadeUp}>
              <div className="icon-wrapper" style={{ background: '#E0F2FE' }}><Calculator size={32} /></div>
              <h3>Matemáticas y Cálculo</h3>
              <p>Domina desde álgebra básica hasta cálculo integral, diferencial y lineal. Metodología basada en la comprensión profunda, no en la memorización.</p>
              <ul style={{ marginTop: '20px', listStyle: 'none', color: 'var(--text-muted)' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}><Sparkles size={16} /> Geometría Euclidiana</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}><Sparkles size={16} /> Cálculo Multivariado</li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><Sparkles size={16} /> Álgebra de Matrices</li>
              </ul>
            </motion.div>

            {/* Inglés - Wide Item */}
            <motion.div className="bento-item wide" {...fadeUp}>
              <div className="icon-wrapper" style={{ background: '#F0FFF4' }}><Languages size={32} /></div>
              <h3>Inglés Comunicativo</h3>
              <p>Habla con fluidez y seguridad. Enfocado en Speaking, Grammar y confianza para niños y adultos.</p>
            </motion.div>

            {/* Lectoescritura */}
            <motion.div className="bento-item" {...fadeUp}>
              <div className="icon-wrapper" style={{ background: '#FFF5F5' }}><BookOpen size={32} /></div>
              <h3>Lectoescritura</h3>
              <p>Comprensión crítica y redacción impecable.</p>
            </motion.div>

            {/* Tesis */}
            <motion.div className="bento-item" {...fadeUp}>
              <div className="icon-wrapper" style={{ background: '#FAF5FF' }}><FileText size={32} /></div>
              <h3>Proyectos y Tesis</h3>
              <p>Normas APA e IEEE con rigor académico.</p>
            </motion.div>

            {/* Universitario - Wide Item */}
            <motion.div className="bento-item wide" {...fadeUp}>
              <div className="icon-wrapper" style={{ background: '#E6E6FA' }}><GraduationCap size={32} /></div>
              <h3>Apoyo Universitario Elite</h3>
              <p>Preparación intensiva para parciales de Estadística y Probabilidad. Estrategias efectivas para aprobar tus materias más difíciles.</p>
            </motion.div>

            {/* Certificaciones / Logros */}
            <motion.div className="bento-item" {...fadeUp}>
              <div className="icon-wrapper" style={{ background: '#FFFBEB' }}><Award size={32} /></div>
              <h3>Garantía de Éxito</h3>
              <p>Cientos de estudiantes han mejorado sus promedios.</p>
            </motion.div>
          </div>
        </section>

        {/* Highlights Section */}
        <section className="highlight-section">
          <div className="container stats-grid">
            <div>
              <span className="stat-number">100%</span>
              <p>Personalizado</p>
            </div>
            <div>
              <span className="stat-number">+500</span>
              <p>Horas de Clase</p>
            </div>
            <div>
              <span className="stat-number">A+</span>
              <p>Calificación Promedio</p>
            </div>
            <div>
              <span className="stat-number">24/7</span>
              <p>Soporte por WhatsApp</p>
            </div>
          </div>
        </section>

        {/* Why choose Wendy */}
        <section className="container" style={{ padding: '80px 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '60px', alignItems: 'center' }}>
            <motion.div {...fadeUp}>
              <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontFamily: 'var(--font-display)' }}>¿Por qué elegir mis tutorías?</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Entiendo que cada estudiante es único. Mi enfoque no se limita a resolver ejercicios, sino a construir bases sólidas de conocimiento y autoconfianza.</p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <Users color="var(--primary-blue)" />
                  <div>
                    <strong>Enfoque Humano</strong>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Empatía y paciencia como pilares de enseñanza.</p>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '15px' }}>
                  <Clock color="var(--primary-blue)" />
                  <div>
                    <strong>Optimización de Tiempo</strong>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Métodos de estudio eficientes para aprender más en menos tiempo.</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              style={{ position: 'relative' }}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div style={{ 
                width: '100%', 
                height: '400px', 
                background: 'linear-gradient(135deg, var(--primary-blue), var(--soft-lavender))',
                borderRadius: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <Sparkles size={100} style={{ opacity: 0.5 }} />
              </div>
              <div style={{ 
                position: 'absolute', 
                bottom: '-20px', 
                right: '-20px', 
                background: 'white', 
                padding: '30px', 
                borderRadius: '24px',
                boxShadow: var(--shadow-premium)
              }}>
                <p style={{ fontWeight: '700', fontSize: '1.2rem', color: 'var(--deep-blue)' }}>"Aprender es la mejor inversión"</p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>— Wendy Sarmiento</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA */}
        <section id="contacto" style={{ padding: '100px 0', textAlign: 'center' }}>
          <motion.div 
            className="container"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{ fontSize: '3.5rem', marginBottom: '1.5rem' }}>Empecemos Hoy</h2>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem' }}>No permitas que las dudas te detengan. Asegura tu éxito académico con un acompañamiento de primer nivel.</p>
            <a href="https://wa.me/tu-numero-aqui" className="btn-primary" style={{ padding: '20px 60px', fontSize: '1.3rem', display: 'inline-flex', alignItems: 'center', gap: '12px' }}>
              Agendar Sesión <ArrowRight size={24} />
            </a>
          </motion.div>
        </section>

        <footer>
          <div className="container">
            <p style={{ fontWeight: '700', fontSize: '1.5rem', color: 'var(--deep-blue)', marginBottom: '10px' }}>Wendy Sarmiento</p>
            <p style={{ color: 'var(--text-muted)' }}>Acompañamiento Académico Premium</p>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
              <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>Instagram</a>
              <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>LinkedIn</a>
              <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none' }}>WhatsApp</a>
            </div>
            <p style={{ marginTop: '40px', fontSize: '0.85rem', color: '#CBD5E0' }}>
              © 2026 Diseñado para la excelencia académica. Todos los derechos reservados.
            </p>
          </div>
        </footer>
      </div>
    </HelmetProvider>
  );
}

export default App;
