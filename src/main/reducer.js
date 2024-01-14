import { createSlice } from "@reduxjs/toolkit";

const Slice = createSlice({
  name: "add",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({
        id: Date.now(),
        title: action.payload,
      });
    },
    deleted: (state, action) => {
      return state.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { add, deleted } = Slice.actions;
export default Slice.reducer;
