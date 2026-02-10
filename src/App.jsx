import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';
import MissionsList from './components/MissionsList/MissionsList';
import ProductsList from './components/ProductsList/ProductsList';
import NewsList from './components/NewsList/NewsList';
import './App.css';

// Плейсхолдер-страницы (можно потом заполнить)
function CampaignsPage() {
  return (
    <div className="page-placeholder">
      <h1>Кампании</h1>
      <p>Здесь будут доступные миссии и кампании Red Alert.</p>
    </div>
  );
}

function AchievementsPage() {
  return (
    <div className="page-placeholder">
      <h1>Достижения</h1>
      <p>Список твоих наград и достижений за карьеру Командира.</p>
    </div>
  );
}

function LeaderboardPage() {
  return (
    <div className="page-placeholder">
      <h1>Рейтинг</h1>
      <p>Топ-командиры по очкам опыта и победам.</p>
    </div>
  );
}

function SettingsPage() {
  return (
    <div className="page-placeholder">
      <h1>Настройки</h1>
      <p>Настройки графики, звука и управления.</p>
    </div>
  );
}

function AboutPage() {
  return (
    <div className="page-placeholder">
      <h1>О проекте</h1>
      <p>Red Alert Commander — демо-приложение на React + Redux Toolkit.</p>
      <p>Вдохновлено Command & Conquer: Red Alert.</p>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route path="/campaigns" element={<CampaignsPage />} />
            <Route path="/achievements" element={<AchievementsPage />} />
            <Route path="/leaderboard" element={<LeaderboardPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;