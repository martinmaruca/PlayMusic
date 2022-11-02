import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';
import { shazamCoreApi } from './services/shazomCore';

export const store = configureStore({
  reducer: {
    [shazamCoreApi.reducerPath]: shazamCoreApi.reducer,
    player: playerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(shazamCoreApi.middleware),
});
