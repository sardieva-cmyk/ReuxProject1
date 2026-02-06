import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import MainContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer';
import './App.css';

// Pages (can be created later)
function CampaignsPage() {
  return <div className="page-placeholder">Страница "Кампании" - в разработке</div>;
}

function AchievementsPage() {
  return <div className="page-placeholder">Страница "Достижения" - в разработке</div>;
}

function LeaderboardPage() {
  return <div className="page-placeholder">Страница "Рейтинг" - в разработке</div>;
}

function SettingsPage() {
  return <div className="page-placeholder">Страница "Настройки" - в разработке</div>;
}

function AboutPage() {
  return <div className="page-placeholder">Страница "О проекте" - в разработке</div>;
}

function App() {
  return (
    <Router>
      <div className="app-wrapper">
        <Header />
        
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/leaderboard" element={<LeaderboardPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;