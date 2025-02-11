import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice } from '@reduxjs/toolkit';

export type AppState = {
  data: [];
  loading: boolean;
  error: any | null;
};

const initialState: AppState = {
  loading: false,
  error: null,
  data: [],
};

const app = createSlice({
  name: 'app',
  initialState,
  reducers: {
    start(state) {
      state.loading = true;
      state.error = null;
    },

    success(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },

    failure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { start, success, failure } = app.actions;
export const appReducer = app.reducer;
