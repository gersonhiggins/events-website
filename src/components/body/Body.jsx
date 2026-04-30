import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import initAnimateOnView from '../../animateOnView';
import images from '../../constants/images';
import './Body.css'

function LazyBgSection({ bg, children }) {
  const [visible, setVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        },
        { rootMargin: '200px', threshold: 0.1 }
      )
      observer.observe(el)
      return () => observer.disconnect()
    }

    setVisible(true)
  }, [])

  return (
    <section className="parallax-slide">
      <div
        ref={ref}
        className="fixed-parallax"
        style={{
          backgroundImage: visible
            ? `linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45)), url(${bg})`
            : 'linear-gradient(rgba(0,0,0,0.45), rgba(0,0,0,0.45))',
        }}
      >
        {children}
      </div>
    </section>
  )
}

export default function Body() {
  useEffect(() => {
    const opts = { root: null, rootMargin: '0px', threshold: 0.15 }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const el = entry.target
        if (entry.isIntersecting) {
          const dir = el.dataset.direction || 'left'
          el.classList.remove(dir === 'left' ? 'hidden-left' : 'hidden-right')
          el.classList.add(dir === 'left' ? 'reveal-left' : 'reveal-right')
        }
      })
    }, opts)

    const sections = document.querySelectorAll('[data-animated]')
    sections.forEach(s => {
      const dir = s.dataset.direction || 'left'
      s.classList.add(dir === 'left' ? 'hidden-left' : 'hidden-right')
      observer.observe(s)
    })

    const cleanupAnimate = initAnimateOnView();
    return () => { observer.disconnect(); if (cleanupAnimate && cleanupAnimate.disconnect) cleanupAnimate.disconnect(); }
  }, [])

  return (
    <main>
      <LazyBgSection bg={images.bg1}>
        <div className="slide-overlay">
          <img src={images.logo} className='logo' alt="Eventos Inolvidables" />
          <h1 data-animate-on-view data-animation="fade-left" data-delay="150ms">Eventos inolvidables hechos a tu medida</h1>
          <p data-animate-on-view data-animation="fade-left" data-delay="250ms">Producimos y ejecutamos bodas, cumpleaños y eventos corporativos, todo incluido con atención en cada detalle.</p>
          <div className="hero-ctas" data-animate-on-view data-animation="fade-up" data-delay="350ms">
            <Link to="/presupuesto" className="btn primary">Calcular presupuesto</Link>
            <a href="/#contacto" className="btn ghost">Contactar</a>
          </div>
        </div>
      </LazyBgSection>

      <LazyBgSection bg={images.bg6}>
        <div className="slide-overlay" data-animate-on-view data-animation="fade-right" data-delay="150ms">
          <h2>Casa Grande — tu lugar ideal</h2>
          <p>Un espacio cálido y flexible que se adapta a ceremonias íntimas o grandes celebraciones. Te ayudamos a escoger montaje, iluminación y catering para que todo encaje.</p>
          <div className="feature-list">
            <div className="feature"><p>🍽️ Cocina propia y menú a medida</p></div>
            <div className="feature"><p>🎶 Sonido e iluminación profesional</p></div>
            <div className="feature"><p>🎀 Decoración personalizada</p></div>
          </div>
          <Link to="/galeria" className="btn primary small">Ver Galeria</Link>
        </div>
      </LazyBgSection>

      <LazyBgSection bg={images.bg3}>
        <div className="slide-overlay" data-animate-on-view data-animation="fade-left" data-delay="150ms">
          <h2>Servicios destacados</h2>
          <p>Planificación integral, catering personalizado, coodinación del día y atención 24/7 para tu tranquilidad.</p>
          <ul className="services">
            <li><p><strong>Bodas:</strong> Ceremonia, banquete y fiesta.</p></li>
            <li><p><strong>Cumpleaños:</strong> Desde fiestas infantiles hasta 50 años.</p></li>
            <li><p><strong>Eventos Corporativos:</strong> Formación, lanzamientos y cócteles.</p></li>
          </ul>
        </div>
      </LazyBgSection>

      <LazyBgSection bg={images.bg5}>
        <div className="slide-overlay" data-animate-on-view data-animation="fade-up" data-delay="150ms">
          <h2>Lo que dicen nuestros clientes</h2>
          <blockquote>“Gracias a Casa Grande nuestra boda fue perfecta. Cada detalle superó nuestras expectativas.” — Ana y Luis</blockquote>
          <blockquote>“Profesionales, atentos y creativos. Recomendados 100%.” — Corporativo TechSol</blockquote>
        </div>
      </LazyBgSection>

      <LazyBgSection bg={images.bg2}>
        <div className="slide-overlay" data-animate-on-view data-animation="fade-right" data-delay="150ms">
          <h2>Reserva tu fecha</h2>
          <p>Escríbenos o solicita un presupuesto online para ver disponibilidad y opciones. Respondemos en menos de 24h.</p>
          <div className="hero-ctas">
            <Link to="/presupuesto" className="btn primary">Calcular presupuesto</Link>
            <a className="btn ghost" href="mailto:higgins21alexandra@gmail.com">Enviar email</a>
          </div>
          <p className="muted">Tel: 0414 302 5558 <br /> Email: higgins21alexandra@gmail.com</p>
        </div>
      </LazyBgSection>
    </main>
  )
}
