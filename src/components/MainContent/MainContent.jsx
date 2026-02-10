import { useSelector, useDispatch } from 'react-redux';
import { addScout, addAttack, addCapture, resetCampaign } from '../../features/counter/counterSlice';
import MissionsList from '../MissionsList/MissionsList';
import ProductsList from '../ProductsList/ProductsList';
import NewsList from '../NewsList/NewsList';
import './MainContent.css';

function MainContent() {
  const { xp, totalXp, level, message } = useSelector(state => state.counter);
  const dispatch = useDispatch();

  // Прогресс до следующего уровня
  let progress = 0;
  let nextLevelXp = 500;
  let levelName = "Rookie Commander";

  if (level === 2) {
    progress = ((xp - 500) / 1000) * 100;
    nextLevelXp = 1500;
    levelName = "Veteran Commander";
  } else if (level === 3) {
    progress = 100; // max
    levelName = "Elite Commander";
  } else {
    progress = (xp / 500) * 100;
  }

  return (
    <main className="main-content">
      <div className="card">
        <h2 className="message">{message}</h2>

        <div className="xp-display">
          <span className="xp-value">{xp} XP</span>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
          <p className="progress-text">
            До следующего уровня: {Math.max(0, nextLevelXp - xp)} XP
          </p>
        </div>

        <h3 className="level">Уровень: {levelName}</h3>
        <p className="total">Всего опыта за карьеру: {totalXp}</p>

        <div className="controls">
          <button className="btn scout" onClick={() => dispatch(addScout())}>
            Разведка (+50 XP)
          </button>
          <button className="btn attack" onClick={() => dispatch(addAttack())}>
            Атака (+150 XP)
          </button>
          <button className="btn capture" onClick={() => dispatch(addCapture())}>
            Захват базы (+300 XP)
          </button>
          <button className="btn reset" onClick={() => dispatch(resetCampaign())}>
            Сброс кампании
          </button>
        </div>
      </div>

      {/* Новые контенты из JSON */}
      <MissionsList />
      <ProductsList />
      <NewsList />
    </main>
  );
}

export default MainContent;
