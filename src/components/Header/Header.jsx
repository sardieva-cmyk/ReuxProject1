import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>Red Alert Commander</h1>
          <p className="tagline">Собирай опыт и становись сильнее!</p>
        </div>

        <nav className="navbar">
          <ul className="nav-menu">
            <li className="nav-item">
              <Link to="/" className="nav-link">Главная</Link>
            </li>
            <li className="nav-item">
              <Link to="/campaigns" className="nav-link">Кампании</Link>
            </li>
            <li className="nav-item">
              <Link to="/achievements" className="nav-link">Достижения</Link>
            </li>
            <li className="nav-item">
              <Link to="/leaderboard" className="nav-link">Рейтинг</Link>
            </li>
            <li className="nav-item">
              <Link to="/settings" className="nav-link">Настройки</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">О проекте</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
