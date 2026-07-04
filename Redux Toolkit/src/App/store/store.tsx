import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice/Features";
import cartSlice from "../cartSlice";

// The Redux store is configured here and ties together multiple reducers.
// The `reducer` object defines the top-level state keys: counter and cart.
// Code route: Product.tsx dispatches actions -> store uses cartSlice reducer -> state updates.
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    cart: cartSlice,
  },
});

// RootState is the full Redux state type inferred from the store.
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
