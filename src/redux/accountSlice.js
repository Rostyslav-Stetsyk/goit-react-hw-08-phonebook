import { createSlice } from '@reduxjs/toolkit';
import {
  loginAccount,
  logoutAccount,
  refreshAccount,
  registerAccount,
} from './operations';
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
    token: null,
    user: { name: null, email: null },
    isLoading: false,
    error: null,
    isLogined: false,
    isRefreshing: true,
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
      .addCase(loginAccount.pending, loading)
      .addCase(logoutAccount.fulfilled, state => {
        state.isLogined = false;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(logoutAccount.rejected, rejected)
      .addCase(logoutAccount.pending, loading)
      .addCase(refreshAccount.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLogined = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase(refreshAccount.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshAccount.rejected, (state, action) => {
        state.isRefreshing = false;
        state.error = action.payload;
      });
  },
});

export const persistedAccountReducer = persistReducer(
  persistConfig,
  accountSlice.reducer
);
