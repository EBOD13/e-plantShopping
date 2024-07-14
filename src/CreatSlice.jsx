import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find(item => item.name === name);
      if (existingItem) {
        existingItem.quantity++; // Increment quantity if item exists
      } else {
        state.items.push({ name, image, cost, quantity: 1 }); // Add new item with quantity 1
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(item => item.name !== action.payload); // Remove item by name
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // Update the item's quantity
      }
    },
  },
});

// Export actions for use in components
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Export the reducer to be used in the store
export default cartSlice.reducer;
