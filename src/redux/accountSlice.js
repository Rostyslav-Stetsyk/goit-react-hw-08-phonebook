import { createSlice } from '@reduxjs/toolkit';
import {
  loginAccount,
  logoutAccount,
  refreshAccount,
  registerAccount,
} from './operations';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import toast from 'react-hot-toast';

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
      .addCase(registerAccount.rejected, (state, action) => {
        toast.error('User with this email already exists');
        state.error = action.payload;
        state.isLoading = false;
      })
      .addCase(registerAccount.pending, loading)
      .addCase(loginAccount.fulfilled, (state, action) => {
        state.token = action.payload.token;
        state.user = action.payload.user;
        state.isLogined = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(loginAccount.rejected, (state, action) => {
        toast.error('Your email or password incorect. Please try again.');
        state.error = action.payload;
        state.isLoading = false;
      })
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
