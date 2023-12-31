import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

const axiosSetAuthToken = token => {
  axios.defaults.headers.common['Authorization'] = token;
};

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContacts',
  async (contact, thunkAPI) => {
    try {
      const response = await axios.post('contacts', contact);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(`contacts/${id}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const registerAccount = createAsyncThunk(
  'account/createAccount',
  async (accountData, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', accountData);
      axiosSetAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginAccount = createAsyncThunk(
  'account/loginAccount',
  async (accountData, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', accountData);
      axiosSetAuthToken(response.data.token);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logoutAccount = createAsyncThunk(
  'account/logoutAccount',
  async (token, thunkAPI) => {
    try {
      await axios.post('/users/logout', token);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const refreshAccount = createAsyncThunk(
  'account/refreshAccount',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    if (!state.account.token) return thunkAPI.rejectWithValue('No user');

    try {
      axiosSetAuthToken(state.account.token);
      const response = await axios.get('/users/current');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
