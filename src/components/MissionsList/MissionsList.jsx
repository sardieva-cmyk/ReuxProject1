import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMissions, selectMission } from '../../features/content/contentSlice';
import './MissionsList.css';

function MissionsList() {
  const dispatch = useDispatch();
  const missions = useSelector(state => state.content.missions.items);
  const loading = useSelector(state => state.content.missions.loading);
  const selectedId = useSelector(state => state.content.missions.selectedId);

  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);

  const selectedMission = missions.find(m => m.id === selectedId);

  if (loading) {
    return (
      <div className="missions-container">
        <div className="loading">⏳ Загрузка миссий...</div>
      </div>
    );
  }

  return (
    <div className="missions-container">
      <h2>🎯 Доступные миссии</h2>
      <div className="missions-layout">
        {/* LIST */}
        <div className="missions-list">
          {missions.map(mission => (
            <div
              key={mission.id}
              className={`mission-item ${selectedId === mission.id ? 'active' : ''}`}
              onClick={() => dispatch(selectMission(mission.id))}
            >
              <h3>{mission.title}</h3>
              <p className="difficulty" data-level={mission.difficulty.replace(/\s/g, '')}>
                {mission.difficulty}
              </p>
              <p className="reward">+{mission.reward} XP</p>
            </div>
          ))}
        </div>

        {/* DETAIL */}
        <div className="mission-detail">
          {selectedMission ? (
            <>
              <h3>{selectedMission.title}</h3>
              <div className="detail-info">
                <p><strong>Описание:</strong> {selectedMission.description}</p>
                <p><strong>Полная информация:</strong> {selectedMission.details}</p>
                <p><strong>Местоположение:</strong> {selectedMission.location}</p>
                <p><strong>Сложность:</strong> <span className={`difficulty ${selectedMission.difficulty.replace(/\s/g, '')}`}>{selectedMission.difficulty}</span></p>
                <p><strong>Награда:</strong> <span className="reward">+{selectedMission.reward} XP</span></p>
                <p><strong>Статус:</strong> <span className={`status ${selectedMission.status.replace(/\s/g, '')}`}>{selectedMission.status}</span></p>
              </div>
              <button className="accept-btn">✅ Принять миссию</button>
            </>
          ) : (
            <div className="no-selection">
              <p>Выберите миссию слева для просмотра деталей</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default MissionsList;
