import { configureStore } from '@reduxjs/toolkit';
import objectsSlice from './slices/objectsSlice';

export const store = configureStore({
  reducer: { items: objectsSlice }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
