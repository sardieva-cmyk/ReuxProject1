import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  xp: 0,                // текущие очки опыта
  totalXp: 0,           // общее за всё время (не сбрасывается)
  level: 1,             // 1 = Rookie, 2 = Veteran, 3 = Elite
  message: "Добро пожаловать, Командир! Собирай XP и повышай уровень!",
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addScout: (state) => {
      state.xp += 50;
      state.totalXp += 50;
      state.message = "Разведка выполнена! +50 XP";
      updateLevel(state);
    },
    addAttack: (state) => {
      state.xp += 150;
      state.totalXp += 150;
      state.message = "Атака успешна! +150 XP";
      updateLevel(state);
    },
    addCapture: (state) => {
      state.xp += 300;
      state.totalXp += 300;
      state.message = "База захвачена! +300 XP";
      updateLevel(state);
    },
    resetCampaign: (state) => {
      state.xp = 0;
      state.level = 1;
      state.message = "Кампания сброшена. Начинаем заново, Командир!";
    },
  },
});

// Вспомогательная функция (не редьюсер, просто логика)
function updateLevel(state) {
  if (state.xp >= 1501) {
    state.level = 3;
  } else if (state.xp >= 501) {
    state.level = 2;
  } else {
    state.level = 1;
  }
}

export const { addScout, addAttack, addCapture, resetCampaign } = counterSlice.actions;
export default counterSlice.reducer;