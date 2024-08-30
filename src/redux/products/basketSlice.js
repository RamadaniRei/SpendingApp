import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  money: 30000000,
  total: 0,
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const { id, price, title } = action.payload;
      const existingItem = state.basket.find((item) => item.id === id);

      if (existingItem) {
        existingItem.amount += 1;
      } else {
        state.basket.push({ id, amount: 1, title, price });
      }
      state.total += price;
    },
    removeItem: (state, action) => {
      const { id, price } = action.payload;
      const existingItem = state.basket.find((item) => item.id === id);

      if (existingItem) {
        existingItem.amount -= 1;
        if (existingItem.amount === 0) {
          state.basket = state.basket.filter((item) => item.id !== id);
        }
        state.total -= price;
      }
    },
    resetBasket: (state) => {
      state.basket = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, resetBasket } = basketSlice.actions;

export default basketSlice.reducer;
