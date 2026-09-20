function Footer() {
  return (
    <footer style={styles.footer} role="contentinfo">
      <div style={styles.container}>
        <p style={styles.copyright}>
          &copy; {new Date().getFullYear()} iFitt. Wszelkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  )
}

const styles = {
  footer: {
    padding: '2rem 1rem',
    borderTop: '1px solid rgba(255, 255, 255, 0.05)',
    background: 'rgba(10, 10, 10, 0.8)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    textAlign: 'center',
  },
  copyright: {
    fontFamily: "'Oswald', sans-serif",
    color: '#a3a3a3',
    fontSize: '0.875rem',
  },
}

export default Footer