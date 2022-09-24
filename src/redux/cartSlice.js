import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: 0,
    items: {}
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    updateItems: (state, action) => {
      state.items = action.payload
    },
  },
});

export const { increment, decrement, incrementByAmount } = cartSlice.actions;

export default cartSlice.reducer;
