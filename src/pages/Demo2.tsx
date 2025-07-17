import '../demo2/src/App.css';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image">
          <div className="image-placeholder">
            <span>Husbild här</span>
          </div>
        </div>
        <div className="hero-content">
          <h1 className="company-name">JP Byggservice</h1>
          <p className="welcome-text">
            Din lokala byggpartner i Stockholm med över 15 års erfarenhet.
          </p>
          <button className="quote-button">Begär offert</button>
        </div>
      </section>
      {/* Services Section */}
      <section className="services">
        <div className="services-grid">
          <div className="service-item">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="56px" viewBox="0 -960 960 960" width="56px" fill="#111"><path d="M756-120 537-339l84-84 219 219-84 84Zm-552 0-84-84 276-276-68-68-28 28-51-51v82l-28 28-121-121 28-28h82l-50-50 142-142q20-20 43-29t47-9q24 0 47 9t43 29l-92 92 50 50-28 28 68 68 90-90q-4-11-6.5-23t-2.5-24q0-59 40.5-99.5T701-841q15 0 28.5 3t27.5 9l-99 99 72 72 99-99q7 14 9.5 27.5T841-701q0 59-40.5 99.5T701-561q-12 0-24-2t-23-7L204-120Z"/></svg>
            </div>
            <h3>Totalentreprenad</h3>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="56px" viewBox="0 -960 960 960" width="56px" fill="#111"><path d="M400-120q-17 0-28.5-11.5T360-160v-480H160q0-83 58.5-141.5T360-840h240v120l120-120h80v320h-80L600-640v480q0 17-11.5 28.5T560-120H400Zm40-80h80v-240h-80v240Zm0-320h80v-240H360q-26 0-49 10.5T271-720h169v200Zm40 40Z"/></svg>
            </div>
            <h3>Renoveringar & tillbyggnader</h3>
          </div>
          <div className="service-item">
            <div className="service-icon">
              <svg xmlns="http://www.w3.org/2000/svg" height="56px" viewBox="0 -960 960 960" width="56px" fill="#111"><path d="M441-120v-86q-53-12-91.5-46T293-348l74-30q15 48 44.5 73t77.5 25q41 0 69.5-18.5T587-356q0-35-22-55.5T463-458q-86-27-118-64.5T313-614q0-65 42-101t86-41v-84h80v84q50 8 82.5 36.5T651-650l-74 32q-12-32-34-48t-60-16q-44 0-67 19.5T393-614q0 33 30 52t104 40q69 20 104.5 63.5T667-358q0 71-42 108t-104 46v84h-80Z"/></svg>
            </div>
            <h3>Gratis offert</h3>
          </div>
        </div>
      </section>
      {/* About Us Section */}
      <section className="about">
        <div className="about-container">
          <div className="about-text">
            <h2>Om oss</h2>
            <p>
              JP Byggservice är ett familjeägt byggföretag med rötter i Stockholm. Vi har över 15 års erfarenhet av byggbranschen och sätter alltid kvalitet, trygghet och kundnöjdhet i första rummet. Vår historia präglas av engagemang, yrkesstolthet och en vilja att alltid leverera det lilla extra. Vi tror på långsiktiga relationer och bygger med hjärta och precision.
            </p>
            <blockquote className="founder-quote">
              “Vi bygger med stolthet och precision.”
              <span className="founder">– Grundare</span>
            </blockquote>
          </div>
          <div className="about-image">
            <img src="/src/assets/team-placeholder.jpg" alt="Vårt team" />
            <div className="about-image-caption">Vårt team i arbetskläder</div>
          </div>
        </div>
      </section>
    </>
  )
}

