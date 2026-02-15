import { createSlice } from "@reduxjs/toolkit";

const DataSlice = createSlice({
  name: "Details",
  initialState: {
    arr: []
  },
  reducers: {
    addData: (state, action) => {
      state.arr.push(action.payload);
    }
  }
});

export const { addData } = DataSlice.actions;
export default DataSlice.reducer;
