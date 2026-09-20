function Regulations() {
  return (
    <div style={styles.page}>
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          <span style={styles.accent}>Regulamin</span>
        </h1>
        <p style={styles.heroText}>
          Zasady korzystania z siłowni iFitt.
        </p>
      </section>

      <section style={styles.section}>
        <div style={styles.container}>
          <div style={styles.content}>
            <section style={styles.block}>
              <h2 style={styles.sectionTitle}>1. Postanowienia ogólne</h2>
              <ol style={styles.list}>
                <li>Regulamin określa zasady korzystania z usług siłowni iFitt.</li>
                <li>Z usług siłowni mogą korzystać osoby, które ukończyły 16 lat lub posiadają pisemną zgodę rodzica/opiekuna prawnego.</li>
                <li>Każdy członek zobowiązany jest do zapoznania się z regulaminem i przestrzegania jego postanowień.</li>
              </ol>
            </section>

            <section style={styles.block}>
              <h2 style={styles.sectionTitle}>2. Godziny otwarcia</h2>
              <ol style={styles.list}>
                <li>Siłownia czynna jest w godzinach:</li>
                <ul style={styles.subList}>
                  <li>Poniedziałek – Piątek: 6:00 – 22:30</li>
                  <li>Sobota: 07:00 – 16:00</li>
                  <li>Niedziela: 08:00 – 16:00</li>
                </ul>
                <li>Administracja zastrzega sobie prawo do zmiany godzin w dni świąteczne.</li>
              </ol>
            </section>

            <section style={styles.block}>
              <h2 style={styles.sectionTitle}>3. Karnety i opłaty</h2>
              <ol style={styles.list}>
                <li>Cennik usług dostępny jest w recepcji i na stronie internetowej.</li>
                <li>Karnet uprawnia do korzystania z siłowni w określonym okresie ważności.</li>
                <li>Opłata za karnet jest wnoszona z góry za cały okres.</li>
                <li>Karnet nie podlega zwrotowi w przypadku rezygnacji.</li>
              </ol>
            </section>

            <section style={styles.block}>
              <h2 style={styles.sectionTitle}>4. Zasady bezpieczeństwa</h2>
              <ol style={styles.list}>
                <li>Przed rozpoczęciem treningu należy zapoznać się z instrukcją obsługi urządzeń.</li>
                <li>W przypadku wątpliwości co do obsługi urządzenia należy poprosić o pomoc pracownika siłowni.</li>
                <li>Po zakończeniu treningu należy odłożyć ciężary na miejsce.</li>
                <li>Zabrania się używania urządzeń w sposób niezgodny z ich przeznaczeniem.</li>
              </ol>
            </section>

            <section style={styles.block}>
              <h2 style={styles.sectionTitle}>5. Odzież i obuwie</h2>
              <ol style={styles.list}>
                <li>Obowiązuje strój sportowy i czyste obuwie sportowe (zmiana obuwia przy wejściu).</li>
                <li>Nie wolno ćwiczyć w klapkach, sandałach ani boso.</li>
                <li>Zalecane jest posiadanie ręcznika do wycierania potu.</li>
              </ol>
            </section>

            <section style={styles.block}>
              <h2 style={styles.sectionTitle}>6. Przeciwskazania zdrowotne</h2>
              <ol style={styles.list}>
                <li>Osoby z przeciwskazaniami zdrowotnymi korzystają z siłowni na własną odpowiedzialność.</li>
                <li>Zalecamy konsultację z lekarzem przed rozpoczęciem treningów.</li>
                <li>W przypadku złego samopoczucia należy natychmiast przerwać trening.</li>
              </ol>
            </section>

            <section style={styles.block}>
              <h2 style={styles.sectionTitle}>7. Odpowiedzialność</h2>
              <ol style={styles.list}>
                <li>Siłownia nie ponosi odpowiedzialności za rzeczy pozostawione w szatni.</li>
                <li>Użytkownik ponosi odpowiedzialność za szkody wyrządzone z winy umyślnej lub niedbalstwa.</li>
                <li>Zalecamy korzystanie z szafek do przechowywania rzeczy wartościowych.</li>
              </ol>
            </section>

            <section style={styles.block}>
              <h2 style={styles.sectionTitle}>8. Zakazy</h2>
              <ol style={styles.list}>
                <li>Zabrania się:</li>
                <ul style={styles.subList}>
                  <li>Palenia tytoniu w lokalu siłowni</li>
                  <li>Wnoszenia alkoholu i środków odurzających</li>
                  <li>Używania sprzętu bez uprzedniego zapoznania się z instrukcją</li>
                  <li>Zajmowania urządzeń bez wykonywania ćwiczeń</li>
                  <li>Wprowadzania zwierząt</li>
                  <li>Robienia zdjęć bez zgody innych użytkowników</li>
                </ul>
              </ol>
            </section>

            <section style={styles.block}>
              <h2 style={styles.sectionTitle}>9. Rezygnacja i przerwy</h2>
              <ol style={styles.list}>
                <li>Rezygnacja z karnetu wymaga pisemnego zawiadomienia.</li>
                <li>Przerwa w trenowaniu nie przedłuża ważności karnetu.</li>
                <li>W przypadku kontuzji zalecamy przedłożenie zaświadczenia lekarskiego.</li>
              </ol>
            </section>

            <section style={styles.block}>
              <h2 style={styles.sectionTitle}>10. Postanowienia końcowe</h2>
              <ol style={styles.list}>
                <li>Regulamin wchodzi w życie z dniem ogłoszenia.</li>
                <li>Administracja zastrzega sobie prawo do zmiany regulaminu.</li>
                <li>Wszelkie zmiany ogłaszane są na tablicy informacyjnej i stronie internetowej.</li>
                <li>W sprawach nieuregulowanych decyduje dyrekcja siłowni.</li>
              </ol>
            </section>
          </div>
        </div>
      </section>
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
    padding: '2rem 1rem 4rem',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  content: {
    background: '#1a1a1a',
    padding: '3rem',
    border: '1px solid rgba(255, 255, 255, 0.05)',
  },
  block: {
    marginBottom: '2.5rem',
  },
  sectionTitle: {
    fontFamily: "'Oswald', sans-serif",
    fontSize: '1.25rem',
    fontWeight: 700,
    textTransform: 'uppercase',
    marginBottom: '1rem',
    color: '#f97316',
  },
  list: {
    paddingLeft: '1.5rem',
    color: '#a3a3a3',
    lineHeight: 1.8,
  },
  subList: {
    paddingLeft: '1.5rem',
    marginTop: '0.5rem',
  },
}

export default Regulations