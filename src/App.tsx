import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React, { Suspense } from 'react';
import './App.css';
import Demo1 from './pages/Demo1';
import Demo2 from './pages/Demo2';

function App() {
  const STARTSIDAN = (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      background: '#fff',
      color: '#222',
      fontFamily: 'Inter, Arial, sans-serif',
      padding: '48px 0',
    }}>
      <h1 style={{ fontSize: 44, fontWeight: 800, color: '#0a2e73', marginBottom: 8, marginTop: 24, letterSpacing: -1, textAlign: 'center' }}>Explore Our Demos</h1>
      <p style={{ fontSize: 20, color: '#2d3a5a', marginBottom: 40, textAlign: 'center' }}>
        See examples of website demos we provide for small businesses.
      </p>
      <div style={{ display: 'flex', gap: 24, marginBottom: 40 }}>
        <Link to="/demo1" style={{
          background: '#0a2e73', color: '#fff', fontWeight: 600, fontSize: 20, borderRadius: 8, padding: '16px 36px', textDecoration: 'none', boxShadow: '0 2px 8px rgba(10,46,115,0.08)', transition: 'background 0.2s',
        }}>Demo1</Link>
        <Link to="/demo2" style={{
          background: '#2563eb', color: '#fff', fontWeight: 600, fontSize: 20, borderRadius: 8, padding: '16px 36px', textDecoration: 'none', boxShadow: '0 2px 8px rgba(37,99,235,0.08)', transition: 'background 0.2s',
        }}>Demo2</Link>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 32,
        maxWidth: 900,
        width: '100%',
        margin: '0 auto 40px auto',
      }}>
        {/* E-commerce */}
        <div style={{
          background: 'rgba(255,255,255,0.35)',
          borderRadius: 20,
          boxShadow: '0 4px 24px rgba(10,46,115,0.08)',
          padding: 32,
          display: 'flex',
          alignItems: 'center',
          gap: 32,
          minHeight: 180,
          cursor: 'pointer',
          transition: 'box-shadow 0.2s',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1.5px solid rgba(255,255,255,0.45)',
        }}>
          <div style={{ fontSize: 44, color: '#2563eb' }}>🛍️</div>
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 700, margin: 0, color: '#0a2e73' }}>E-commerce</h2>
            <p style={{ fontSize: 16, color: '#2d3a5a', margin: '8px 0 0 0' }}>
              An online store demo with product listings, categories, and a modern design.
            </p>
          </div>
        </div>
        {/* Services */}
        <div style={{
          background: 'rgba(255,255,255,0.35)',
          borderRadius: 20,
          boxShadow: '0 4px 24px rgba(10,46,115,0.08)',
          padding: 32,
          display: 'flex',
          alignItems: 'center',
          gap: 32,
          minHeight: 180,
          cursor: 'pointer',
          transition: 'box-shadow 0.2s',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1.5px solid rgba(255,255,255,0.45)',
        }}>
          <div style={{ fontSize: 44, color: '#2563eb' }}>🔧</div>
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 700, margin: 0, color: '#0a2e73' }}>Services</h2>
            <p style={{ fontSize: 16, color: '#2d3a5a', margin: '8px 0 0 0' }}>
              A demo site for service providers highlighting offerings and contact action.
            </p>
          </div>
        </div>
        {/* Portfolio */}
        <div style={{
          background: 'rgba(255,255,255,0.35)',
          borderRadius: 20,
          boxShadow: '0 4px 24px rgba(10,46,115,0.08)',
          padding: 32,
          display: 'flex',
          alignItems: 'center',
          gap: 32,
          minHeight: 180,
          cursor: 'pointer',
          transition: 'box-shadow 0.2s',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1.5px solid rgba(255,255,255,0.45)',
        }}>
          <div style={{ fontSize: 44, color: '#2563eb' }}>🎨</div>
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 700, margin: 0, color: '#0a2e73' }}>Portfolio</h2>
            <p style={{ fontSize: 16, color: '#2d3a5a', margin: '8px 0 0 0' }}>
              A portfolio demo designed to showcase creative work projects.
            </p>
          </div>
        </div>
        {/* Restaurant */}
        <div style={{
          background: 'rgba(255,255,255,0.35)',
          borderRadius: 20,
          boxShadow: '0 4px 24px rgba(10,46,115,0.08)',
          padding: 32,
          display: 'flex',
          alignItems: 'center',
          gap: 32,
          minHeight: 180,
          cursor: 'pointer',
          transition: 'box-shadow 0.2s',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          border: '1.5px solid rgba(255,255,255,0.45)',
        }}>
          <div style={{ fontSize: 44, color: '#2563eb' }}>��️</div>
          <div>
            <h2 style={{ fontSize: 26, fontWeight: 700, margin: 0, color: '#0a2e73' }}>Restaurant</h2>
            <p style={{ fontSize: 16, color: '#2d3a5a', margin: '8px 0 0 0' }}>
              A demo for restaurants displaying menus, hours, and location.
            </p>
          </div>
        </div>
      </div>
      <p style={{ fontSize: 18, color: '#fff', marginTop: 32, fontWeight: 500 }}>
        Powered by <span style={{ fontWeight: 700, color: '#fff', background: '#1e4fa3', borderRadius: 6, padding: '2px 10px' }}>Swop.se</span>
      </p>
    </div>
  );

  return (
    <Router>
      <div style={{ width: '100vw', minHeight: '100vh', margin: 0, padding: 0 }}>
        <Suspense fallback={<div>Laddar...</div>}>
          <Routes>
            <Route path="/demo1/*" element={<Demo1 />} />
            <Route path="/demo2/*" element={<Demo2 />} />
            <Route path="/" element={STARTSIDAN} />
            <Route path="*" element={STARTSIDAN} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
