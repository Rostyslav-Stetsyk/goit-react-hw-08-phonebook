import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

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
  async (accauntData, thunkAPI) => {
    try {
      const response = await axios.post('/users/signup', accauntData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const loginAccount = createAsyncThunk(
  'account/loginAccount',
  async (accauntData, thunkAPI) => {
    try {
      const response = await axios.post('/users/login', accauntData);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
