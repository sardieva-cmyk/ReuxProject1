// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import contentReducer from '../features/content/contentSlice';
import authReducer from '../features/auth/authSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,   // подключаем наш slice
    content: contentReducer,   // подключаем контент slice
    auth: authReducer          // аутентификация
  }
});