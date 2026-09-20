import { useState } from 'react'
import { Dumbbell, Users, ClipboardList, Apple, Activity, Heart, Zap, X } from 'lucide-react'

function Offer() {
  const [selectedService, setSelectedService] = useState(null)

  const services = [
    {
      icon: <Zap size={32} />,
      title: 'Trening EMS',
      shortDesc: 'Elektrostymulacja mięśni - nowoczesna metoda treningowa.',
      description: 'Elektrostymulacja mięśni (EMS) to innowacyjna metoda treningowa, która wykorzystuje impulsy elektryczne do intensywnego pobudzenia mięśni. Jedna 20-minutowa sesja EMS może równać się 3 godzinom tradycyjnego treningu na siłowni.',
      features: [
        '20 min trening = 3 godziny na siłowni',
        'Personalizowany program',
        'Certyfikowany trener EMS',
        'Natychmiastowe efekty',
      ],
      details: `Trening EMS to idealne rozwiązanie dla osób, które chcą osiągnąć maksymalne efekty w minimalnym czasie. Specjalny strój z elektrodami wysyła impulsy elektryczne, które powodują mimowolne skurcze wszystkich grup mięśniowych jednocześnie.

**Jak wygląda trening?**
1. Zakładasz specjalny strój EMS
2. Trener podłącza elektrody
3. Przez 20 minut wykonujesz proste ruchy pod kontrolą trenera
4. Mięśnie pracują na 100% przez całą sesję

**Korzyści:**
- Oszczędność czasu
- Intensywniejsze oddziaływanie na mięśnie
- Mniejsze obciążenie stawów
- Szybsze rezultaty
- Profilaktyka przeciwcellulitowa

**Przeciwwskazania:**
- Ciąża
- Choroby serca
- Epilepsja
- Nowotwory
- Metalowe implanty`,
      pricing: 'Od 80 zł za sesję | Pakiety: 10 sesji - 700 zł',
    },
    {
      icon: <Users size={32} />,
      title: 'Trening Personalny',
      shortDesc: 'Indywidualne podejście do Twoich celów z certyfikowanym trenerem.',
      description: 'Trening personalny to najskuteczniejsza forma treningu. Twój własny trener opracowuje plan dopasowany do Twoich celów, czuwa nad prawidłową techniką i motywuje Cię do działania.',
      features: [
        'Indywidualny plan treningowy',
        'Korekta techniki',
        'Ciągła motywacja',
        'Elastyczne godziny',
      ],
      details: `Nasz certyfikowany trenerpersonalny będzie Twoim przewodnikiem na drodze do wymarzonej formy.

**Co otrzymujesz?**
- Konsultacja początkowa (analiza składu ciała, wywiad zdrowotny)
- Indywidualny plan treningowy
- Instruktarz ćwiczeń
- Monitoring postępów
- Dostosowywanie programu

**Dlaczego warto?**
- Efektywniejszy trening (nawet 30% lepsze wyniki)
- Bezpieczeństwo (poprawna technika)
- Motywacja (trener nie pozwoli ci się poddać)
- Oszczędność czasu (krótsza sesja)

**Jak wygląda współpraca?**
1. Konsultacja: Twoje cele, poziom, możliwości czasowe
2. Plan: Dostosowany do Twoich potrzeb
3. Trening: 45-60 minut pod okiem trenera
4. Postęp: Regularna ewaluacja wyników`,
      pricing: 'Od 100 zł za sesję | Pakiety: 10 sesji - 900 zł',
    },
    {
      icon: <ClipboardList size={32} />,
      title: 'Plany Treningowe',
      shortDesc: 'Profesjonalne plany treningowe dopasowane do Twoich celów.',
      description: 'Otrzymaj profesjonalnie opracowany plan treningowy, który przeprowadzi Cię przez transformację. Plany dostosowane do Twojego poziomu i celów - czy to odchudzanie, budowa masy, czy poprawa kondycji.',
      features: [
        'Dostosowane do celów',
        'Instrukcje wideo',
        'Progresja obciążeń',
        'Wsparcie online',
      ],
      details: `Profesjonalny plan treningowy to podstawa skutecznego treningu. Otrzymujesz wszystko czego potrzebujesz do samodzielnego treningu.

**Co zawiera plan?**
- Szczegółowy opis ćwiczeń
- Instrukcje wideo
- Liczba serii i powtórzeń
- Czas odpoczynku
- Progresja (zwiększanie obciążeń)
- Dni treningowe i restowe

**Dla kogo?**
- Początkujący (plan na start)
- Zaawansowani (plan Hipertrofia)
- Odchudzanie (plan HIIT)
- Kondycja (plan wytrzymałościowy)

**Jak to działa?**
1. Wybierasz cel
2. Określasz poziom
3. My tworzymy plan
4. otrzymujesz access do platformy
5. Trenujesz i raportujesz postępy`,
      pricing: '299 zł - plan miesięczny | 799 zł - plan roczny',
    },
    {
      icon: <Apple size={32} />,
      title: 'Plany Żywieniowe',
      shortDesc: 'Zdrowe odżywianie to 70% sukcesu - otrzymaj spersonalizowaną dietę.',
      description: 'Zdrowe odżywianie to fundament sukcesu. Nasz dietetyk opracuje plan żywieniowy dopasowany do Twoich preferencji, celów i stylu życia.',
      features: [
        'Indywidualna dieta',
        'Przepisy fitness',
        'Lista zakupów',
        'Konsultacje online',
      ],
      details: `70% sukcesu to dieta. Same ćwiczenia nie wystarczą. Otrzymaj plan żywieniowy, który pozwoli Ci osiągnąć cele.

**Co otrzymujesz?**
- Wywiad żywieniowy
- Analiza zapotrzebowania
- Indywidualny plan żywieniowy
- Listę produktów
- Przepisy fit
- Konsultacje

**Rodzaje diet:**
- Na masę (bulk)
- Redukcyjna (odchudzanie)
- Utrzymanie
- Sportowa (dla sportowców)
- Bezglutenowa / vega

**Jak to działa?**
1. Wywiad (preferencje, alergie, cel)
2. Analiza (zapotrzebowanie kaloryczne)
3. Plan (dostosowane do Ciebie)
4. Wdrożenie (codzienna dieta)
5. Kontrola (regularne check-in)

**Dlaczego warto?**
- Skuteczność potwierdzona badaniami
- Smaczne przepisy
- Elastyczność
- Wsparcie`,
      pricing: '249 zł - konsultacja | 399 zł - pełny plan',
    },
    {
      icon: <Activity size={32} />,
      title: 'Zajecia Fitness',
      shortDesc: 'Różnorodne zajęcia grupowe - od aerobiku po crossfit.',
      description: 'Różnorodne zajęcia grupowe, które urozmaicą Twój trening. Trenuj z innymi i czerp z nich motywację. Od energetycznego aerobiku po intensywny crossfit.',
      features: [
        'CrossFit',
        'HIIT',
        'Trening obwodowy',
        'Joga fitness',
      ],
      details: `Zajęcia grupowe to świetny sposób na zmotywowanie się do treningu. Atmosfera w grupie dodaje energii!

**Oferowane zajęcia:**

**CrossFit**
- Funkcjonalny trening
- Wszechstronny rozwój
- Społeczność
- Indywidualne podejście
- Cena: w cenie karnetu

**HIIT**
- Wysoka intensywność
- Spalanie tłuszczu
- Krótki czas (30 min)
- Wymagający
- Cena: w cenie karnetu

**Trening obwodowy**
- Stacje treningowe
- Różnorodność
- Wszechstronność
- Dla każdego poziomu

**Joga fitness**
- Elastyczność
- Relaksacja
- Oddech
- Równowaga
- Wszystkie zajęcia w cenie karnetu miesięcznego!`,
      pricing: 'W cenie karnetu | Open: 30 zł za zajęcia',
    },
    {
      icon: <Dumbbell size={32} />,
      title: 'Siłownia',
      shortDesc: 'Nowoczesna siłownia z sprzętem premium Life Fitness i Matrix.',
      description: 'Nowoczesna siłownia wyposażona w profesjonalny sprzęt Life Fitness i Matrix. Strefa wolnych ciężarów, strefa maszyn, strefa funkcjonalna - wszystko czego potrzebujesz.',
      features: [
        'Sprzęt premium',
        'Strefa cardio',
        'Strefa siłowa',
        'Strefa funkcjonalna',
      ],
      details: `Nasza siłownia to prawdziwe laboratorium fitness. Sprzęt najwyższej klasy czeka na Ciebie.

**Strefa wolnych ciężarów:**
- Hantle 1-50 kg
- Sztangi proste i łamane
- Ławki skośne
- Stojaki do przysiadów
- Maski treningowe

**Strefa maszyn:**
- Life Fitness
- Matrix
- Hammer Strength
- Cybex

**Strefa funkcjonalna:**
- Kettlebelle
- Tires
- Pali
- Drabinki
- Stacje do TRX

**Wyposażenie:**
- Pełny sprzęt do ćwiczeń
- Pianki i role
- Opaski treningowe
- Trenażery

**Dodatki:**
- Szatnie i prysznice
- Ręczniki
- Woda
- Muzyka

Godziny otwarcia: 6:00-22:30`,
      pricing: 'W cenie karnetu | Siłownia dostępna od 200 zł/mc',
    },
    {
      icon: <Heart size={32} />,
      title: 'Strefa Cardio',
      shortDesc: 'Nowoczesna strefa cardio z najnowszym sprzętem.',
      description: 'Strefa cardio wyposażona w najnowszy sprzęt do ćwiczeń wytrzymałościowych. Bieżnie, rowery, wioślarze - wszystko do poprawy kondycji.',
      features: [
        'Bieżnie profesjonalne',
        'Rowery stacjonarne',
        'Elliptical',
        'Wioślarze',
      ],
      details: `Popraw swoją kondycję w nowoczesnej strefie cardio.

**Sprzęt:**

**Bieżnie:**
- Life Fitness Run CX
- Matrix T7500
- Technogym
- Programy treningowe
- Pomiar tętna
- Prędkość do 20 km/h

**Rowery:**
- Spin bike
- Recumbent
- Upright
- Pomiar mocy
- Regulacja oporu

**Elliptical:**
- Elipsometr
- Płynny ruch
- Mały wpływ na stawy
- Pomiar tętna

**Wioślarze:**
- Concept2
- WaterRower
- Pełny trening ciała
- Równoważenie

**Programy:**
- Interwały
- Podjazdy
- Spalanie
- Wytrzymałość

**Monitorowanie:**
- Tętno (pas)
- Kalorie
- Czas
- Dystans

Trenuj efektywnie i bezpiecznie!`,
      pricing: 'W cenie karnetu | Open: w cenie wejścia',
    },
  ]

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Nasza <span style={styles.accent}>Oferta</span>
        </h1>
        <p style={styles.heroText}>
          Wszystko czego potrzebujesz do osiągnięcia formy. Profesjonalne usługi treningowe i dietetyczne.
        </p>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.grid}>
            {services.map((service, index) => (
              <article 
                key={index} 
                style={styles.card}
                onClick={() => setSelectedService(service)}
              >
                <div style={styles.iconBox}>{service.icon}</div>
                <h2 style={styles.cardTitle}>{service.title}</h2>
                <p style={styles.cardDesc}>{service.shortDesc}</p>
                <ul style={styles.featuresList}>
                  {service.features.map((feature, i) => (
                    <li key={i} style={styles.featureItem}>
                      {feature}
                    </li>
                  ))}
                </ul>
                <p style={styles.pricing}>{service.pricing}</p>
                <button style={styles.detailsButton}>Dowiedz się więcej</button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedService && (
        <div style={styles.modalOverlay} onClick={() => setSelectedService(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={() => setSelectedService(null)}>
              <X size={24} />
            </button>
            <div style={styles.modalIcon}>{selectedService.icon}</div>
            <h2 style={styles.modalTitle}>{selectedService.title}</h2>
            <p style={styles.modalDesc}>{selectedService.description}</p>
            
            <h3 style={styles.modalSubtitle}>Szczegóły:</h3>
            <div style={styles.modalContent}>
              {selectedService.details.split('\n').map((line, i) => {
                if (line.startsWith('**') && line.endsWith('**')) {
                  return <h4 key={i} style={styles.modalH4}>{line.replace(/\*\*/g, '')}</h4>
                }
                if (line.startsWith('- ') || line.startsWith('1. ')) {
                  return <li key={i} style={styles.modalListItem}>{line.replace(/^[-\d.]\s*/, '')}</li>
                }
                if (line.startsWith('  - ')) {
                  return <li key={i} style={styles.modalSubListItem}>{line.replace(/^\s+-\s*/, '')}</li>
                }
                return <p key={i} style={styles.modalP}>{line}</p>
              })}
            </div>
            
            <div style={styles.modalPricing}>{selectedService.pricing}</div>
          </div>
        </div>
      )}
    </div>
  )
}

const styles = {
  page: {
    paddingTop: '60px',
  },
  hero: {
    padding: '6rem 1rem 4rem',
    textAlign: 'center',
  },
  heroTitle: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: '3rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: '1rem',
  },
  accent: {
    color: '#f97316',
  },
  heroText: {
    color: '#a3a3a3',
    fontSize: '1.125rem',
    maxWidth: '500px',
    margin: '0 auto',
  },
  section: {
    padding: '4rem 1rem',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '2rem',
  },
  card: {
    background: '#1a1a1a',
    padding: '2rem',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
  },
  iconBox: {
    width: '64px',
    height: '64px',
    background: 'rgba(249, 115, 22, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#f97316',
    marginBottom: '1.5rem',
  },
  cardTitle: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: '1.5rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
  },
  cardDesc: {
    color: '#a3a3a3',
    fontSize: '0.9375rem',
    lineHeight: 1.6,
    marginBottom: '1rem',
  },
  featuresList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    marginBottom: '1rem',
  },
  featureItem: {
    color: '#a3a3a3',
    fontSize: '0.875rem',
    padding: '0.5rem 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
  },
  pricing: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: '1rem',
    color: '#f97316',
    fontWeight: 700,
    marginBottom: '1rem',
  },
  detailsButton: {
    background: 'rgba(249, 115, 22, 0.1)',
    border: '1px solid #f97316',
    color: '#f97316',
    fontFamily: "'Oswald', sans-serif",
    fontSize: '0.875rem',
    padding: '0.5rem 1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    cursor: 'pointer',
    width: '100%',
  },
  modalOverlay: {
    position: 'fixed',
    inset: 0,
    background: 'rgba(0, 0, 0, 0.9)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 100,
    padding: '1rem',
    overflowY: 'auto',
  },
  modal: {
    background: '#1a1a1a',
    padding: '2rem',
    borderRadius: '8px',
    maxWidth: '600px',
    width: '100%',
    position: 'relative',
    maxHeight: '90vh',
    overflowY: 'auto',
  },
  closeButton: {
    position: 'absolute',
    top: '1rem',
    right: '1rem',
    background: 'none',
    border: 'none',
    color: '#ffffff',
    cursor: 'pointer',
    padding: '0.5rem',
  },
  modalIcon: {
    width: '64px',
    height: '64px',
    background: 'rgba(249, 115, 22, 0.1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#f97316',
    marginBottom: '1rem',
  },
  modalTitle: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: '1.75rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
  },
  modalDesc: {
    color: '#a3a3a3',
    fontSize: '1rem',
    lineHeight: 1.6,
    marginBottom: '1.5rem',
  },
  modalSubtitle: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: '1rem',
    fontWeight: 700,
    color: '#f97316',
    marginBottom: '1rem',
    textTransform: 'uppercase',
  },
  modalContent: {
    color: '#a3a3a3',
    lineHeight: 1.8,
    marginBottom: '1.5rem',
  },
  modalH4: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: '0.95rem',
    fontWeight: 700,
    color: '#ffffff',
    marginTop: '1rem',
    marginBottom: '0.25rem',
  },
  modalListItem: {
    paddingLeft: '1rem',
    marginBottom: '0.25rem',
  },
  modalSubListItem: {
    paddingLeft: '2rem',
    marginBottom: '0.25rem',
    fontSize: '0.9rem',
  },
  modalP: {
    marginBottom: '0.5rem',
  },
  modalPricing: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: '1.25rem',
    color: '#f97316',
    fontWeight: 700,
    padding: '1rem',
    background: 'rgba(249, 115, 22, 0.1)',
    textAlign: 'center',
  },
}

export default Offer