function ServicesPage() {
  return (
    <section className="services-list-page">
      <h2>Tjänster</h2>
      <div className="services-list-grid">
        <div className="service-list-item">
          <div className="service-list-icon">🔨</div>
          <div>
            <h3>Renovering</h3>
            <p>Vi utför alla typer av renoveringar – från små förbättringar till totalrenoveringar av bostäder och lokaler.</p>
          </div>
        </div>
        <div className="service-list-item">
          <div className="service-list-icon">🏠</div>
          <div>
            <h3>Nybyggnation</h3>
            <p>Vi hjälper dig att förverkliga drömmen om ett nytt hem eller lokal, från idé till färdigt projekt.</p>
          </div>
        </div>
        <div className="service-list-item">
          <div className="service-list-icon">➕</div>
          <div>
            <h3>Tillbyggnader</h3>
            <p>Behöver du mer utrymme? Vi bygger ut och anpassar efter dina behov, alltid med kvalitet i fokus.</p>
          </div>
        </div>
        <div className="service-list-item">
          <div className="service-list-icon">🍽️</div>
          <div>
            <h3>Köks- och badrumsrenovering</h3>
            <p>Vi skapar funktionella och vackra kök och badrum, anpassade efter din stil och dina önskemål.</p>
          </div>
        </div>
        <div className="service-list-item">
          <div className="service-list-icon">🏡</div>
          <div>
            <h3>Fasad & tak</h3>
            <p>Vi tar hand om fasad- och takarbeten för att skydda och försköna din fastighet.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function ReferencesPage() {
  return (
    <section className="references-page">
      <h2>Referenser & Projekt</h2>
      <div className="projects-gallery">
        {/* Exempelprojekt, byt ut bilder och texter mot riktiga projekt */}
        <div className="project-card">
          <div className="project-images">
            <img src="/src/assets/fore1.jpg" alt="Före renovering" className="project-img before" />
            <img src="/src/assets/efter1.jpg" alt="Efter renovering" className="project-img after" />
          </div>
          <div className="project-desc">
            <h3>Villa i Bromma</h3>
            <p>Helrenovering av villa med nytt kök, badrum och fasad. Kunden önskade modern och ljus känsla.</p>
          </div>
        </div>
        <div className="project-card">
          <div className="project-images">
            <img src="/src/assets/fore2.jpg" alt="Före tillbyggnad" className="project-img before" />
            <img src="/src/assets/efter2.jpg" alt="Efter tillbyggnad" className="project-img after" />
          </div>
          <div className="project-desc">
            <h3>Utbyggnad i Täby</h3>
            <p>Tillbyggnad av vardagsrum och ny altan. Fokus på rymd och naturligt ljusinsläpp.</p>
          </div>
        </div>
      </div>
      <div className="customer-reviews">
        <h3>Kundrecensioner</h3>
        <div className="review-card">
          <p>“Fantastiskt resultat och mycket trevligt bemötande genom hela processen!”</p>
          <span className="review-author">– Anna, Bromma</span>
        </div>
        {/* Fler recensioner kan läggas till här */}
      </div>
    </section>
  )
}

function ContactPage() {
  return (
    <section className="contact-page">
      <h2>Kontakt</h2>
      <div className="contact-content">
        <div className="contact-form-section">
          <h3>Kontakta oss</h3>
          <form className="contact-form">
            <label>
              Namn
              <input type="text" name="name" required />
            </label>
            <label>
              E-post
              <input type="email" name="email" required />
            </label>
            <label>
              Meddelande
              <textarea name="message" rows={5} required />
            </label>
            <button type="submit">Skicka</button>
          </form>
        </div>
        <div className="contact-info-section">
          <h3>Våra uppgifter</h3>
          <ul className="contact-info-list">
            <li><strong>Telefon:</strong> 070-123 45 67</li>
            <li><strong>E-post:</strong> info@jpbyggservice.se</li>
            <li><strong>Adress:</strong> Byggvägen 1, 111 22 Stockholm</li>
          </ul>
          <div className="contact-map">
            <iframe
              title="Karta JP Byggservice"
              src="https://www.google.com/maps?q=Stockholm&output=embed"
              width="100%"
              height="180"
              style={{ border: 0, borderRadius: '10px' }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div className="contact-socials">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <span style={{
                display: 'inline-flex',
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: '#1877F2',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
              }}>
                <svg width="22" height="22" viewBox="0 0 320 512" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M279.14 288l14.22-92.66h-88.91V127.91c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S259.91 0 225.36 0c-73.22 0-121.09 44.38-121.09 124.72v70.62H22.89V288h81.38v224h100.2V288z"/>
                </svg>
              </span>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <span style={{
                display: 'inline-flex',
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: 'radial-gradient(circle at 30% 110%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%)',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 1px 4px rgba(0,0,0,0.08)'
              }}>
                <svg width="22" height="22" viewBox="0 0 448 448" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M224.1 141c-45.9 0-83.1 37.2-83.1 83.1s37.2 83.1 83.1 83.1 83.1-37.2 83.1-83.1-37.2-83.1-83.1-83.1zm0 136.2c-29.3 0-53.1-23.8-53.1-53.1s23.8-53.1 53.1-53.1 53.1 23.8 53.1 53.1-23.8 53.1-53.1 53.1zm146.4-136.2c0 10.5-8.5 19-19 19s-19-8.5-19-19 8.5-19 19-19 19 8.5 19 19zm76.1 19.2c-1.7-35.3-9.9-66.7-36.2-92.1C388.8 9.9 357.4 1.7 322.1 0 286.7-1.7 261.3 0 224 0s-62.7-1.7-98.1 0C90.6 1.7 59.2 9.9 33.9 36.2 9.9 59.2 1.7 90.6 0 125.9-1.7 161.3 0 186.7 0 224s-1.7 62.7 0 98.1c1.7 35.3 9.9 66.7 36.2 92.1 24 23.9 55.4 32.1 90.7 33.8 35.4 1.7 60.8 0 98.1 0s62.7 1.7 98.1 0c35.3-1.7 66.7-9.9 92.1-36.2 23.9-24 32.1-55.4 33.8-90.7 1.7-35.4 0-60.8 0-98.1s1.7-62.7 0-98.1zm-48.5 218.7c-7.8 19.6-22.9 34.7-42.5 42.5-29.4 11.7-99.2 9-132 9s-102.6 2.6-132-9c-19.6-7.8-34.7-22.9-42.5-42.5-11.7-29.4-9-99.2-9-132s-2.6-102.6 9-132c7.8-19.6 22.9-34.7 42.5-42.5 29.4-11.7 99.2-9 132-9s102.6-2.6 132 9c19.6 7.8 34.7 22.9 42.5 42.5 11.7 29.4 9 99.2 9 132s2.6 102.6-9 132z"/>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Demo2Navbar() {
  const location = useLocation();
  return (
    <nav className="main-nav" style={{ display: 'flex', gap: 32, justifyContent: 'center', fontWeight: 600, fontSize: 18 }}>
      <Link to="/demo2" className={location.pathname === '/demo2' ? 'active' : ''}>Hem</Link>
      <Link to="/demo2/tjanster" className={location.pathname === '/demo2/tjanster' ? 'active' : ''}>Tjänster</Link>
      <Link to="/demo2/referenser" className={location.pathname === '/demo2/referenser' ? 'active' : ''}>Referenser</Link>
      <Link to="/demo2/kontakt" className={location.pathname === '/demo2/kontakt' ? 'active' : ''}>Kontakt</Link>
    </nav>
  );
}

const Demo2 = () => (
  <>
    <Demo2Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="tjanster" element={<ServicesPage />} />
      <Route path="referenser" element={<ReferencesPage />} />
      <Route path="kontakt" element={<ContactPage />} />
      <Route path="*" element={<HomePage />} />
    </Routes>
  </>
);

export default Demo2; 