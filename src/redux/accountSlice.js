import { createSlice } from '@reduxjs/toolkit';
import { loginAccount, registerAccount } from './operations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rejected = (state, action) => {
  state.error = action.payload;
  state.isLoading = false;
};

const loading = state => {
  state.isLoading = true;
};

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    token: '',
    user: { name: null },
    isLoading: false,
    error: null,
    isLogined: false,
  },
  extraReducers: builder => {
    builder
      .addCase(registerAccount.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLogined = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(registerAccount.rejected, rejected)
      .addCase(registerAccount.pending, loading)
      .addCase(loginAccount.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLogined = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginAccount.rejected, rejected)
      .addCase(loginAccount.pending, loading);
  },
});

export const persistedAccountReducer = persistReducer(
  persistConfig,
  accountSlice.reducer
);
