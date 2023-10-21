import { configureStore } from '@reduxjs/toolkit';
import { filterReducer } from './filterSlice';
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { contactsReducer } from './contactSlice';
import { persistedAccountReducer } from './accountSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    account: persistedAccountReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
