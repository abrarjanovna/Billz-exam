import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  shops: [],
};

export const NewShopSlice = createSlice({
  name: "shops",
  initialState,
  reducers: {
    addShop: (state, action) => {
      state.shops.push(action.payload);
    },
    deleteShop: (state, action) => {
      return state.shops.filter((shop) => shop.id !== action.payload);
    },
  },
});

export const { addShop, deleteShop } = NewShopSlice.actions;
export default NewShopSlice.reducer;