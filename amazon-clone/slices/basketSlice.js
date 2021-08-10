import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};
export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {
      let newProducts = state.items.filter(
        (item, i) => item.id !== action.payload.id
      );

      return {
        items: newProducts,
      };
    },
  },
});
export const { addToBasket, removeFromBasket } = basketSlice.actions;
export const selectItems = (state) => state.basket.items;
export const selectTotal = (state) =>
  state.basket.items.reduce((total, item) => total + item.price, 0);
export default basketSlice.reducer;
