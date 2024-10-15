import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  quantity: 0,
};

const cartSlice = createSlice({
  name: 'cartProducts',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const existItem = state.items.find(item => item.id === action.payload.id);
      if (existItem) {
        // existItem.quantity += 1
        console.log('exist');
      } else {
        state.items.push(action.payload);
      }
    },
    removeFromCart: (state, action) => {
      const index = state.items.findIndex(item => item.id === action.payload);
      if (index !== -1) {
        state.items.splice(index, 1);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
