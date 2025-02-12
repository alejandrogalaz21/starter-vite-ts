import type { PayloadAction } from '@reduxjs/toolkit';

import { createSlice, createAction } from '@reduxjs/toolkit';

// import store from '../store';

export enum RequestActionTypes {
  FETCH = 'fetch',
  CREATE = 'create',
  UPDATE = 'update',
  FETCH_ALL = 'fetch-all',
  DELETE = 'delete',
}

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
    requestStart(state) {
      state.loading = true;
      state.error = null;
    },

    fetchSuccess(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = null;
      state.data = action.payload;
    },

    requestFailure(state, action: PayloadAction<any>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchSuccess, requestFailure } = app.actions;
export const appReducer = app.reducer;

export enum RequestTypes {
  FETCH = 'fetch',
  CREATE = 'create',
  UPDATE = 'update',
  FETCH_ALL = 'fetch-all',
  DELETE = 'delete',
}

export const requestStart = createAction(
  app.actions.requestStart.type,
  (
    payload: {
      type?: RequestTypes;
      id?: string | number;
      [key: string]: any;
    } = {} as any
  ) => ({
    payload: {
      ...payload,
      type: payload.type || RequestTypes.FETCH_ALL,
    },
  })
);
