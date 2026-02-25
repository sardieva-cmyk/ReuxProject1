import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import './Header.css';

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);

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
              <NavLink to="/" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Главная</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/campaigns" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Кампании</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/achievements" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Достижения</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/leaderboard" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Рейтинг</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/settings" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Настройки</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/about" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>О проекте</NavLink>
            </li>

            {!user && (
              <>
                <li className="nav-item">
                  <NavLink to="/login" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Вход</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/register" className={({isActive}) => `nav-link ${isActive ? 'active' : ''}`}>Регистрация</NavLink>
                </li>
              </>
            )}

            {user && (
              <li className="nav-item">
                <div className="nav-link" style={{display: 'flex', gap: '0.5rem', alignItems: 'center'}}>
                  <span>{user.username} {user.role === 'root' ? '(Root)' : ''}</span>
                  <button className="logout-btn" onClick={() => dispatch(logout())}>Выйти</button>
                </div>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
