import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

interface CounterState {
  value: number
}

const initialState: CounterState = {
  value: 10,
}

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.value += 1
    },
    incrementBy10(state) {
      state.value += 10
    },
    decrement(state) {
      state.value -= 1
    },
    decrementBy10(state) {
      state.value -= 10
    },
    incrementByValue(state, action: PayloadAction<number>) {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementBy10, decrementBy10,incrementByValue } =
  counterSlice.actions;
export default counterSlice.reducer;
