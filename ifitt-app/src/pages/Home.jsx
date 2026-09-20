import { useEffect, useRef } from 'react'
import { MapPin, Phone, Mail } from 'lucide-react'

function Home() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.section-fade').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div style={styles.home}>
      {/* Hero Section */}
      <section id="hero" style={styles.hero}>
        <div style={styles.heroOverlay}></div>
        <div style={styles.heroPattern}></div>
        <div style={styles.heroContent}>
          <p style={styles.heroSubtitle}>Siłownia Premium</p>
          <h1 style={styles.heroTitle}>
            TRENING.<br />
            <span style={styles.accent}>SIŁA.</span><br />
            MOTYWACJA.
          </h1>
          <p style={styles.heroText}>
            Nowoczesna siłownia w Twoim mieście. Profesj sprzęt, przestrzeń i atmosfera, która pozwoli Ci osiągnąć cele.
          </p>
          <button style={styles.ctaButton}>Dołącz teraz</button>
        </div>
        <div style={styles.scrollIndicator}>
          <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-fade" style={styles.section} aria-labelledby="about-title">
        <div style={styles.container}>
          <h2 id="about-title" style={styles.sectionTitle}>
            O <span style={styles.accent}>klubie</span>
          </h2>
          <p style={styles.sectionSubtitle}>
            iFitt to nowoczesne siłownie w Andrychowie i Wadowicach. Łączymy profesjonalizm z przystępną ceną.
          </p>
          <div style={styles.locationsGrid}>
            <article style={styles.locationCard}>
              <div style={styles.locationHeader}>
                <div style={styles.locationIcon}>
                  <MapPin size={24} />
                </div>
                <h3 style={styles.locationTitle}>Andrychów</h3>
              </div>
              <p style={styles.locationAddress}>ul. Krakowska 50, 34-120 Andrychów</p>
              <p style={styles.locationDesc}>Przestrzeń 600m² z strefą cardio, siłową iCrossFit</p>
            </article>
            <article style={styles.locationCard}>
              <div style={styles.locationHeader}>
                <div style={styles.locationIcon}>
                  <MapPin size={24} />
                </div>
                <h3 style={styles.locationTitle}>Wadowice</h3>
              </div>
              <p style={styles.locationAddress}>ul. Dr. Putka 7, 34-100 Wadowice</p>
              <p style={styles.locationDesc}>Nowoczesny sprzęt Life Fitness i Matrix</p>
            </article>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section-fade" style={{ ...styles.section, ...styles.sectionDark }} aria-labelledby="pricing-title">
        <div style={styles.container}>
          <h2 id="pricing-title" style={styles.sectionTitle}>
            <span style={styles.accent}>Cennik</span>
          </h2>
          <p style={styles.sectionSubtitle}>
            Wybierz karnet dopasowany do Twoich potrzeb. Bez ukrytych kosztów.
          </p>
          <div style={styles.pricingGrid}>
            <article style={styles.pricingCard}>
              <h3 style={styles.pricingName}>Wejście jednorazowe</h3>
              <p style={styles.pricingBadge}>Idealne na start</p>
              <p style={styles.pricingPrice}>50<span style={styles.priceUnit}>zł</span></p>
              <ul style={styles.pricingFeatures}>
                <li>Dostęp do strefy cardio</li>
                <li>Dostęp do strefy siłowej</li>
                <li>Szatnia i prysznic</li>
              </ul>
              <button style={styles.pricingButton}>Dołącz teraz</button>
            </article>
            <article style={{ ...styles.pricingCard, ...styles.pricingCardFeatured }}>
              <div style={styles.popularBadge}>Bestseller</div>
              <h3 style={styles.pricingName}>Karnet roczny</h3>
              <p style={styles.pricingBadge}>Najlepsza cena</p>
              <p style={styles.pricingPrice}>185<span style={styles.priceUnit}>zł</span><span style={styles.perMonth}>/mc</span></p>
              <ul style={styles.pricingFeatures}>
                <li>Nielimitowany dostęp</li>
                <li>Cały rok treningów</li>
                <li>Priorytet wejścia</li>
                <li>Szatnia i prysznic</li>
                <li>Brak wpisowego</li>
              </ul>
              <button style={{ ...styles.pricingButton, ...styles.ctaButton }}>Dołącz teraz</button>
            </article>
            <article style={styles.pricingCard}>
              <h3 style={styles.pricingName}>Karnet miesięczny</h3>
              <p style={styles.pricingBadge}>Pełny dostęp</p>
              <p style={styles.pricingPrice}>200<span style={styles.priceUnit}>zł</span></p>
              <ul style={styles.pricingFeatures}>
                <li>Nielimitowany dostęp</li>
                <li>Strefa cardio i siłowa</li>
                <li>Strefa funkcjonalna</li>
                <li>Szatnia i prysznic</li>
              </ul>
              <button style={styles.pricingButton}>Dołącz teraz</button>
            </article>
          </div>
        </div>
      </section>

      {/* Hours Section */}
      <section id="hours" className="section-fade" style={styles.section} aria-labelledby="hours-title">
        <div style={styles.container}>
          <h2 id="hours-title" style={styles.sectionTitle}>
            Godziny <span style={styles.accent}>otwarcia</span>
          </h2>
          <p style={styles.sectionSubtitle}>
            Trenuj kiedy chcesz. Elastyczne godziny dopasowane do Twojego grafiku.
          </p>
          <div style={styles.hoursTable}>
            <table style={styles.hoursTableInner}>
              <tbody>
                <tr style={styles.hoursRow}>
                  <td style={styles.hoursDay}>Poniedziałek – Piątek</td>
                  <td style={styles.hoursTime}>6:00 – 22:30</td>
                </tr>
                <tr style={styles.hoursRow}>
                  <td style={styles.hoursDay}>Sobota</td>
                  <td style={styles.hoursTime}>07:00 – 16:00</td>
                </tr>
                <tr style={styles.hoursRow}>
                  <td style={styles.hoursDay}>Niedziela</td>
                  <td style={styles.hoursTime}>08:00 – 16:00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-fade" style={{ ...styles.section, ...styles.sectionDark }} aria-labelledby="contact-title">
        <div style={styles.container}>
          <h2 id="contact-title" style={styles.sectionTitle}>
            <span style={styles.accent}>Kontakt</span>
          </h2>
          <p style={styles.sectionSubtitle}>
            Skontaktuj się z nami. Chętnie odpowiemy na wszystkie pytania.
          </p>
          <div style={styles.contactGrid}>
            <article style={styles.contactCard}>
              <h3 style={styles.contactTitle}>
                <span style={styles.dot}></span>
                Andrychów
              </h3>
              <address style={styles.contactInfo}>
                <p style={styles.contactItem}>
                  <MapPin size={20} />
                  ul. Krakowska 50, 34-120 Andrychów
                </p>
                <p style={styles.contactItem}>
                  <Phone size={20} />
                  <a href="tel:+48696458161" style={styles.contactLink}>696 458 161</a>
                </p>
                <p style={styles.contactItem}>
                  <Mail size={20} />
                  <a href="mailto:recepcjaifitt@gmail.com" style={styles.contactLink}>recepcjaifitt@gmail.com</a>
                </p>
              </address>
            </article>
            <article style={styles.contactCard}>
              <h3 style={styles.contactTitle}>
                <span style={styles.dot}></span>
                Wadowice
              </h3>
              <address style={styles.contactInfo}>
                <p style={styles.contactItem}>
                  <MapPin size={20} />
                  ul. Dr. Putka 7, 34-100 Wadowice
                </p>
                <p style={styles.contactItem}>
                  <Phone size={20} />
                  <a href="tel:+48666867396" style={styles.contactLink}>666 867 396</a>
                </p>
                <p style={styles.contactItem}>
                  <Mail size={20} />
                  <a href="mailto:recepcjaifitt@gmail.com" style={styles.contactLink}>recepcjaifitt@gmail.com</a>
                </p>
              </address>
            </article>
          </div>
        </div>
      </section>
    </div>
  )
}

