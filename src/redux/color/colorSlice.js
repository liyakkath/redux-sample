import { createSlice } from "@reduxjs/toolkit";
export const colorSlice = createSlice({
  name: "color",
  initialState: {
    value: Math.random().toString(16).substr(-6),
  },
  reducers: {
    change_color: (state) => {
      let color = Math.random().toString(16).substr(-6);
      state.value = color;
    },
  },
});
export const { change_color } = colorSlice.actions;
export default colorSlice.reducer;
