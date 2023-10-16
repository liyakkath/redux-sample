import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "count",
  initialState: {
    value: 5,
  },
  reducers: {
    increase_count: (state) => {
      state.value += 1;
    },
    decrease_count: (state) => {
      if (state.value >= 1) {
        state.value -= 1;
      }
    },
  },
});
export const { increase_count, decrease_count } = counterSlice.actions;
export default counterSlice.reducer;
