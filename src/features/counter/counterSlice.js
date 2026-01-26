// src/features/counter/counterSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
  welcomeText: "Привет! Это данные из Redux 😎",
  clicks: 0
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
      state.clicks += 1;
    },
    decrement: (state) => {
      state.value -= 1;
      state.clicks += 1;
    },
    reset: (state) => {
      state.value = 0;
      state.clicks += 1;
    }
  }
});

// Экспортируем actions (чтобы использовать в компонентах)
export const { increment, decrement, reset } = counterSlice.actions;

// Экспортируем reducer (для store)
export default counterSlice.reducer;