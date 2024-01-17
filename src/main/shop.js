import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shop: [],
};

export const NewStore = createSlice({
  name: "shops",
  initialState,
  reducers: {
    add: (state, action) => {
      state.shop.push(action.payload);
    },
    deleted: (state, action) => {
      return state.shop.filter((shops) => shops.id !== action.payload);
    },
  },
});

export const { add, deleted } = NewStore.actions;
export default NewStore.reducer;