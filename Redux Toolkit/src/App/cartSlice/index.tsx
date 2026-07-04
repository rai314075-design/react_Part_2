import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

// Product type describes each item with id, name, and price.
interface Product {
  id: number;
  name: string;
  price: number;
}

// CartState defines two arrays in the Redux state:
// - products: all available product items shown in the Product component
// - cart: items currently added to the shopping cart
interface CartState {
  products: Product[];
  cart: Product[];
}

const initialState: CartState = {
  products: [
    { id: 1, name: "Laptop", price: 28998 },
    { id: 2, name: "phone", price: 28998 },
    { id: 3, name: "tablet", price: 28998 },
  ],
  cart: [],
};

// createSlice builds the Redux reducer and action creators in one place.
// Syntax: createSlice({ name, initialState, reducers })
// Each reducer receives state and action. Toolkit uses Immer so we can mutate state safely.
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<Product>) {
      // When dispatched, this action adds a product to the cart array.
      state.cart.push(action.payload);
    },
    removeProduct(state, action: PayloadAction<number>) {
      // When dispatched, this action removes a product by id from cart.
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
    clearCart: (state) => {
      // Clears all items from the cart.
      state.cart = [];
    },
  },
});

// Exported action creators are used by components to dispatch events.
export const { addProduct, removeProduct, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
