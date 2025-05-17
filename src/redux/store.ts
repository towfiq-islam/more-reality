// lib/store.ts
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
  reducer: {
    // counter: counterReducer,
  },
});

// Types for dispatch and selector
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
