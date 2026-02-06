import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p>&copy; 2026 Red Alert Commander. Вдохновлено Command & Conquer: Red Alert</p>
          <p>Redux Demo Project | React + Redux Toolkit</p>
        </div>
        <div className="footer-links">
          <a href="#privacy" className="footer-link">Политика конфиденциальности</a>
          <span className="separator">•</span>
          <a href="#terms" className="footer-link">Условия использования</a>
          <span className="separator">•</span>
          <a href="#contact" className="footer-link">Контакты</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
