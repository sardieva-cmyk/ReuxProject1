import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import mockData from '../../data/mockData.json';

// Имитация загрузки данных с задержкой
export const fetchMissions = createAsyncThunk(
  'content/fetchMissions',
  async (_, { rejectWithValue }) => {
    try {
      // Имитируем сетевую задержку (2 секунды)
      await new Promise(resolve => setTimeout(resolve, 2000));
      return mockData.missions;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchProducts = createAsyncThunk(
  'content/fetchProducts',
  async (_, { rejectWithValue }) => {
    try {
      // Имитируем сетевую задержку (1.5 секунды)
      await new Promise(resolve => setTimeout(resolve, 1500));
      return mockData.products;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchNews = createAsyncThunk(
  'content/fetchNews',
  async (_, { rejectWithValue }) => {
    try {
      // Имитируем сетевую задержку (1 секунда)
      await new Promise(resolve => setTimeout(resolve, 1000));
      return mockData.news;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  missions: {
    items: [],
    loading: false,
    error: null,
    selectedId: null
  },
  products: {
    items: [],
    loading: false,
    error: null
  },
  news: {
    items: [],
    loading: false,
    error: null
  }
};

const contentSlice = createSlice({
  name: 'content',
  initialState,
  reducers: {
    selectMission: (state, action) => {
      state.missions.selectedId = action.payload;
    },
    addMission: (state, action) => {
      const mission = { id: Date.now(), ...action.payload };
      state.missions.items.unshift(mission);
      localStorage.setItem('missions', JSON.stringify(state.missions.items));
    },
    deleteMission: (state, action) => {
      const id = action.payload;
      state.missions.items = state.missions.items.filter(m => m.id !== id);
      localStorage.setItem('missions', JSON.stringify(state.missions.items));
    }
  },
  extraReducers: (builder) => {
    // Миссии
    builder
      .addCase(fetchMissions.pending, (state) => {
        state.missions.loading = true;
        state.missions.error = null;
      })
      .addCase(fetchMissions.fulfilled, (state, action) => {
        state.missions.loading = false;
        // Если в localStorage уже есть миссии (после добавления/удаления), используем их
        const stored = localStorage.getItem('missions');
        if (stored) {
          try {
            state.missions.items = JSON.parse(stored);
          } catch (e) {
            state.missions.items = action.payload;
            localStorage.setItem('missions', JSON.stringify(action.payload));
          }
        } else {
          state.missions.items = action.payload;
          localStorage.setItem('missions', JSON.stringify(action.payload));
        }
      })
      .addCase(fetchMissions.rejected, (state, action) => {
        state.missions.loading = false;
        state.missions.error = action.payload;
      })
      // Товары
      .addCase(fetchProducts.pending, (state) => {
        state.products.loading = true;
        state.products.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products.loading = false;
        state.products.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.products.loading = false;
        state.products.error = action.payload;
      })
      // Новости
      .addCase(fetchNews.pending, (state) => {
        state.news.loading = true;
        state.news.error = null;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.news.loading = false;
        state.news.items = action.payload;
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.news.loading = false;
        state.news.error = action.payload;
      });
  }
});

export const { selectMission, addMission, deleteMission } = contentSlice.actions;
export default contentSlice.reducer;
