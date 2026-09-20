import { useState } from 'react'
import { X } from 'lucide-react'

function Blog() {
  const [selectedPost, setSelectedPost] = useState(null)

  const posts = [
    {
      id: 1,
      title: 'Jak zacząć treningi na siłowni?',
      excerpt: 'Kompletny przewodnik dla początkujących. Czego się spodziewać, jak ćwiczyć bezpiecznie i jakie ćwiczenia wybrać na start.',
      date: '15 kwietnia 2026',
      category: 'Dla początkujących',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a4a?w=400&h=300&fit=crop',
      content: `Trening na siłowni może wydawać się przytłaczający na początku, ale z odpowiednim przygotowaniem wszystko stanie się prostsze. Oto co musisz wiedzieć przed pierwszą wizytą:

**Przygotuj się mentalnie**
Nie porównuj się z innymi. Każdy kiedyś zaczynał. Twoja droga jest indywidualna.

**Pierwsze kroki**
1. Zacznij od rozgrzewki - 5-10 minut na bieżni
2. Naucz się podstawowych ćwiczeń: przysiady, pompki, martwy ciąg
3. Zacznij z lżejszymi ciężarami - technika jest ważniejsza niż waga
4. Rób przerwy między seriami (1-2 minuty)

**Czego unikać**
- Nie podnoś zbyt ciężkich hantli na start
- Nie trenuj codziennie - mięśnie potrzebują czasu na regenerację
- Nie zapominaj o rozgrzewce

**Ilość treningów**
Początkujący: 2-3 razy w tygodniu
Po miesiącu: 3-4 razy w tygodniu

Powodzenia!`
    },
    {
      id: 2,
      title: 'Dieta na masę - co jeść, by rosnąć?',
      excerpt: 'Przewodnik po żywieniu dla osób chcących zbudować masę mięśniową. Kalorie, białko, węglowodany - wszystko co musisz wiedzieć.',
      date: '10 kwietnia 2026',
      category: 'Żywienie',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17065?w=400&h=300&fit=crop',
      content: `Budowanie masy mięśniowej to w 70% odżywianie. Samo trenowanie nie wystarczy.

**Podstawowe zasady**

**Kalorie**
Aby rosnąć, musisz jeść więcej niż spalasz. Zapotrzebowanie = BMR + wydatek + 300-500 kcal

**Białko**
To budulec mięśni. Minimalnie 1.6-2g na kg masy ciała.
Źródła: kurczak, ryby, jaja, twaróg, rośliny strączkowe

**Węglowodany**
Dają energię do treningu. Jedz przed i po treningu.
Ryż, makaron, owies, ziemniaki, owoce

**Tłuszcze**
Nie eliminuj ich! 0.8-1g na kg masy ciała.
Orzechy, awokado, oliwa z oliwek

**Przykładowy dzień**
Śniadanie: owsianka + białko + owoce
II śniadanie: kanapki z kurczakiem
Obiad: ryż + kurczak + warzywa
Pre-trening: banan
Po treningu: białko + węglowodany
Kolacja: ryba + warzywa

**Suplementacja**
Kreatyna - wspiera siłę
Białko serwatkowe - ułatwia dostarczenie białka`
    },
    {
      id: 3,
      title: 'Trening EMS - czy warto?',
      excerpt: 'Elektrostymulacja mięśni zyskuje na popularności. Sprawdź czy trening EMS to dobry wybór dla Ciebie i jakie daje efekty.',
      date: '5 kwietnia 2026',
      category: 'Nowoczesne metody',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f20b?w=400&h=300&fit=crop',
      content: `Trening EMS (Electrical Muscle Stimulation) wykorzystuje impulsy elektryczne do stymulacji mięśni. Sesja 20 minut EMS może równać się 3 godzinom tradycyjnego treningu.

**Jak to działa?**
Specjalne elektrody wysyłają impulsy elektryczne, które powodują mimowolne skurcze mięśni. Mięśnie pracują intensywniej niż przy обычном treningu.

**Zalety**
- Oszczędność czasu (20 min = 3h)
- Precyzyjne targetowanie mięśni
- Mniejsze obciążenie stawów
- Szybsze efekty
- Idealne dla osób z ograniczonym czasem

**Dla kogo?**
- Osoby zapracowane
- Początkujący
- Osoby po kontuzjach (ostroznie)
- Sportowcy jako uzupełnienie

**Przeciwwskazania**
- Ciąża
- Choroby serca
- Choroby nowotworowe
- Epilepsja
- Metalowe implanty

**Czego się spodziewać?**
Pierwsze efekty po 4-6 sesjach. Warto wykupić pakiet 10-20 sesji.`
    },
    {
      id: 4,
      title: 'Jak schudnąć przy siłowni?',
      excerpt: 'Skuteczne strategie odchudzania z wykorzystaniem treningu siłowego i cardio. Jak łączyć ćwiczenia i dietę dla najlepszych efektów.',
      date: '1 kwietnia 2026',
      category: 'Odchudzanie',
      image: 'https://images.unsplash.com/photo-1517836357463-d25ddefac545?w=400&h=300&fit=crop',
      content: `Odchudzanie na siłowni wymaga połączenia dwóch elementów: treningu i diety.

**Trening siłowy**
Buduje mięśnie, które spalają kalorie nawet w spoczynku. Trenuj 3-4x w tygodniu, skupiając się na wielostawowych ćwiczeniach:
- Przysiady
- Martwy ciąg
- Wyciskanie
- Wiosłowanie

**Cardio**
Trening wytrzymałościowy spala kalorie. Rób 2-3x w tygodniu:
- Bieżnia: 20-40 minut
- Rower: 30 minut
- Elliptical: 30 minut

**HIIT**
Krótkie, intensywne interwały. 15-20 minut zmaksymalizuje spalanie.

**Dieta - najważniejszy element**
- Deficyt kaloryczny: 300-500 kcal dziennie
- Białko: 1.6-2g na kg masy
- Unikaj przetworzonej żywności
- Pij 2-3l wody dziennie

**Przykładowy plan**
Pon-Pt: Trening siłowy
Sr, Sob: Cardio lub HIIT
Nd: Odpoczynek

**Czego unikać**
- Głodówek
- Eliminowania makroskładników
- Nieregularnego jedzenia`
    },
    {
      id: 5,
      title: 'Rozgrzewka przed treningiem - dlaczego jest ważna?',
      excerpt: 'Prawidłowa rozgrzewka to podstawa bezpiecznego treningu. Zobacz jakie ćwiczenia wykonywać i jak długo trwać powinna rozgrzewka.',
      date: '28 marca 2026',
      category: 'Technika',
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e67?w=400&h=300&fit=crop',
      content: `Rozgrzewka to nie strata czasu - to inwestycja w Twoje bezpieczeństwo i efektywność.

**Dlaczego jest ważna?**
1. Zwiększa temperaturę mięśni
2. Poprawia elastyczność
3. Przygotowuje stawy
4. Zmniejsza ryzyko kontuzji
5. Poprawia wydajność

**Składniki dobrej rozgrzewki**

**5-10 minut cardio**
- Bieżnia
- Rower
- Skipping

**5 minut rozciągania dynamicznego**
- Wymachy nóg
- Krązenia bioder
- Ruchy ramion

**5 minut aktywacji**
- Plank
- Bodyweight squats
- Push-ups

**Czego unikać**
- Statycznego rozciągania na zimno
- Zbyt intensywnych ćwiczeń
- Pomijania rozgrzewki

**Rozgrzewka a kontuzje**
Badania pokazują, że 60% kontuzji można uniknąć dzięki proper rozgrzewce. To 10 minut, które mogą uchronić Cię przed miesiącami przerwy!

**Rozgrzewka a wydajność**
Rozgrzany mięsień pracuje mocniej. Możesz podnieść więcej, zrobić więcej powtórzeń.`
    },
    {
      id: 6,
      title: 'Suplementacja - co warto brać?',
      excerpt: 'Przegląd najpopularniejszych suplementów dietetycznych. Białko, kreatyna, witaminy - co faktycznie działa, a co to marketing?',
      date: '25 marca 2026',
      category: 'Suplementy',
      image: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=400&h=300&fit=crop',
      content: `Rynek suplementów jest przepełniony. Które naprawdę działają?

**Tier 1 - Działające**

**Kreatyna**
- Zwiększa siłę i moc
- Poprawia regenerację
- Wspiera mózg
- Najbadulej testowany suplement
- Dawka: 3-5g dziennie

**Białko serwatkowe**
- Ułatwia dostarczenie białka
- Wspiera regenerację
- Wygodne
- Wybieraj izolat lub koncentrat

**Witamina D3**
- Profilaktyka
- Kości, mięśnie, odporność
- Latem niepotrzebna (słońce)
- Dawka: 2000-4000 IU

**Tier 2 - Wart rozważenia**

**Omega-3**
- Wspiera serce
- Działa przeciwzapalnie
- Dawka: 2-3g EPA+DHA

**Beta-alanina**
- Wsparcie wytrzymałości
- Powoduje mrowienie (normalne)

**Tier 3 - Marketing**

**BCAA** - niepotrzebne przy dobrym białku
**L-karnityna** - nie działa
**HMB** - wątpliwe efekty
**Szelak** - marketing

**Pamiętaj**
Suplementy to uzupełnienie diety. Nie zastąpią:
- Zdrowego snu
- Regularnego treningu
- Dobrej diety`
    },
  ]

  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          <span style={styles.accent}>Blog</span> fitness
        </h1>
        <p style={styles.heroText}>
          Porady, tipsy i wiedza o treningu, diecie i zdrowym stylu życia.
        </p>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.grid}>
            {posts.map((post) => (
              <article key={post.id} style={styles.card}>
                <div className="blog-card-content" style={styles.cardContent}>
                  <img src={post.image} alt={post.title} className="blog-card-image" style={styles.cardImage} />
                  <div style={styles.cardText}>
                    <div style={styles.cardMeta}>
                      <span style={styles.category}>{post.category}</span>
                      <span style={styles.date}>{post.date}</span>
                    </div>
                    <h2 style={styles.cardTitle}>{post.title}</h2>
                    <p style={styles.cardExcerpt}>{post.excerpt}</p>
                    <button 
                      style={styles.readMore}
                      onClick={() => setSelectedPost(post)}
                    >
                      Czytaj dalej
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {selectedPost && (
        <div style={styles.modalOverlay} onClick={() => setSelectedPost(null)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button style={styles.closeButton} onClick={() => setSelectedPost(null)}>
              <X size={24} />
            </button>
            <img src={selectedPost.image} alt={selectedPost.title} style={styles.modalImage} />
            <span style={styles.category}>{selectedPost.category}</span>
            <h2 style={styles.modalTitle}>{selectedPost.title}</h2>
            <p style={styles.modalDate}>{selectedPost.date}</p>
            <div style={styles.modalContent}>
              {selectedPost.content.split('\n').map((line, i) => {
                if (line.startsWith('**') && line.endsWith('**')) {
                  return <h3 key={i} style={styles.modalSubtitle}>{line.replace(/\*\*/g, '')}</h3>
                }
                if (line.startsWith('- ') || line.startsWith('1. ')) {
                  return <li key={i} style={styles.modalListItem}>{line.replace(/^[-\d.]\s*/, '')}</li>
                }
                if (line.startsWith('  - ')) {
                  return <li key={i} style={styles.modalSubListItem}>{line.replace(/^\s+-\s*/, '')}</li>
                }
                return <p key={i} style={styles.modalText}>{line}</p>
              })}
            </div>
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
    padding: '1.5rem',
    border: '1px solid rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  cardImage: {
    width: '100%',
    height: '180px',
    objectFit: 'cover',
    borderRadius: '4px',
  },
  cardText: {
    flex: 1,
  },
  cardMeta: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '0.75rem',
  },
  category: {
    background: 'rgba(249, 115, 22, 0.1)',
    color: '#f97316',
    fontFamily: "'Oswald', sans-serif",
    fontSize: '0.75rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    padding: '0.25rem 0.75rem',
  },
  date: {
    color: '#a3a3a3',
    fontSize: '0.875rem',
  },
  cardTitle: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: '1.125rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: '0.75rem',
  },
  cardExcerpt: {
    color: '#a3a3a3',
    fontSize: '0.875rem',
    lineHeight: 1.5,
    marginBottom: '1rem',
  },
  readMore: {
    background: 'none',
    border: '1px solid #f97316',
    color: '#f97316',
    fontFamily: "'Oswald', sans-serif",
    fontSize: '0.875rem',
    padding: '0.5rem 1.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
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
  modalImage: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
    borderRadius: '4px',
    marginBottom: '1rem',
  },
  modalTitle: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: '1.5rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: '0.5rem',
  },
  modalDate: {
    color: '#a3a3a3',
    fontSize: '0.875rem',
    marginBottom: '1.5rem',
  },
  modalContent: {
    color: '#a3a3a3',
    lineHeight: 1.8,
  },
  modalSubtitle: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: '1rem',
    fontWeight: 700,
    color: '#f97316',
    marginTop: '1.5rem',
    marginBottom: '0.5rem',
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
  modalText: {
    marginBottom: '0.75rem',
  },
}

export default Blog