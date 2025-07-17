import React, { useRef, useEffect, useState } from 'react';
import '../demo1/src/App.css';
import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`top-menu${scrolled ? ' scrolled' : ''}`}>
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', position: 'relative' }}>
        <span style={{ fontWeight: 700, fontSize: 22, color: '#222', marginLeft: 32, letterSpacing: 1, position: 'absolute', left: 0, top: 0, height: '100%', display: 'flex', alignItems: 'center' }}>Unit bygg</span>
        <nav className="nav-links" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flex: 1, gap: 36 }}>
          <button
            className={`nav-btn${location.pathname === '/demo1' ? ' active' : ''}`}
            onClick={() => navigate('/demo1')}
            type="button"
          >
            Hem
          </button>
          <button
            className={`nav-btn${location.pathname === '/demo1/projekt' ? ' active' : ''}`}
            onClick={() => navigate('/demo1/projekt')}
            type="button"
          >
            Våra projekt
          </button>
          <button
            className={`nav-btn${location.pathname === '/demo1/omoss' ? ' active' : ''}`}
            onClick={() => navigate('/demo1/omoss')}
            type="button"
          >
            Om oss
          </button>
          <button
            className={`nav-btn${location.pathname === '/demo1/kontakt' ? ' active' : ''}`}
            onClick={() => navigate('/demo1/kontakt')}
            type="button"
          >
            Kontakta oss
          </button>
        </nav>
      </div>
    </header>
  );
}

function Home() {
  const dreamRef = useRef<HTMLDivElement>(null);
  const [dreamVisible, setDreamVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setDreamVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (dreamRef.current) observer.observe(dreamRef.current);
    return () => { if (dreamRef.current) observer.unobserve(dreamRef.current); };
  }, []);

  return (
    <div>
      <div className="main-wrapper home-hero">
        <Navbar />
        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">Unit bygg</h1>
            <p className="hero-desc">Vi hjälper dig med byggprojekt utan komplikationer. Kontakta oss för en kostnadsfri offert!</p>
            <button className="hero-btn">Offertförfrågan</button>
          </div>
        </div>
      </div>
      <div
        ref={dreamRef}
        className={`dream-section${dreamVisible ? ' visible' : ''}`}
        style={{
          width: '100%',
          background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1500&q=80') center/cover no-repeat`,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 300
        }}
      >
        <span style={{ color: '#fff', fontWeight: 700, fontSize: 36, textShadow: '0 2px 8px rgba(0,0,0,0.25)', marginBottom: 32 }}>
          låt oss bygga din dröm
        </span>
        <div style={{ maxWidth: 1100, width: '100%', display: 'flex', flexDirection: 'row', gap: 32, justifyContent: 'center', marginTop: 24 }}>
          <p style={{ color: '#fff', fontSize: 20, fontWeight: 400, margin: 0, flex: 1 }}>
            Vi erbjuder helhetslösningar för både små och stora byggprojekt – från idé till färdigt resultat.
          </p>
          <p style={{ color: '#fff', fontSize: 20, fontWeight: 400, margin: 0, flex: 1 }}>
            Med erfaren personal och fokus på kvalitet ser vi till att ditt projekt blir tryggt och smidigt.
          </p>
          <p style={{ color: '#fff', fontSize: 20, fontWeight: 400, margin: 0, flex: 1 }}>
            Kontakta oss idag för att diskutera dina byggdrömmar och få en kostnadsfri offert!
          </p>
        </div>
      </div>
    </div>
  );
}

function Projekt() {
  const images = [1, 2, 3, 4];
  return (
    <div className="forest-bg">
      <Navbar />
      <div className="forest-overlay">
        <div className="forest-content">
          <h1 style={{ fontSize: '54px', fontWeight: 700, margin: 0, marginBottom: 40 }}>Projekt</h1>
          <div className="projekt-grid">
            {images.map((num) => (
              <div key={num} className="card">
                <img
                  src={process.env.PUBLIC_URL + `/hus/${num}.jpeg`}
                  alt={`Projekt hus ${num}`}
                  className="card__img"
                />
                <div className="card__footer">
                  <span>se mer</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function OmOss() {
  return (
    <div className="forest-bg">
      <Navbar />
      <div className="forest-overlay">
        <div className="forest-content">
          <h1 style={{ fontSize: '54px', fontWeight: 700, margin: 0 }}>Om oss</h1>
        </div>
      </div>
    </div>
  );
}

function Kontakt() {
  return (
    <div className="forest-bg">
      <Navbar />
      <div className="forest-overlay">
        <div className="forest-content">
          <h1 style={{ fontSize: '54px', fontWeight: 700, margin: 0 }}>Kontakt</h1>
        </div>
      </div>
    </div>
  );
}

function Tjanster() {
  return (
    <div className="forest-bg">
      <Navbar />
      <div className="forest-overlay">
        <div className="forest-content">
          <h1 style={{ fontSize: '54px', fontWeight: 700, margin: 0 }}>Tjänster</h1>
        </div>
      </div>
    </div>
  );
}

const Demo1: React.FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="projekt" element={<Projekt />} />
    <Route path="tjanster" element={<Tjanster />} />
    <Route path="omoss" element={<OmOss />} />
    <Route path="kontakt" element={<Kontakt />} />
    <Route path="*" element={<Home />} />
  </Routes>
);

export default Demo1; 