const styles = {
  home: {
    paddingTop: '60px',
  },
  hero: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
  },
  heroOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(180deg, rgba(10, 10, 10, 0.8) 0%, rgba(26, 26, 26, 0.9) 100%)',
  },
  heroPattern: {
    position: 'absolute',
    inset: 0,
    opacity: 0.1,
    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23f97316' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
  },
  heroContent: {
    position: 'relative',
    zIndex: 10,
    textAlign: 'center',
    padding: '0 1rem',
    maxWidth: '800px',
  },
  heroSubtitle: {
    fontFamily: "'Oswald', sans-serif",
    color: '#f97316',
    fontSize: '1rem',
    letterSpacing: '0.3em',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  heroTitle: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: '3rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    lineHeight: 1.1,
    marginBottom: '1.5rem',
  },
  accent: {
    color: '#f97316',
  },
  heroText: {
    color: '#a3a3a3',
    fontSize: '1.125rem',
    maxWidth: '500px',
    margin: '0 auto 2rem',
  },
  ctaButton: {
    background: '#f97316',
    color: '#ffffff',
    border: 'none',
    fontFamily: "'Oswald', sans-serif",
    fontSize: '1.125rem',
    padding: '1rem 2.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontWeight: 600,
    cursor: 'pointer',
    boxShadow: '0 0 20px rgba(249, 115, 22, 0.4)',
    transition: 'all 0.3s ease',
  },
  scrollIndicator: {
    position: 'absolute',
    bottom: '2rem',
    left: '50%',
    transform: 'translateX(-50%)',
    color: '#a3a3a3',
    animation: 'bounce 2s infinite',
  },
  section: {
    padding: '5rem 1rem',
  },
  sectionDark: {
    background: '#1a1a1a',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  sectionTitle: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: '2.5rem',
    fontWeight: 700,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  sectionSubtitle: {
    color: '#a3a3a3',
    textAlign: 'center',
    maxWidth: '500px',
    margin: '0 auto 4rem',
  },
  locationsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  locationCard: {
    background: '#1a1a1a',
    padding: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease',
  },
  locationHeader: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
  },
  locationIcon: {
    width: '48px',
    height: '48px',
    background: 'rgba(249, 115, 22, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#f97316',
  },
  locationTitle: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: '1.5rem',
    fontWeight: 700,
    textTransform: 'uppercase',
  },
  locationAddress: {
    color: '#a3a3a3',
    marginBottom: '0.5rem',
  },
  locationDesc: {
    color: '#a3a3a3',
  },
  pricingGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  pricingCard: {
    background: '#0a0a0a',
    padding: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    textAlign: 'center',
    transition: 'all 0.3s ease',
  },
  pricingCardFeatured: {
    border: '2px solid #f97316',
  },
  popularBadge: {
    position: 'absolute',
    top: '-12px',
    left: '50%',
    transform: 'translateX(-50%)',
    background: '#f97316',
    color: '#0a0a0a',
    fontFamily: "'Oswald', sans-serif",
    fontSize: '0.75rem',
    padding: '0.25rem 1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontWeight: 700,
  },
  pricingName: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: '1.5rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
  },
  pricingBadge: {
    color: '#a3a3a3',
    fontSize: '0.875rem',
    marginBottom: '1.5rem',
  },
  pricingPrice: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: '3rem',
    fontWeight: 700,
    color: '#f97316',
    marginBottom: '2rem',
  },
  priceUnit: {
    fontSize: '1.5rem',
  },
  perMonth: {
    fontSize: '1rem',
    color: '#a3a3a3',
  },
  pricingFeatures: {
    listStyle: 'none',
    padding: 0,
    marginBottom: '2rem',
    color: '#a3a3a3',
    fontSize: '0.875rem',
  },
  pricingButton: {
    width: '100%',
    background: '#f97316',
    color: '#ffffff',
    border: 'none',
    fontFamily: "'Oswald', sans-serif",
    fontSize: '0.875rem',
    padding: '0.75rem 1.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  },
  hoursTable: {
    maxWidth: '400px',
    margin: '0 auto',
    background: '#1a1a1a',
    padding: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  hoursTableInner: {
    width: '100%',
  },
  hoursRow: {
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  },
  hoursDay: {
    padding: '0.75rem 0',
    color: '#a3a3a3',
  },
  hoursTime: {
    padding: '0.75rem 0',
    textAlign: 'right',
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 700,
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '2rem',
  },
  contactCard: {
    background: '#0a0a0a',
    padding: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  contactTitle: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: '1.5rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: '1.5rem',
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
  },
  dot: {
    width: '12px',
    height: '12px',
    background: '#f97316',
  },
  contactInfo: {
    fontStyle: 'normal',
  },
  contactItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    marginBottom: '1rem',
    color: '#a3a3a3',
  },
  contactLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontFamily: "'Oswald', sans-serif",
    fontWeight: 700,
  },
}

export default Home