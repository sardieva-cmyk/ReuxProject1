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
        state.missions.items = action.payload;
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

export const { selectMission } = contentSlice.actions;
export default contentSlice.reducer;
