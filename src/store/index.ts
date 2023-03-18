import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import charactersSlice  from './characterSlices';
import {characterApi} from './characterApi';
import userProfileSlice  from './userProfile';

export const store = configureStore({
  reducer: {
    characterProfile: charactersSlice,
    userProfile:userProfileSlice,
    [characterApi.reducerPath]:characterApi.reducer,
  },
  middleware: (getDefaultMiddleware: any) => getDefaultMiddleware({}).concat([characterApi.middleware])
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
